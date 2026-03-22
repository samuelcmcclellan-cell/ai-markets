#!/usr/bin/env node
/**
 * scripts/refresh-equities.mjs
 *
 * Fetches live YTD returns from Yahoo Finance and updates:
 *   - data/equities.ts
 *   - components/slides/11_SoftwareUnderPressure.tsx
 *   - components/slides/12_HardwareVsSoftware.tsx
 *   - components/slides/02_WhyAIMatters.tsx
 *   - components/slides/16_KeyTakeaways.tsx
 *
 * Usage:  node scripts/refresh-equities.mjs
 *         npm run refresh
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Tickers ──────────────────────────────────────────────────────────────────

const TICKERS = [
  'SOXX', 'IGV', 'XLK', 'QQQ',
  'MU', 'TSM', '000660.KS', '005930.KS',
  'CRM', 'ADBE', 'SHOP', 'INTU', 'MSFT', 'NOW',
  'CRWD', 'FTNT', 'PLTR', 'DDOG',
];

// ── Yahoo Finance helpers ────────────────────────────────────────────────────

async function fetchChart(ticker, interval = '1d', range = 'ytd') {
  const url =
    `https://query1.finance.yahoo.com/v8/finance/chart/` +
    `${encodeURIComponent(ticker)}?interval=${interval}&range=${range}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.chart.error) throw new Error(json.chart.error.description);
  const result = json.chart.result?.[0];
  if (!result) throw new Error('No result in response');
  return result;
}

function ytdPct(result) {
  const closes = result.indicators.quote[0].close;
  const valid = closes.filter(Boolean);
  if (valid.length < 2) throw new Error('Insufficient data points');
  return ((valid[valid.length - 1] - valid[0]) / valid[0]) * 100;
}

// ── Formatters ───────────────────────────────────────────────────────────────

function fmt(val) {
  const n = Math.round(val);
  return n >= 0 ? `+${n}%` : `${n}%`;
}

function fmtHtml(val) {
  // Use &minus; HTML entity for negative numbers (typographic convention in slides)
  const n = Math.round(val);
  return n >= 0 ? `+${n}%` : `&minus;${Math.abs(n)}%`;
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Fetch all YTD returns ────────────────────────────────────────────────────

async function fetchAllYTD() {
  console.log('Fetching YTD returns from Yahoo Finance...\n');
  const ytd = {};
  const settled = await Promise.allSettled(
    TICKERS.map(async (t) => {
      const chart = await fetchChart(t);
      ytd[t] = ytdPct(chart);
    })
  );
  TICKERS.forEach((t, i) => {
    if (settled[i].status === 'fulfilled') {
      console.log(`  ${t.padEnd(14)} ${fmt(ytd[t])}`);
    } else {
      console.error(`  ${t.padEnd(14)} FAILED: ${settled[i].reason.message}`);
      ytd[t] = null;
    }
  });
  console.log('');
  return ytd;
}

// ── Build divergence chart series (slide 12) ─────────────────────────────────

async function buildDivergenceChart() {
  const [soxx, qqq, igv] = await Promise.all([
    fetchChart('SOXX', '1d', 'ytd'),
    fetchChart('QQQ', '1d', 'ytd'),
    fetchChart('IGV', '1d', 'ytd'),
  ]);

  function toDateMap(result) {
    const map = {};
    result.timestamp.forEach((ts, i) => {
      const c = result.indicators.quote[0].close[i];
      if (c) map[new Date(ts * 1000).toISOString().slice(0, 10)] = c;
    });
    return map;
  }

  const sm = toDateMap(soxx);
  const qm = toDateMap(qqq);
  const gm = toDateMap(igv);

  // Base = first available close
  const sb = Object.values(sm)[0];
  const qb = Object.values(qm)[0];
  const gb = Object.values(gm)[0];

  function nearest(map, target) {
    for (let d = 0; d <= 4; d++) {
      for (const s of [0, 1, -1]) {
        const dt = new Date(target + 'T12:00:00Z');
        dt.setDate(dt.getDate() + s * d);
        const k = dt.toISOString().slice(0, 10);
        if (map[k]) return map[k];
      }
    }
    return null;
  }

  // Fixed weekly checkpoints
  const checkpoints = [
    ['Jan 1',  '2026-01-02'],
    ['Jan 10', '2026-01-10'],
    ['Jan 17', '2026-01-16'],
    ['Jan 24', '2026-01-23'],
    ['Jan 31', '2026-01-30'],
    ['Feb 7',  '2026-02-06'],
    ['Feb 14', '2026-02-13'],
    ['Feb 21', '2026-02-20'],
    ['Feb 28', '2026-02-27'],
    ['Mar 7',  '2026-03-06'],
    ['Mar 14', '2026-03-13'],
  ];

  const rows = [];
  for (const [label, date] of checkpoints) {
    const s = nearest(sm, date);
    const q = nearest(qm, date);
    const g = nearest(gm, date);
    if (s && q && g) {
      rows.push({
        week: label,
        semis:    +((s / sb) * 100).toFixed(1),
        nasdaq:   +((q / qb) * 100).toFixed(1),
        software: +((g / gb) * 100).toFixed(1),
      });
    }
  }

  // Append most recent trading day
  const latestDate = Object.keys(sm).sort().pop();
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const ld = new Date(latestDate + 'T12:00:00Z');
  const latestLabel = `${MONTHS[ld.getUTCMonth()]} ${ld.getUTCDate()}`;

  const ls = sm[latestDate];
  const lq = nearest(qm, latestDate);
  const lg = nearest(gm, latestDate);
  if (ls && lq && lg && rows.at(-1)?.week !== latestLabel) {
    rows.push({
      week: latestLabel,
      semis:    +((ls / sb) * 100).toFixed(1),
      nasdaq:   +((lq / qb) * 100).toFixed(1),
      software: +((lg / gb) * 100).toFixed(1),
    });
  }

  return rows;
}

// ── File I/O ─────────────────────────────────────────────────────────────────

function read(relPath) {
  return readFileSync(join(ROOT, relPath), 'utf8');
}

function write(relPath, content) {
  writeFileSync(join(ROOT, relPath), content, 'utf8');
  console.log(`  ✓  ${relPath}`);
}

// ── Update data/equities.ts ──────────────────────────────────────────────────

function updateEquities(ytd) {
  let f = read('data/equities.ts');
  const orig = f;

  // hardwarePerformance / softwarePerformance: { ticker: "X", name: "Y", ytd: "Z%" }
  for (const t of ['SOXX', 'IGV', 'TSM', 'CRM', 'ADBE', 'SHOP', 'MSFT']) {
    if (ytd[t] == null) continue;
    f = f.replace(
      new RegExp(`({ ticker: "${escRe(t)}", name: "[^"]*", ytd: )"[^"]*"`),
      `$1"${fmt(ytd[t])}"`
    );
  }

  // hardwarePerformance also has MU, Samsung, SK Hynix with name: key
  for (const t of ['MU', '005930.KS', '000660.KS']) {
    if (ytd[t] == null) continue;
    f = f.replace(
      new RegExp(`({ ticker: "${escRe(t)}", name: "[^"]*", ytd: )"[^"]*"`),
      `$1"${fmt(ytd[t])}"`
    );
  }

  // softwareDeclines: { ticker: "X", company: "Y", ytd: N, ... }  — bare number
  for (const t of ['CRM', 'ADBE', 'SHOP', 'INTU', 'MSFT', 'NOW']) {
    if (ytd[t] == null) continue;
    f = f.replace(
      new RegExp(`(\\{ ticker: "${t}", company: "[^"]*", ytd: )-?\\d+`),
      `$1${Math.round(ytd[t])}`
    );
  }

  // memoryEquities: multi-line objects with ytd2026: "+X%"
  for (const [t, key] of [
    ['MU',        'MU'],
    ['000660.KS', '000660.KS'],
    ['005930.KS', '005930.KS'],
  ]) {
    if (ytd[key] == null) continue;
    f = f.replace(
      new RegExp(`(ticker: "${escRe(t)}"[\\s\\S]{1,400}?ytd2026: )"[^"]*"`),
      `$1"${fmt(ytd[key])}"`
    );
  }

  if (f !== orig) write('data/equities.ts', f);
  else console.log('  –  data/equities.ts (no change)');
}

// ── Update slide 11 ──────────────────────────────────────────────────────────

function updateSlide11(ytd) {
  let f = read('components/slides/11_SoftwareUnderPressure.tsx');
  const orig = f;

  // saasPerformance array: { name: "X", value: N }
  const nameToTicker = {
    CrowdStrike: 'CRWD',
    Fortinet:    'FTNT',
    Palantir:    'PLTR',
    Shopify:     'SHOP',
    Datadog:     'DDOG',
    Microsoft:   'MSFT',
    Adobe:       'ADBE',
    Salesforce:  'CRM',
  };
  for (const [name, ticker] of Object.entries(nameToTicker)) {
    if (ytd[ticker] == null) continue;
    f = f.replace(
      new RegExp(`({ name: "${name}", value: )-?\\d+`),
      `$1${Math.round(ytd[ticker])}`
    );
  }

  // IGV big number:  <p ...text-red-400">-20%</p>
  if (ytd['IGV'] != null) {
    f = f.replace(
      /(<p className="text-4xl font-mono font-bold text-red-400">)-?[\d]+%(<\/p>)/,
      `$1${fmt(ytd['IGV'])}$2`
    );
  }

  // XLK big number:  <p ...text-slate-300">-4%</p>
  if (ytd['XLK'] != null) {
    f = f.replace(
      /(<p className="text-4xl font-mono font-bold text-slate-300">)-?[\d]+%(<\/p>)/,
      `$1${fmt(ytd['XLK'])}$2`
    );
  }

  // "Xpt gap" between IGV and XLK
  if (ytd['IGV'] != null && ytd['XLK'] != null) {
    const gap = Math.abs(Math.round(ytd['IGV']) - Math.round(ytd['XLK']));
    f = f.replace(
      /(<p className="text-2xl font-mono font-bold text-amber-400">\s*)\d+(pt gap)/,
      `$1${gap}$2`
    );
  }

  if (f !== orig) write('components/slides/11_SoftwareUnderPressure.tsx', f);
  else console.log('  –  components/slides/11_SoftwareUnderPressure.tsx (no change)');
}

// ── Update slide 12 ──────────────────────────────────────────────────────────

async function updateSlide12(ytd) {
  let f = read('components/slides/12_HardwareVsSoftware.tsx');
  const orig = f;

  // Rebuild divergenceChart
  try {
    const rows = await buildDivergenceChart();
    const body = rows
      .map(r =>
        `  { week: "${r.week}", semis: ${r.semis}, nasdaq: ${r.nasdaq}, software: ${r.software} },`
      )
      .join('\n');
    f = f.replace(
      /const divergenceChart = \[[\s\S]*?\];/,
      `const divergenceChart = [\n${body}\n];`
    );
    console.log(`  ✓  divergenceChart rebuilt (${rows.length} rows)`);
  } catch (err) {
    console.error(`  ✗  divergenceChart rebuild failed: ${err.message}`);
  }

  // End-of-line labels
  // SOXX label: <span ...text-emerald-400">\n              +13%\n            </span>
  if (ytd['SOXX'] != null) {
    f = f.replace(
      /(className="text-sm font-mono font-bold text-emerald-400">\s*)[+\-\d]+%(\s*<\/span>)/,
      `$1${fmt(ytd['SOXX'])}$2`
    );
  }
  // Nasdaq label (uses &minus; entity): <span ...text-slate-400">&minus;5%</span>
  if (ytd['QQQ'] != null) {
    f = f.replace(
      /(<span className="text-sm font-mono text-slate-400">)(?:&minus;|-)?[\d]+%(<\/span>)/,
      `$1${fmtHtml(ytd['QQQ'])}$2`
    );
  }
  // IGV label: <span ...text-red-400">\n              -20%\n            </span>
  if (ytd['IGV'] != null) {
    f = f.replace(
      /(className="text-sm font-mono font-bold text-red-400">\s*)[+\-\d]+%(\s*<\/span>)/,
      `$1${fmt(ytd['IGV'])}$2`
    );
  }

  // Memory stock cards: { name: "SK Hynix", ticker: "000660.KS", change: "+49%", ... }
  const memCards = [
    ['SK Hynix',  '000660.KS'],
    ['Micron',    'MU'],
    ['Samsung',   '005930.KS'],
  ];
  for (const [name, ticker] of memCards) {
    if (ytd[ticker] == null) continue;
    f = f.replace(
      new RegExp(`({ name: "${name}", ticker: "${escRe(ticker)}", change: )"[^"]*"`),
      `$1"${fmt(ytd[ticker])}"`
    );
  }

  // Software stock cards: { name: "Salesforce", ticker: "CRM", change: "-26%", ... }
  const swCards = [
    ['Salesforce', 'CRM'],
    ['Adobe',      'ADBE'],
    ['ServiceNow', 'NOW'],
  ];
  for (const [name, ticker] of swCards) {
    if (ytd[ticker] == null) continue;
    f = f.replace(
      new RegExp(`({ name: "${name}", ticker: "${ticker}", change: )"[^"]*"`),
      `$1"${fmt(ytd[ticker])}"`
    );
  }

  // IGV footnote: IGV <span ...>-20% YTD</span>
  if (ytd['IGV'] != null) {
    f = f.replace(
      /(IGV <span className="text-red-400">)-?[\d]+% YTD(<\/span>)/,
      `$1${fmt(ytd['IGV'])} YTD$2`
    );
  }

  if (f !== orig) write('components/slides/12_HardwareVsSoftware.tsx', f);
  else console.log('  –  components/slides/12_HardwareVsSoftware.tsx (no change)');
}

// ── Update prose mentions in slides 02 and 16 ────────────────────────────────

function updateProse(ytd) {
  if (ytd['SOXX'] == null || ytd['IGV'] == null) return;
  const soxxAbs = Math.abs(Math.round(ytd['SOXX']));
  const igvAbs  = Math.abs(Math.round(ytd['IGV']));
  const spread  = soxxAbs + igvAbs;

  // Slide 02
  {
    let f = read('components/slides/02_WhyAIMatters.tsx');
    const orig = f;
    f = f.replace(
      /Semiconductor stocks \(SOXX\) up ~\d+% YTD/,
      `Semiconductor stocks (SOXX) up ~${soxxAbs}% YTD`
    );
    f = f.replace(
      /Software stocks \(IGV\) down ~\d+% YTD/,
      `Software stocks (IGV) down ~${igvAbs}% YTD`
    );
    f = f.replace(/A \d+-point spread/, `A ${spread}-point spread`);
    if (f !== orig) write('components/slides/02_WhyAIMatters.tsx', f);
    else console.log('  –  components/slides/02_WhyAIMatters.tsx (no change)');
  }

  // Slide 16
  {
    let f = read('components/slides/16_KeyTakeaways.tsx');
    const orig = f;
    f = f.replace(
      /Semis \(SOXX\) up ~\d+% YTD/,
      `Semis (SOXX) up ~${soxxAbs}% YTD`
    );
    f = f.replace(
      /software \(IGV\) down ~\d+% YTD/,
      `software (IGV) down ~${igvAbs}% YTD`
    );
    if (f !== orig) write('components/slides/16_KeyTakeaways.tsx', f);
    else console.log('  –  components/slides/16_KeyTakeaways.tsx (no change)');
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const t0 = Date.now();
  const today = new Date().toISOString().slice(0, 10);
  console.log(`\n=== refresh-equities — ${today} ===\n`);

  const ytd = await fetchAllYTD();

  console.log('Writing files...\n');
  updateEquities(ytd);
  updateSlide11(ytd);
  await updateSlide12(ytd);
  updateProse(ytd);

  console.log(`\nDone in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

main().catch((err) => {
  console.error('\nFatal:', err.message);
  process.exit(1);
});

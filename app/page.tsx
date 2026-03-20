"use client";

import SlideController from "@/components/SlideController";
import Title from "@/components/slides/01_Title";
import WhyAIMatters from "@/components/slides/02_WhyAIMatters";
import WhatIsAI from "@/components/slides/03_WhatIsAI";
import BubbleDebunk from "@/components/slides/04_BubbleDebunk";
import TheAIStack from "@/components/slides/04_TheAIStack";
import SupplyChainMap from "@/components/slides/05_SupplyChainMap";
import WhoIsBuying from "@/components/slides/06_WhoIsBuying";
import SemiMarketSize from "@/components/slides/08_SemiMarketSize";
import MemoryDeepDive from "@/components/slides/09_MemoryDeepDive";
import AILabs from "@/components/slides/09_AILabs";
import AgenticAI from "@/components/slides/10_AgenticAI";
import HardwareVsSoftware from "@/components/slides/12_HardwareVsSoftware";
import SupplyChainRisk from "@/components/slides/13_SupplyChainRisk";
import PowerSupply from "@/components/slides/14_PowerSupply";
import DemandWall from "@/components/slides/15_DemandWall";
import PoliticalChallenges from "@/components/slides/15_PoliticalChallenges";
import OrbitalCompute from "@/components/slides/15_OrbitalCompute";
import KeyTakeaways from "@/components/slides/16_KeyTakeaways";

const slides = [
  <Title key="01" />,
  <WhyAIMatters key="02" />,
  <WhatIsAI key="03" />,
  <TheAIStack key="04" />,
  <SupplyChainMap key="05" />,
  <WhoIsBuying key="06" />,
  <SemiMarketSize key="07" />,
  <MemoryDeepDive key="08" />,
  <AILabs key="09" />,
  <AgenticAI key="10" />,
  <HardwareVsSoftware key="11" />,
  <BubbleDebunk key="13" />,
  <SupplyChainRisk key="14" />,
  <PowerSupply key="15" />,
  <DemandWall key="16" />,
  <PoliticalChallenges key="17" />,
  <OrbitalCompute key="18" />,
  <KeyTakeaways key="19" />,
];

// Section color per slide
const sectionColors = [
  "#3b82f6", // 1  Title            - THE LANDSCAPE
  "#3b82f6", // 2  Why AI Matters   - THE LANDSCAPE
  "#3b82f6", // 3  What Is AI?      - THE LANDSCAPE
  "#3b82f6", // 4  AI Stack         - THE LANDSCAPE
  "#3b82f6", // 5  Supply Chain     - THE LANDSCAPE
  "#f59e0b", // 6  Who Is Buying    - THE MARKET
  "#f59e0b", // 7  Semi Market      - THE MARKET
  "#f59e0b", // 8  Memory Deep Dive - THE MARKET
  "#f59e0b", // 9  AI Labs          - THE MARKET
  "#10b981", // 10 Agentic AI       - THE SHIFTS
  "#10b981", // 11 HW vs SW         - THE SHIFTS
  "#ef4444", // 13 Bubble Debunk    - THE RISKS
  "#ef4444", // 14 Supply Chain Risk- THE RISKS
  "#ef4444", // 15 Power Supply     - THE RISKS
  "#ef4444", // 16 Demand Wall      - THE RISKS
  "#ef4444", // 17 Political        - THE RISKS
  "#8b5cf6", // 18 Orbital Compute  - THE FRONTIER
  "#f59e0b", // 19 Key Takeaways
];

// Section labels shown as corner badges
const sectionLabels = [
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE MARKET",
  "THE MARKET",
  "THE MARKET",
  "THE MARKET",
  "THE SHIFTS",
  "THE SHIFTS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE FRONTIER",
  "", // Key Takeaways — no section label
];

export default function Home() {
  return (
    <SlideController
      slides={slides}
      sectionColors={sectionColors}
      sectionLabels={sectionLabels}
    />
  );
}

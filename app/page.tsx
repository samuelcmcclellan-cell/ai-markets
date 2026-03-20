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
import AgenticAI from "@/components/slides/10_AgenticAI";
import SoftwareUnderPressure from "@/components/slides/11_SoftwareUnderPressure";
import HardwareVsSoftware from "@/components/slides/12_HardwareVsSoftware";
import SupplyChainRisk from "@/components/slides/13_SupplyChainRisk";
import PowerSupply from "@/components/slides/14_PowerSupply";
import PowerResponse from "@/components/slides/14B_PowerResponse";
import PoliticalChallenges from "@/components/slides/15_PoliticalChallenges";
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
  <AgenticAI key="09" />,
  <SoftwareUnderPressure key="10" />,
  <HardwareVsSoftware key="11" />,
  <BubbleDebunk key="12" />,
  <SupplyChainRisk key="13" />,
  <PowerSupply key="14" />,
  <PowerResponse key="15" />,
  <PoliticalChallenges key="16" />,
  <KeyTakeaways key="17" />,
];

// Section color per slide
const sectionColors = [
  "#3b82f6", // 1  Title            - THE LANDSCAPE
  "#3b82f6", // 2  Why AI Matters   - THE LANDSCAPE
  "#3b82f6", // 3  What Is AI?      - THE LANDSCAPE
  "#3b82f6", // 4  AI Stack         - THE LANDSCAPE
  "#3b82f6", // 5  Supply Chain     - THE LANDSCAPE
  "#f59e0b", // 6  Who Is Buying    - THE MONEY
  "#f59e0b", // 7  Semi Market      - THE MONEY
  "#f59e0b", // 8  Memory Deep Dive - THE MONEY
  "#10b981", // 9  Agentic AI       - THE SHIFTS
  "#10b981", // 10 Software         - THE SHIFTS
  "#10b981", // 11 HW vs SW         - THE SHIFTS
  "#ef4444", // 12 Bubble Debunk    - THE RISKS
  "#ef4444", // 13 Supply Chain Risk- THE RISKS
  "#ef4444", // 14 Power Supply     - THE RISKS
  "#ef4444", // 15 Power Response   - THE RISKS
  "#ef4444", // 16 Political        - THE RISKS
  "#f59e0b", // 17 Key Takeaways
];

// Section labels shown as corner badges
const sectionLabels = [
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE MONEY",
  "THE MONEY",
  "THE MONEY",
  "THE SHIFTS",
  "THE SHIFTS",
  "THE SHIFTS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
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

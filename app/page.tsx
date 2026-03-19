"use client";

import SlideController from "@/components/SlideController";
import Title from "@/components/slides/01_Title";
import WhyAIMatters from "@/components/slides/02_WhyAIMatters";
import WhatIsASemiconductor from "@/components/slides/03_WhatIsASemiconductor";
import HowChipsGetMade from "@/components/slides/04_HowChipsGetMade";
import TheAIStack from "@/components/slides/05_TheAIStack";
import SupplyChainMap from "@/components/slides/06_SupplyChainMap";
import ActIIMoney from "@/components/slides/07_ActII_Money";
import WhoIsBuying from "@/components/slides/08_WhoIsBuying";
import HyperscalerCapex from "@/components/slides/09_HyperscalerCapex";
import SemiMarketSize from "@/components/slides/10_SemiMarketSize";
import MemoryExplained from "@/components/slides/11_MemoryExplained";
import MemorySupercycle from "@/components/slides/12_MemorySupercycle";
import MemoryEquities from "@/components/slides/13_MemoryEquities";
import ActIIIShifts from "@/components/slides/14_ActIII_Shifts";
import WhatIsAgenticAI from "@/components/slides/15_WhatIsAgenticAI";
import SoftwareUnderPressure from "@/components/slides/16_SoftwareUnderPressure";
import HardwareVsSoftware from "@/components/slides/17_HardwareVsSoftware";
import ActIVRisks from "@/components/slides/18_ActIV_Risks";
import GeopoliticalRisks from "@/components/slides/19_IranHormuz";
import CrossCurrents from "@/components/slides/21_CrossCurrents";
import KeyTakeaways from "@/components/slides/22_KeyTakeaways";

const slides = [
  <Title key="01" />,
  <WhyAIMatters key="02" />,
  <WhatIsASemiconductor key="03" />,
  <HowChipsGetMade key="04" />,
  <TheAIStack key="05" />,
  <SupplyChainMap key="06" />,
  <ActIIMoney key="07" />,
  <WhoIsBuying key="08" />,
  <HyperscalerCapex key="09" />,
  <SemiMarketSize key="10" />,
  <MemoryExplained key="11" />,
  <MemorySupercycle key="12" />,
  <MemoryEquities key="13" />,
  <ActIIIShifts key="14" />,
  <WhatIsAgenticAI key="15" />,
  <SoftwareUnderPressure key="16" />,
  <HardwareVsSoftware key="17" />,
  <ActIVRisks key="18" />,
  <GeopoliticalRisks key="19" />,
  <CrossCurrents key="20" />,
  <KeyTakeaways key="21" />,
];

// Section color per slide: blue (Act I), amber (Act II), green (Act III), red (Act IV)
const sectionColors = [
  "#3b82f6", // 1  Title
  "#3b82f6", // 2  Why AI Matters
  "#3b82f6", // 3  Semiconductor
  "#3b82f6", // 4  How Chips Get Made
  "#3b82f6", // 5  AI Stack
  "#3b82f6", // 6  Supply Chain
  "#f59e0b", // 7  Act II divider
  "#f59e0b", // 8  Who Is Buying
  "#f59e0b", // 9  Hyperscaler Capex
  "#f59e0b", // 10 Semi Market Size
  "#f59e0b", // 11 Memory Explained
  "#f59e0b", // 12 Memory Supercycle
  "#f59e0b", // 13 Memory Equities
  "#10b981", // 14 Act III divider
  "#10b981", // 15 Agentic AI
  "#10b981", // 16 Software Under Pressure
  "#10b981", // 17 Hardware vs Software
  "#ef4444", // 18 Act IV divider
  "#ef4444", // 19 Geopolitical Risks
  "#ef4444", // 20 Cross-Currents
  "#f59e0b", // 21 Key Takeaways
];

export default function Home() {
  return <SlideController slides={slides} sectionColors={sectionColors} />;
}

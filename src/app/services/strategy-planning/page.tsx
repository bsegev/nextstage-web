import { Metadata } from 'next';
import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  MarketIntelligenceHero, 
  MarketIntelligenceValueProp,
  MarketIntelligenceServices,
  MarketIntelligenceDeliverablesShowcase,
  MarketIntelligenceMetrics,
  MarketIntelligenceCTA,
} from "@/components/market-intelligence";

export default function StrategyConsultingPage() {
  return (
    <>
      <NextStageNavbar />
      <MarketIntelligenceHero />
      <MarketIntelligenceServices />
      <MarketIntelligenceMetrics />
      <MarketIntelligenceDeliverablesShowcase />
      <MarketIntelligenceValueProp />
      <MarketIntelligenceCTA />
      <Footer />
    </>
  );
} 
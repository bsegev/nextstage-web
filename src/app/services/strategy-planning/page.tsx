import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  MarketIntelligenceHero, 
  MarketIntelligenceValueProp,
  MarketIntelligenceServices,
  MarketIntelligenceDeliverablesShowcase,
  MarketIntelligenceMetrics,
  MarketIntelligenceCTA
} from '@/components/market-intelligence';

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
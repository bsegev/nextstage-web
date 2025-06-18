import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Market Intelligence & Planning | NextStage',
  description: 'Transform uncertainty into strategic advantage with deep market insights, competitive analysis, and data-driven business planning.',
  openGraph: {
    title: 'Market Intelligence & Planning | NextStage',
    description: 'Transform uncertainty into strategic advantage with deep market insights, competitive analysis, and data-driven business planning.',
    type: 'website',
  },
};

export default function MarketIntelligencePage() {
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
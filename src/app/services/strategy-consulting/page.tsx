import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  StrategyConsultingHero, 
  StrategyConsultingValueProp,
  StrategyConsultingServices,
  StrategyDeliverablesShowcase,
  StrategyMetrics,
  StrategyCTA
} from '@/components/strategy-consulting';

export default function StrategyConsultingPage() {
  return (
    <>
      <NextStageNavbar />
      <StrategyConsultingHero />
      <StrategyConsultingServices />
      <StrategyMetrics />
      <StrategyDeliverablesShowcase />
      <StrategyConsultingValueProp />
      <StrategyCTA />
      <Footer />
    </>
  );
} 
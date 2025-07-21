import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  EnablementTrainingHero, 
  EnablementTrainingValueProp,
  EnablementTrainingServices,
  EnablementTrainingDeliverablesShowcase,
  EnablementTrainingMetrics,
  EnablementTrainingCTA
} from '@/components/enablement-training';

export default function EnablementTrainingPage() {
  return (
    <>
      <NextStageNavbar />
      <EnablementTrainingHero />
      <EnablementTrainingServices />
      <EnablementTrainingMetrics />
      <EnablementTrainingDeliverablesShowcase />
      <EnablementTrainingValueProp />
      <EnablementTrainingCTA />
      <Footer />
    </>
  );
} 
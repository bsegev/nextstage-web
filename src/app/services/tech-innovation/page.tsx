import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  TechInnovationConsultingHero, 
  TechInnovationConsultingValueProp,
  TechInnovationConsultingServices,
  TechInnovationDeliverablesShowcase,
  TechInnovationMetrics,
  TechInnovationCTA
} from '@/components/tech-innovation';

export default function TechInnovationPage() {
  return (
    <>
      <NextStageNavbar />
      <TechInnovationConsultingHero />
      <TechInnovationConsultingServices />
      <TechInnovationMetrics />
      <TechInnovationDeliverablesShowcase />
      <TechInnovationConsultingValueProp />
      <TechInnovationCTA />
      <Footer />
    </>
  );
} 
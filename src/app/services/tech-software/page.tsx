import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  PlatformDevelopmentHero, 
  PlatformDevelopmentValueProp,
  PlatformDevelopmentServices,
  PlatformDevelopmentDeliverablesShowcase,
  PlatformDevelopmentMetrics,
  PlatformDevelopmentCTA
} from '@/components/platform-development';

export default function TechInnovationPage() {
  return (
    <>
      <NextStageNavbar />
      <PlatformDevelopmentHero />
      <PlatformDevelopmentServices />
      <PlatformDevelopmentMetrics />
      <PlatformDevelopmentDeliverablesShowcase />
      <PlatformDevelopmentValueProp />
      <PlatformDevelopmentCTA />
      <Footer />
    </>
  );
} 
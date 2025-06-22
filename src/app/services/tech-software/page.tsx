import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
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
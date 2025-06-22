import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  BrandExperienceHero, 
  BrandExperienceValueProp,
  BrandExperienceServices,
  BrandExperienceDeliverablesShowcase,
  BrandExperienceMetrics,
  BrandExperienceCTA
} from '@/components/brand-experience';

export default function BrandDesignPage() {
  return (
    <>
      <NextStageNavbar />
      <BrandExperienceHero />
      <BrandExperienceServices />
      <BrandExperienceMetrics />
      <BrandExperienceDeliverablesShowcase />
      <BrandExperienceValueProp />
      <BrandExperienceCTA />
      <Footer />
    </>
  );
} 
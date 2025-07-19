import { NextStageNavbar, Footer } from '@/components/layout';
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
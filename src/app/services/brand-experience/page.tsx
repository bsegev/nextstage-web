import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Brand Experience & Systems | NextStage',
  description: 'Create cohesive brand experiences that drive recognition and conversion through strategic design, messaging, and system architecture.',
  openGraph: {
    title: 'Brand Experience & Systems | NextStage',
    description: 'Create cohesive brand experiences that drive recognition and conversion through strategic design, messaging, and system architecture.',
    type: 'website',
  },
};

export default function BrandExperiencePage() {
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
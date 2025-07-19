import { Metadata } from 'next';
import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  GrowthSystemsHero, 
  GrowthSystemsValueProp,
  GrowthSystemsServices,
  GrowthSystemsDeliverablesShowcase,
  GrowthSystemsMetrics,
  GrowthSystemsCTA
} from '@/components/growth-systems';

export const metadata: Metadata = {
  title: 'Growth Systems | NextStage',
  description: 'Scale efficiently with integrated marketing automation, CRM optimization, and conversion systems that drive sustainable growth.',
  openGraph: {
    title: 'Growth Systems | NextStage',
    description: 'Scale efficiently with integrated marketing automation, CRM optimization, and conversion systems that drive sustainable growth.',
    type: 'website',
  },
};

export default function GrowthSystemsPage() {
  return (
    <>
      <NextStageNavbar />
      <GrowthSystemsHero />
      <GrowthSystemsServices />
      <GrowthSystemsMetrics />
      <GrowthSystemsDeliverablesShowcase />
      <GrowthSystemsValueProp />
      <GrowthSystemsCTA />
      <Footer />
    </>
  );
} 
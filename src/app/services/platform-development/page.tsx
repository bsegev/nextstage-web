import { Metadata } from 'next';
import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  PlatformDevelopmentHero, 
  PlatformDevelopmentValueProp,
  PlatformDevelopmentServices,
  PlatformDevelopmentDeliverablesShowcase,
  PlatformDevelopmentMetrics,
  PlatformDevelopmentCTA,
} from "@/components/platform-development";

export const metadata: Metadata = {
  title: 'Platform Development | NextStage',
  description: 'Build scalable digital platforms that grow with your business through custom development, system integration, and platform architecture.',
  openGraph: {
    title: 'Platform Development | NextStage',
    description: 'Build scalable digital platforms that grow with your business through custom development, system integration, and platform architecture.',
    type: 'website',
  },
};

export default function PlatformDevelopmentPage() {
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
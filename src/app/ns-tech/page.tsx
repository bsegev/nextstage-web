import { Metadata } from 'next';
import { NextStageNavbar, Footer } from '@/components/layout';
import NSTechHero from '@/components/ns-tech/NSTechHero';
import TechShowcase from '@/components/ns-tech/TechShowcase';
import TechCTA from '@/components/ns-tech/TechCTA';

export const metadata: Metadata = {
  title: 'NS Tech - AI-Powered Apps & Tools | NextStage',
  description: 'Explore our suite of AI-powered applications and tools designed to accelerate your business growth and strategic planning.',
  keywords: ['AI tools', 'business apps', 'strategy apps', 'NextStage tech', 'AI applications'],
  openGraph: {
    title: 'NS Tech - AI-Powered Apps & Tools | NextStage',
    description: 'Explore our suite of AI-powered applications and tools designed to accelerate your business growth and strategic planning.',
    type: 'website',
  },
};

export default function NSTechPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen">
        <NSTechHero />
        <TechShowcase />
        <TechCTA />
      </main>
      <Footer />
    </>
  );
} 
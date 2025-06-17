import { Metadata } from 'next';
import NextStageNavbar from '@/components/NextStageNavbar';
import ApproachHero from '@/components/approach/ApproachHero';
import CoreNarrative from '@/components/approach/CoreNarrative';
import { Process } from '@/components/approach/Process';
import ApproachInAction from '@/components/approach/ApproachInAction';
import ApproachCTA from '@/components/approach/ApproachCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Approach | NextStage',
  description: 'Discover how NextStage transforms vision into impact through strategic thinking, lean systems, and decisive momentum.',
  openGraph: {
    title: 'Our Approach | NextStage',
    description: 'Discover how NextStage transforms vision into impact through strategic thinking, lean systems, and decisive momentum.',
    type: 'website',
  },
};

export default function ApproachPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen">
        <ApproachHero />
        <CoreNarrative />
        <Process />
        <ApproachInAction />
        <ApproachCTA />
      </main>
      <Footer />
    </>
  );
} 
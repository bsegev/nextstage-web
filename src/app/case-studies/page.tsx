import { Metadata } from 'next';
import { NextStageNavbar, Footer } from '@/components/layout';
import { HeroParallaxDemo } from '@/components/demos';

export const metadata: Metadata = {
  title: 'Case Studies | NextStage - Real Results from Real Projects',
  description: 'See how we transform businesses through strategic design, technology, and growth systems. Explore detailed case studies showcasing measurable results and client success stories.',
  keywords: 'case studies, client results, business transformation, design portfolio, growth results, technology solutions, client success stories',
  openGraph: {
    title: 'Case Studies | NextStage - Real Results from Real Projects',
    description: 'See how we transform businesses through strategic design, technology, and growth systems. Explore detailed case studies showcasing measurable results and client success stories.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen bg-background">
        <HeroParallaxDemo />
      </main>
      <Footer />
    </>
  );
} 
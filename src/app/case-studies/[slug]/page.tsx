import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextStageNavbar, Footer } from '@/components/layout';
import CaseStudyHero from '@/components/case-studies/CaseStudyHero';
import CaseStudyFloatingNav from '@/components/case-studies/CaseStudyFloatingNav';
import CaseStudyMobileNav from '@/components/case-studies/CaseStudyMobileNav';
import CaseStudyChallenge from '@/components/case-studies/CaseStudyOverview'; // Temporarily using Overview as Challenge
import CaseStudyDiscovery from '@/components/case-studies/CaseStudyDiscovery';
import CaseStudyPlanning from '@/components/case-studies/CaseStudyPlanning';
import CaseStudySolution from '@/components/case-studies/CaseStudySolution';
import CaseStudyImplementation from '@/components/case-studies/CaseStudyImplementation';
import CaseStudyResults from '@/components/case-studies/CaseStudyResults';
import CaseStudyNextProject from '@/components/case-studies/CaseStudyNextProject';
import { getCaseStudy, getAllCaseStudySlugs } from '@/lib/case-studies';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | NextStage',
    };
  }

  return {
    title: `${caseStudy.title} | NextStage Case Study`,
    description: caseStudy.description,
    keywords: caseStudy.keywords,
    openGraph: {
      title: `${caseStudy.title} | NextStage Case Study`,
      description: caseStudy.description,
      images: [caseStudy.hero.image],
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen bg-background pt-0 lg:pt-24">
        {/* Desktop Floating Navigation */}
        <CaseStudyFloatingNav />
        
        {/* Mobile Bottom Navigation */}
        <CaseStudyMobileNav />

        {/* Hero Section */}
        <div id="hero">
        <CaseStudyHero data={caseStudy.hero} />
        </div>

        {/* Phase 1: The Challenge */}
        <div id="challenge">
        <CaseStudyChallenge data={caseStudy.challenge} />
        </div>

        {/* Phase 2: Discovery */}
        <div id="discovery">
        <CaseStudyDiscovery data={caseStudy.discovery} />
        </div>

        {/* Phase 3: Planning */}
        <div id="planning">
        <CaseStudyPlanning data={caseStudy.planning} />
        </div>

        {/* Phase 4: Solution */}
        <div id="solution">
        <CaseStudySolution data={caseStudy.solution} />
        </div>

        {/* Implementation */}
        <div id="implementation">
        <CaseStudyImplementation data={caseStudy.implementation} />
        </div>

        {/* Results Section */}
        <div id="results">
        <CaseStudyResults data={caseStudy.results} />
        </div>

        {/* Testimonial Section - shown as part of Results now */}
        {/* Gallery Section - for future implementation */}

        {/* Next Project CTA */}
        <CaseStudyNextProject currentSlug={slug} />
      </main>
      <Footer />
    </>
  );
} 
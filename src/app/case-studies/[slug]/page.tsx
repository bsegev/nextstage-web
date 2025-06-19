import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/case-studies/CaseStudyHero';
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
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <CaseStudyHero data={caseStudy.hero} />

        {/* Phase 1: The Challenge */}
        <CaseStudyChallenge data={caseStudy.challenge} />

        {/* Phase 2: Discovery */}
        <CaseStudyDiscovery data={caseStudy.discovery} />

        {/* Phase 3: Planning */}
        <CaseStudyPlanning data={caseStudy.planning} />

        {/* Phase 4: Solution */}
        <CaseStudySolution data={caseStudy.solution} />

        {/* Implementation */}
        <CaseStudyImplementation data={caseStudy.implementation} />

        {/* Results Section */}
        <CaseStudyResults data={caseStudy.results} />

        {/* Testimonial Section - shown as part of Results now */}
        {/* Gallery Section - for future implementation */}

        {/* Next Project CTA */}
        <CaseStudyNextProject currentSlug={slug} />
      </main>
      <Footer />
    </>
  );
} 
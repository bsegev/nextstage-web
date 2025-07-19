import { NextStageNavbar, Footer } from "@/components/layout";
import { WorkHero, TrustBanner, ShowcaseCarousel, ProcessJourney, WorkCTA } from "@/components/work";

export default function WorkPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen bg-white">
        <WorkHero />
        <TrustBanner />
        <ShowcaseCarousel />
        <ProcessJourney />
        <WorkCTA />
      </main>
      <Footer />
    </>
  );
} 
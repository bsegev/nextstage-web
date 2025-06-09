import NextStageNavbar from "@/components/NextStageNavbar";
import WorkHero from "@/components/WorkHero";
import TrustBanner from "@/components/TrustBanner";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import ProcessJourney from "@/components/ProcessJourney";
import WorkCTA from "@/components/WorkCTA";
import Footer from "@/components/Footer";

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
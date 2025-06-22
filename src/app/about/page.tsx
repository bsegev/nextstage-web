import NextStageNavbar from "@/components/NextStageNavbar";
import WhyNextStage from "@/components/approach/WhyNextStage";
import Footer from "@/components/Footer";
import {
  AboutHero,
  HandoffProblem,
  FounderIntro,
  AboutCTA,
} from "@/components/about-page";

export default function AboutPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen bg-obsidian">
      <AboutHero />
      <HandoffProblem />
      <FounderIntro />
      <WhyNextStage />
      <AboutCTA />
    </main>
      <Footer />
    </>
  );
} 
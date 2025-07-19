import { NextStageNavbar, Footer } from "@/components/layout";
import WhyNextStage from "@/components/approach/WhyNextStage";
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
import NextStageNavbar from "@/components/NextStageNavbar";
import AboutHero from "@/components/AboutHero";
import HandoffProblem from "@/components/HandoffProblem";
import FounderIntro from "@/components/FounderIntro";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen bg-obsidian">
      <AboutHero />
      <HandoffProblem />
      <FounderIntro />
      <AboutCTA />
    </main>
      <Footer />
    </>
  );
} 
import { NextStageNavbar, Footer } from "@/components/layout";
import KeyDeliverablesShowcase from "@/components/ui/features-section-demo-2";
import {
  Hero,
  TransformationTicker,
  PowerInConvergence,
  SpeedProof,
  BusinessValueTabs,
  LogoShowcase,
  CTASection,
} from "@/components/homepage";

export default function Home() {
  return (
    <>
      <NextStageNavbar />
      <main>
        <Hero />
        <TransformationTicker />
        <PowerInConvergence />
        <KeyDeliverablesShowcase />
        <SpeedProof />
        <BusinessValueTabs />
        <LogoShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

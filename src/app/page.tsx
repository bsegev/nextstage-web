import { NextStageNavbar, Footer } from "@/components/layout";
import KeyDeliverablesShowcase from "@/components/ui/features-section-demo-2";
import {
  Hero,
  TransformationTicker,
  PowerInConvergence,
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
        <BusinessValueTabs />
        <LogoShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

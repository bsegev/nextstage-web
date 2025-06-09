import NextStageNavbar from "@/components/NextStageNavbar";
import Hero from "@/components/Hero";
import TransformationTicker from "@/components/TransformationTicker";
import PowerInConvergence from "@/components/PowerInConvergence";
import SpeedProof from "@/components/SpeedProof";
import BusinessValueTabs from "@/components/BusinessValueTabs";
import LogoShowcase from "@/components/LogoShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NextStageNavbar />
      <main>
        <Hero />
        <TransformationTicker />
        <PowerInConvergence />
        <SpeedProof />
        <BusinessValueTabs />
        <LogoShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

import NextStageNavbar from "@/components/NextStageNavbar";
import Hero from "@/components/Hero";
import TransformationTicker from "@/components/TransformationTicker";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load heavy components that are below the fold
const PowerInConvergence = dynamic(() => import("@/components/PowerInConvergence"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div></div>
});

const SpeedProof = dynamic(() => import("@/components/SpeedProof"), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div></div>
});

const BusinessValueTabs = dynamic(() => import("@/components/BusinessValueTabs"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div></div>
});

const LogoShowcase = dynamic(() => import("@/components/LogoShowcase"), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div></div>
});

export default function Home() {
  return (
    <>
      <NextStageNavbar />
      <main>
        <Hero />
        <TransformationTicker />
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div></div>}>
          <PowerInConvergence />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div></div>}>
          <SpeedProof />
        </Suspense>
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div></div>}>
          <BusinessValueTabs />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div></div>}>
          <LogoShowcase />
        </Suspense>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

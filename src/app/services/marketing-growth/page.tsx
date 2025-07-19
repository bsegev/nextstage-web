import { NextStageNavbar, Footer } from '@/components/layout';
import { 
  GrowthSystemsHero,
  GrowthSystemsValueProp,
  GrowthSystemsServices,
  GrowthSystemsDeliverablesShowcase,
  GrowthSystemsMetrics,
  GrowthSystemsCTA,
} from "@/components/growth-systems";

export default function GrowthMarketingPage() {
  return (
    <>
      <NextStageNavbar />
      <div className="min-h-screen bg-bone text-obsidian">
        <GrowthSystemsHero />
        <GrowthSystemsServices />
        <GrowthSystemsMetrics />
        <GrowthSystemsDeliverablesShowcase />
        <GrowthSystemsValueProp />
        <GrowthSystemsCTA />
      </div>
      <Footer />
    </>
  );
} 
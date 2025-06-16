import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  GrowthMarketingConsultingHero,
  GrowthMarketingConsultingValueProp,
  GrowthMarketingConsultingServices,
  GrowthMarketingDeliverablesShowcase,
  GrowthMarketingMetrics,
  GrowthMarketingCTA,
} from "@/components/growth-marketing";

export default function GrowthMarketingPage() {
  return (
    <>
      <NextStageNavbar />
      <div className="min-h-screen bg-bone text-obsidian">
        <GrowthMarketingConsultingHero />
        <GrowthMarketingConsultingServices />
        <GrowthMarketingMetrics />
        <GrowthMarketingDeliverablesShowcase />
        <GrowthMarketingConsultingValueProp />
        <GrowthMarketingCTA />
      </div>
      <Footer />
    </>
  );
} 
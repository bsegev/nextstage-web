import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  StrategyConsultingHero, 
  StrategyConsultingValueProp,
  StrategyConsultingServices
} from '@/components/strategy-consulting';

export default function StrategyConsultingPage() {
  return (
    <>
      <NextStageNavbar />
      <StrategyConsultingHero />
      <StrategyConsultingServices />
      <StrategyConsultingValueProp />

      {/* Placeholder for additional sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-display text-obsidian mb-8">
              More sections coming next...
            </h2>
            <p className="text-obsidian/60">
              We&apos;ll continue building out the approach, case studies, and additional sections.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 
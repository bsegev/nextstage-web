import NextStageNavbar from '@/components/NextStageNavbar';
import Footer from '@/components/Footer';
import { 
  BrandDesignConsultingHero, 
  BrandDesignConsultingValueProp,
  BrandDesignConsultingServices,
  BrandDesignDeliverablesShowcase,
  BrandDesignMetrics,
  BrandDesignCTA
} from '@/components/brand-design';

export default function BrandDesignPage() {
  return (
    <>
      <NextStageNavbar />
      <BrandDesignConsultingHero />
      <BrandDesignConsultingServices />
      <BrandDesignMetrics />
      <BrandDesignDeliverablesShowcase />
      <BrandDesignConsultingValueProp />
      <BrandDesignCTA />
      <Footer />
    </>
  );
} 
import { Metadata } from 'next';
import NextStageNavbar from '@/components/NextStageNavbar';
import ServicesHero from '@/components/services/ServicesHero';

import ServicesFeatures from '@/components/services/ServicesFeatures';
import ServicesShowcase from '@/components/ServicesShowcase';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services | NextStage',
  description: 'Integrated strategy, design, and technology services that work as one unified system to transform your business.',
  openGraph: {
    title: 'Services | NextStage',
    description: 'Integrated strategy, design, and technology services that work as one unified system to transform your business.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen">
        <ServicesHero />
        <ServicesShowcase />
        <ServicesFeatures />
        <ServicesCTA />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </>
  );
} 
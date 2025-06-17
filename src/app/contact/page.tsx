import type { Metadata } from 'next';
import NextStageNavbar from '@/components/NextStageNavbar';
import ContactHero from '@/components/contact/ContactHero';
import ContactMethods from '@/components/contact/ContactMethods';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact | NextStage',
  description: 'Ready to transform your vision into reality? Let\'s start the conversation about your next breakthrough.',
  openGraph: {
    title: 'Contact | NextStage',
    description: 'Ready to transform your vision into reality? Let\'s start the conversation about your next breakthrough.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen">
        <ContactHero />
        <ContactMethods />
      </main>
      <Footer />
    </>
  );
} 
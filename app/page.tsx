import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FAQSection } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
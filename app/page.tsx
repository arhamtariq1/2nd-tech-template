'use client';

import { GlowyWavesBackground } from '@/components/ui/glowy-waves-hero-shadcnui';
import { ModernNavbar } from '@/components/landing/modern-navbar';
import { HeroStructured } from '@/components/landing/hero-structured';
import { ModernSections } from '@/components/landing/modern-sections';
import { Footer } from '@/components/ui/footer-section';

export default function Home() {
  return (
    <GlowyWavesBackground>
      <div id="top" />
      <ModernNavbar />
      <HeroStructured />
      <ModernSections />
      <div className="px-6 pb-8 md:px-10">
        <Footer />
      </div>
    </GlowyWavesBackground>
  );
}

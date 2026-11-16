import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('search-section');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-brand-black">
      {/* Full-bleed Cinematic Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&auto=format&fit=crop&q=88"
          alt="Urban Estates Masterpiece Residence"
          className="w-full h-full object-cover object-center filter brightness-[0.75] scale-100 transition-transform duration-1000"
        />
        {/* Cinematic Multi-stop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/85 pointer-events-none" />
      </div>

      {/* Top Spacer for Fixed Navbar */}
      <div className="pt-32 sm:pt-36 relative z-10" />

      {/* Center Cinematic Editorial Headline */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center my-auto py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span>Private Architectural Portfolio</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] mb-8">
          Where Architecture <br />
          <span className="font-normal italic text-brand-accent">Meets Distinction.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
          A meticulously curated portfolio of prime residences, sky penthouses, and landmark commercial
          addresses designed for collectors of uncompromising living.
        </p>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div className="relative z-10 max-w-5xl mx-auto pb-8 sm:pb-12 text-center">
        <button
          type="button"
          onClick={scrollToExplore}
          className="inline-flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group focus:outline-none"
          aria-label="Scroll down to search portfolio"
        >
          <span className="text-[10px] uppercase tracking-ultra font-light text-neutral-300 group-hover:text-brand-accent transition-colors">
            Explore Portfolio
          </span>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-accent transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-brand-accent animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}

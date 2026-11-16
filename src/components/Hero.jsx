import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-brand-black px-6 sm:px-8">
      {/* Full-bleed Cinematic Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&auto=format&fit=crop&q=88"
          alt="Urban Estates Masterpiece Residence"
          className="w-full h-full object-cover object-center filter brightness-[0.72] scale-100 transition-transform duration-1000"
        />
        {/* Cinematic Multi-stop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/85 pointer-events-none" />
      </div>

      {/* Main Hero Content — Pure, Minimal, Completely Clean */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-24 pb-12 sm:pt-28 sm:pb-16 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] tracking-widest uppercase mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span>Private Architectural Portfolio</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] mb-6 sm:mb-8">
          Where Architecture <br />
          <span className="font-normal italic text-brand-accent">Meets Distinction.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          A meticulously curated portfolio of prime residences, sky penthouses, and landmark commercial
          addresses designed for collectors of uncompromising living.
        </p>
      </div>
    </section>
  );
}

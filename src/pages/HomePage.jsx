import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { getFeaturedProperties } from '../data/properties';
import { ArrowUpRight, ChevronRight, Check } from 'lucide-react';

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProperties =
    activeCategory === 'all'
      ? featuredProperties
      : featuredProperties.filter((p) =>
          activeCategory === 'commercial'
            ? p.purpose === 'commercial'
            : p.type.toLowerCase().includes(activeCategory)
        );

  const collections = [
    {
      title: 'Sky Penthouses',
      count: '4 Trophy Residences',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
      link: '/listings?type=Penthouse',
      description: 'Crowning the skyline of Manhattan, London, and Miami with 360-degree panoramas.',
    },
    {
      title: 'Architectural Villas',
      count: '6 Private Compounds',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
      link: '/listings?type=Villa',
      description: 'Monolithic concrete, cantilevers, and seamless indoor-outdoor California living.',
    },
    {
      title: 'Prime Commercial',
      count: '3 Flagship Assets',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      link: '/listings?purpose=commercial',
      description: 'Institutional-grade headquarters, retail flagships, and executive suites.',
    },
    {
      title: 'Waterfront Estates',
      count: '3 Deep-Water Frontages',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80',
      link: '/listings?type=Waterfront',
      description: 'Direct ocean and bay access with superyacht docks and private sandy frontages.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties Showcase */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-border">
          <div>
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              Curated Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight">
              Featured Prime Mandates
            </h2>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            {[
              { id: 'all', label: 'All Prime' },
              { id: 'villa', label: 'Villas' },
              { id: 'penthouse', label: 'Penthouses' },
              { id: 'commercial', label: 'Commercial' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs uppercase tracking-wider px-3.5 py-1.5 transition-all ${
                  activeCategory === tab.id
                    ? 'bg-brand-dark text-white font-medium'
                    : 'text-brand-muted hover:text-brand-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/listings"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest hover:bg-brand-charcoal transition-all group"
          >
            <span>Explore Complete Portfolio (12 Properties)</span>
            <ArrowUpRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* Curated Architectural Collections */}
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              Architectural Typologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-3">
              Curated Collections
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              Explore residences categorized by architectural discipline, setting, and private scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col, idx) => (
              <Link
                key={idx}
                to={col.link}
                className="group relative h-96 overflow-hidden bg-brand-charcoal flex flex-col justify-end p-6 border border-brand-border/60 hover:border-brand-dark transition-all duration-300"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-brand-accent font-medium block mb-1">
                    {col.count}
                  </span>
                  <h3 className="text-xl font-light text-white mb-2 flex items-center justify-between">
                    <span>{col.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Pillars / Why Urban Estates */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              The Urban Estates Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-6">
              Bespoke Representation for the World's Discerning Few
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6">
              Urban Estates operates outside the conventions of traditional real estate. We function as
              private architectural curators and confidential advisors to principals, family offices, and
              sovereign collectors.
            </p>

            <div className="space-y-4 pt-4 border-t border-brand-border">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-surface border border-brand-accent text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-brand-dark">
                    Discreet Off-Market Confidentiality
                  </h4>
                  <p className="text-xs text-brand-muted font-light">
                    Over 40% of our transactions conclude without public syndication under strict non-disclosure agreements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-surface border border-brand-accent text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-brand-dark">
                    Architectural Integrity Vetting
                  </h4>
                  <p className="text-xs text-brand-muted font-light">
                    Every residence is inspected for architectural pedigree, structural authenticity, and craftsmanship materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-surface border border-brand-accent text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-brand-dark">
                    Cross-Border Metropolitan Reach
                  </h4>
                  <p className="text-xs text-brand-muted font-light">
                    Unified advisory desks across New York, Los Angeles, London, and Dubai coordinate multi-jurisdictional acquisitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-medium text-brand-dark uppercase tracking-widest hover:text-brand-accent transition-colors"
              >
                <span>Read Our Architectural Ethos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-brand-charcoal overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80"
                  alt="Architectural Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white border border-brand-border">
                <span className="text-3xl font-light text-brand-dark block mb-1">15+</span>
                <span className="text-xs text-brand-muted uppercase tracking-wider font-light">
                  Years of Private Practice
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 bg-brand-dark text-white">
                <span className="text-3xl font-light text-brand-accent block mb-1">99.4%</span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-light">
                  Client Mandate Retention
                </span>
              </div>
              <div className="aspect-[4/5] bg-brand-charcoal overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&auto=format&fit=crop&q=80"
                  alt="Curated Detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Endorsements / Testimonials */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Discretionary Endorsements
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-brand-dark tracking-tight mb-12">
            Voices of Our Private Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 sm:p-8 border border-brand-border flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6 italic">
                "Urban Estates managed our Beverly Hills acquisition with military discretion. Not a single rumor breached the press before our keys were handed over."
              </p>
              <div>
                <strong className="block text-xs uppercase tracking-wider text-brand-dark font-medium">
                  Family Office Principal
                </strong>
                <span className="text-[11px] text-brand-muted font-light">
                  Geneva & Los Angeles
                </span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-brand-border flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6 italic">
                "Their curation standards are unlike any brokerage. They only presented residences with true architectural merit and irreplaceable provenance."
              </p>
              <div>
                <strong className="block text-xs uppercase tracking-wider text-brand-dark font-medium">
                  Tech Founder & Collector
                </strong>
                <span className="text-[11px] text-brand-muted font-light">
                  Tribeca, New York
                </span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-brand-border flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6 italic">
                "From London Mayfair to our Palm Jumeirah waterfront estate, Urban Estates provided seamless cross-continental intelligence and flawless execution."
              </p>
              <div>
                <strong className="block text-xs uppercase tracking-wider text-brand-dark font-medium">
                  International Investor
                </strong>
                <span className="text-[11px] text-brand-muted font-light">
                  London & Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Inquiry CTA Banner */}
      <section className="py-20 lg:py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Initiate Conversation
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
            Seeking an Exceptional Mandate?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed mb-8">
            Connect directly with our Senior Advisory Desk for private consultations, property valuations,
            or to arrange confidential access to off-market estates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-brand-dark text-xs font-medium uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-colors"
            >
              Contact Senior Partner
            </Link>
            <Link
              to="/sell"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white text-xs font-medium uppercase tracking-widest hover:border-white transition-colors"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign, Bed, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState('buy');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (purpose) params.set('purpose', purpose);
    if (location) params.set('location', location);
    if (type) params.set('type', type);
    if (priceRange) params.set('price', priceRange);
    if (bedrooms) params.set('bedrooms', bedrooms);

    navigate(`/listings?${params.toString()}`);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-brand-cream overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 border-x border-brand-border/60 flex justify-between">
          <div className="w-px h-full border-r border-brand-border/40 hidden md:block"></div>
          <div className="w-px h-full border-r border-brand-border/40 hidden lg:block"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Eyebrow & Headline */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-border text-brand-dark text-xs tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
            <span>Private Architectural Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-brand-black leading-[1.1] mb-6">
            Where Architecture <br className="hidden sm:inline" />
            <span className="font-normal italic text-brand-dark">Meets Distinction.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light max-w-2xl mx-auto leading-relaxed">
            A meticulously curated portfolio of prime residences, penthouses, and landmark commercial
            addresses designed for collectors of uncompromising living.
          </p>
        </div>

        {/* Minimal High-Impact Search Panel */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white border border-brand-border shadow-sm p-4 sm:p-6 lg:p-7">
            {/* Purpose Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-brand-border pb-4">
              {[
                { id: 'buy', label: 'Buy Residence' },
                { id: 'rent', label: 'Lease & Rent' },
                { id: 'commercial', label: 'Prime Commercial' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPurpose(tab.id)}
                  className={`text-xs sm:text-sm tracking-wider uppercase px-4 py-2 transition-all duration-200 ${
                    purpose === tab.id
                      ? 'bg-brand-dark text-white font-medium shadow-sm'
                      : 'text-brand-muted hover:text-brand-dark bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Filter Fields Form */}
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              {/* Location Select */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">All Prime Locations</option>
                    <option value="Beverly Hills">Beverly Hills, CA</option>
                    <option value="New York">New York, NY</option>
                    <option value="Miami Beach">Miami Beach, FL</option>
                    <option value="London">London, UK</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Aspen">Aspen, CO</option>
                  </select>
                  <MapPin className="w-4 h-4 text-brand-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
                </div>
              </div>

              {/* Property Type Select */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                  Architecture
                </label>
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">All Types</option>
                    <option value="Villa">Architectural Villa</option>
                    <option value="Penthouse">Sky Penthouse</option>
                    <option value="Waterfront">Waterfront Estate</option>
                    <option value="Modern Apartment">Modern Apartment</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Commercial Retail">Commercial Retail</option>
                  </select>
                  <Home className="w-4 h-4 text-brand-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
                </div>
              </div>

              {/* Bedrooms Select */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                  Bedrooms
                </label>
                <div className="relative">
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Any Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                    <option value="6">6+ Bedrooms</option>
                  </select>
                  <Bed className="w-4 h-4 text-brand-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
                </div>
              </div>

              {/* Price Range Select */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Any Valuation</option>
                    {purpose === 'rent' ? (
                      <>
                        <option value="under-25k">Under $25,000 / mo</option>
                        <option value="25k-50k">$25,000 - $50,000 / mo</option>
                        <option value="above-50k">$50,000+ / mo</option>
                      </>
                    ) : (
                      <>
                        <option value="under-20m">Under $20,000,000</option>
                        <option value="20m-30m">$20,000,000 - $30,000,000</option>
                        <option value="above-30m">$30,000,000+</option>
                      </>
                    )}
                  </select>
                  <DollarSign className="w-4 h-4 text-brand-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
                </div>
              </div>

              {/* Search Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-brand-dark text-white text-xs font-medium tracking-widest uppercase hover:bg-brand-charcoal transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm"
                >
                  <Search className="w-4 h-4 text-brand-accent" />
                  <span>Search Properties</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Hero Architectural Feature Visual */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden bg-brand-charcoal group">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&auto=format&fit=crop&q=85"
              alt="The Glass Pavilion — Beverly Hills"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Editorial Floating Tag */}
            <div className="absolute top-6 left-6 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span>Current Featured Mandate</span>
            </div>

            {/* Floating Property Metadata Banner */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="text-white max-w-xl">
                <span className="text-xs uppercase tracking-widest text-brand-accent font-light block mb-1">
                  Beverly Hills Flats, California
                </span>
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-2">
                  The Glass Pavilion
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-1">
                  Cantilevered concrete, 12,400 sq ft, 75ft basalt infinity pool, and 360-degree canyon views.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-light">
                    Offered At
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    $28,500,000
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/property/the-glass-pavilion')}
                  className="px-5 py-3 bg-white text-brand-dark text-xs font-medium uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span>View Estate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Milestone Stats Bar */}
        <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-brand-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-1">
                $4.8B<span className="text-brand-accent font-normal">+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted">
                Transacted Volume
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-1">
                98<span className="text-brand-accent font-normal">%</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted">
                Exclusive Mandates
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-1">
                14
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted">
                Global Metropolises
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-1">
                100<span className="text-brand-accent font-normal">%</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted">
                Architectural Vetting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

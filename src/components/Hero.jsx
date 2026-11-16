import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';

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
    <section className="relative min-h-[88vh] sm:min-h-[94vh] flex flex-col justify-between overflow-hidden bg-brand-black">
      {/* Full-bleed Cinematic Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&auto=format&fit=crop&q=88"
          alt="Urban Estates Masterpiece Residence"
          className="w-full h-full object-cover object-center filter brightness-[0.70] scale-100 transition-transform duration-1000"
        />
        {/* Cinematic Multi-stop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/95 pointer-events-none" />
      </div>

      {/* Top Spacer for Fixed Navbar */}
      <div className="pt-28 sm:pt-36 relative z-10" />

      {/* Center Cinematic Editorial Headline */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center my-auto py-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] tracking-widest uppercase mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span>Private Architectural Portfolio</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] mb-6 sm:mb-8">
          Where Architecture <br />
          <span className="font-normal italic text-brand-accent">Meets Distinction.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          A meticulously curated portfolio of prime residences, sky penthouses, and landmark commercial
          addresses designed for collectors of uncompromising living.
        </p>
      </div>

      {/* Sleek Search Console Docked at the Bottom */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 pb-8 sm:pb-12 w-full">
        <div className="bg-white/95 backdrop-blur-md border border-white/30 shadow-2xl p-4 sm:p-6">
          {/* Purpose Tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-brand-border/80 pb-3">
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

          {/* Search Inputs Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            {/* Location */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                Location
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer appearance-none"
                >
                  <option value="">All Prime Locations</option>
                  <option value="Beverly Hills">Beverly Hills, CA</option>
                  <option value="New York">New York, NY</option>
                  <option value="Miami Beach">Miami Beach, FL</option>
                  <option value="London">London, UK</option>
                  <option value="Dubai">Dubai, UAE</option>
                  <option value="Aspen">Aspen, CO</option>
                </select>
                <MapPin className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Architecture Type */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                Architecture
              </label>
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer appearance-none"
                >
                  <option value="">All Types</option>
                  <option value="Villa">Architectural Villa</option>
                  <option value="Penthouse">Sky Penthouse</option>
                  <option value="Waterfront">Waterfront Estate</option>
                  <option value="Modern Apartment">Modern Apartment</option>
                  <option value="Commercial Office">Commercial Office</option>
                  <option value="Commercial Retail">Commercial Retail</option>
                </select>
                <Home className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Bedrooms */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                Bedrooms
              </label>
              <div className="relative">
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer appearance-none"
                >
                  <option value="">Any Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                  <option value="6">6+ Bedrooms</option>
                </select>
                <Bed className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-1">
              <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                Price Range
              </label>
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer appearance-none"
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
                <DollarSign className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-brand-dark text-white text-xs font-medium tracking-widest uppercase hover:bg-brand-charcoal transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <Search className="w-3.5 h-3.5 text-brand-accent" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

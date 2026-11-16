import React from 'react';
import { Search, MapPin, Home, DollarSign, Bed, RotateCcw, LayoutGrid, List } from 'lucide-react';

export default function SearchFilter({
  filters,
  setFilters,
  resetFilters,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  totalResults,
}) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white border border-brand-border p-6 mb-10 shadow-sm">
      {/* Top Bar: Purpose Switcher & View/Sort Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-border">
        {/* Purpose Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Portfolios' },
            { id: 'buy', label: 'For Sale' },
            { id: 'rent', label: 'For Lease' },
            { id: 'commercial', label: 'Commercial' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleChange('purpose', tab.id)}
              className={`text-xs uppercase tracking-wider px-4 py-2 transition-all ${
                filters.purpose === tab.id
                  ? 'bg-brand-dark text-white font-medium'
                  : 'bg-brand-surface text-brand-muted hover:text-brand-dark border border-brand-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View Mode & Sort Dropdown */}
        <div className="flex items-center gap-4">
          {/* Sorting */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-brand-muted uppercase tracking-wider hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-brand-surface border border-brand-border px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
            >
              <option value="featured">Curated & Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="sqft-desc">Interior: Largest First</option>
            </select>
          </div>

          {/* Grid vs List View Toggle */}
          <div className="flex items-center border border-brand-border">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-brand-dark text-white'
                  : 'text-brand-muted hover:text-brand-dark bg-white'
              }`}
              title="Grid View"
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4 stroke-[1.8]" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list'
                  ? 'bg-brand-dark text-white'
                  : 'text-brand-muted hover:text-brand-dark bg-white'
              }`}
              title="List View"
              aria-label="List view"
            >
              <List className="w-4 h-4 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Row: Keyword Search + Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
        {/* Search Keyword */}
        <div className="space-y-1">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
            Search Keyword
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Address, building, or name..."
              value={filters.keyword}
              onChange={(e) => handleChange('keyword', e.target.value)}
              className="w-full bg-brand-surface border border-brand-border pl-9 pr-3.5 py-2.5 text-xs text-brand-dark placeholder-neutral-400 focus:outline-none focus:border-brand-dark transition-colors"
            />
            <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2 stroke-[1.6]" />
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="space-y-1">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
            Location
          </label>
          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
            >
              <option value="">All Prime Markets</option>
              <option value="Beverly Hills">Beverly Hills, CA</option>
              <option value="New York">New York, NY</option>
              <option value="Miami">Miami & Miami Beach, FL</option>
              <option value="London">London, UK</option>
              <option value="Dubai">Dubai, UAE</option>
              <option value="Aspen">Aspen, CO</option>
            </select>
            <MapPin className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="space-y-1">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
            Architecture Type
          </label>
          <div className="relative">
            <select
              value={filters.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="Villa">Architectural Villa</option>
              <option value="Penthouse">Sky Penthouse</option>
              <option value="Waterfront">Waterfront Estate</option>
              <option value="Modern Apartment">Modern Apartment</option>
              <option value="Townhouse">Townhouse / Maisonette</option>
              <option value="Commercial Office">Commercial Office</option>
              <option value="Commercial Retail">Commercial Retail</option>
            </select>
            <Home className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
          </div>
        </div>

        {/* Bedrooms Dropdown */}
        <div className="space-y-1">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
            Bedrooms
          </label>
          <div className="relative">
            <select
              value={filters.bedrooms}
              onChange={(e) => handleChange('bedrooms', e.target.value)}
              className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
            >
              <option value="">Any Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
              <option value="6">6+ Bedrooms</option>
            </select>
            <Bed className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="space-y-1">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
            Price Bracket
          </label>
          <div className="relative">
            <select
              value={filters.price}
              onChange={(e) => handleChange('price', e.target.value)}
              className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
            >
              <option value="">Any Valuation</option>
              <option value="under-20m">Under $20 Million</option>
              <option value="20m-30m">$20M - $30 Million</option>
              <option value="above-30m">$30 Million+</option>
              <option value="rental-only">Leases / Rentals Only</option>
            </select>
            <DollarSign className="w-3.5 h-3.5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.6]" />
          </div>
        </div>
      </div>

      {/* Results Count & Reset Controls */}
      <div className="flex items-center justify-between pt-5 mt-4 border-t border-brand-border/70 text-xs">
        <span className="text-brand-muted">
          Showing <strong className="text-brand-dark font-medium">{totalResults}</strong> curated estates
        </span>

        <button
          onClick={resetFilters}
          className="inline-flex items-center gap-1.5 text-brand-muted hover:text-brand-dark transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  );
}

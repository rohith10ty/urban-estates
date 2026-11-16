import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import SearchFilter from '../components/SearchFilter';
import { properties } from '../data/properties';
import { Building2 } from 'lucide-react';

export default function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Controlled filter values derived from searchParams with local fallback
  const purpose = searchParams.get('purpose') || 'all';
  const location = searchParams.get('location') || '';
  const type = searchParams.get('type') || '';
  const price = searchParams.get('price') || '';
  const bedrooms = searchParams.get('bedrooms') || '';
  const keyword = searchParams.get('keyword') || '';

  const filters = useMemo(() => ({
    purpose,
    location,
    type,
    price,
    bedrooms,
    keyword,
  }), [purpose, location, type, price, bedrooms, keyword]);

  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  const setFilters = (updater) => {
    const nextFilters = typeof updater === 'function' ? updater(filters) : updater;
    const nextParams = new URLSearchParams();
    if (nextFilters.purpose && nextFilters.purpose !== 'all') nextParams.set('purpose', nextFilters.purpose);
    if (nextFilters.location) nextParams.set('location', nextFilters.location);
    if (nextFilters.type) nextParams.set('type', nextFilters.type);
    if (nextFilters.price) nextParams.set('price', nextFilters.price);
    if (nextFilters.bedrooms) nextParams.set('bedrooms', nextFilters.bedrooms);
    if (nextFilters.keyword) nextParams.set('keyword', nextFilters.keyword);
    setSearchParams(nextParams);
  };

  const resetFilters = () => {
    setSearchParams({});
  };

  // Filter properties
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Purpose check
      if (filters.purpose !== 'all' && property.purpose !== filters.purpose) {
        return false;
      }

      // Location check
      if (filters.location) {
        const locLower = filters.location.toLowerCase();
        const matchesCity = property.location.city.toLowerCase().includes(locLower);
        const matchesNeighborhood = property.location.neighborhood.toLowerCase().includes(locLower);
        const matchesState = property.location.state.toLowerCase().includes(locLower);
        if (!matchesCity && !matchesNeighborhood && !matchesState) return false;
      }

      // Property type check
      if (filters.type && !property.type.toLowerCase().includes(filters.type.toLowerCase())) {
        return false;
      }

      // Bedrooms check
      if (filters.bedrooms && property.specs.bedrooms < Number(filters.bedrooms)) {
        return false;
      }

      // Price range check
      if (filters.price) {
        if (filters.price === 'under-20m' && property.price >= 20000000) return false;
        if (filters.price === '20m-30m' && (property.price < 20000000 || property.price > 30000000)) return false;
        if (filters.price === 'above-30m' && property.price <= 30000000) return false;
        if (filters.price === 'rental-only' && property.purpose !== 'rent') return false;
        if (filters.price === 'under-25k' && property.price >= 25000) return false;
        if (filters.price === '25k-50k' && (property.price < 25000 || property.price > 50000)) return false;
      }

      // Keyword text check
      if (filters.keyword) {
        const q = filters.keyword.toLowerCase();
        const inTitle = property.title.toLowerCase().includes(q);
        const inAddress = property.location.address.toLowerCase().includes(q);
        const inCity = property.location.city.toLowerCase().includes(q);
        const inDesc = property.description.toLowerCase().includes(q);
        if (!inTitle && !inAddress && !inCity && !inDesc) return false;
      }

      return true;
    });
  }, [filters]);

  // Sort properties
  const sortedProperties = useMemo(() => {
    const list = [...filteredProperties];
    if (sortBy === 'price-asc') {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'sqft-desc') {
      return list.sort((a, b) => b.specs.sqft - a.specs.sqft);
    }
    // Default: featured first
    return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [filteredProperties, sortBy]);

  // Dynamic Page Title
  const getHeaderTitle = () => {
    if (filters.purpose === 'buy') return 'Prime Residences For Acquisition';
    if (filters.purpose === 'rent') return 'Curated Luxury Residences For Lease';
    if (filters.purpose === 'commercial') return 'Prime Commercial & Trophy Assets';
    return 'The Complete Architectural Portfolio';
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Urban Estates Catalogue
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-brand-dark tracking-tight mb-3">
            {getHeaderTitle()}
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            Every property in our collection undergoes rigorous architectural verification, provenance checks,
            and confidential title vetting.
          </p>
        </div>

        {/* Search & Filter Component */}
        <SearchFilter
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={sortedProperties.length}
        />

        {/* Properties Rendering */}
        {sortedProperties.length === 0 ? (
          <div className="bg-white border border-brand-border p-12 text-center my-8">
            <div className="w-14 h-14 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted mx-auto mb-4">
              <Building2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-light text-brand-dark mb-2">
              No Properties Matching Criteria
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-light max-w-md mx-auto mb-6">
              We could not find an active mandate matching all your filtered criteria. Please adjust your
              parameters or contact our Private Wealth desk for confidential off-market options.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} layout="grid" />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} layout="list" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

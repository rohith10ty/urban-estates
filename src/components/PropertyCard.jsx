import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

export default function PropertyCard({ property, layout = 'grid' }) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(property.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(property.id);
  };

  if (layout === 'list') {
    return (
      <div className="group bg-white border border-brand-border hover:border-brand-dark transition-all duration-300 flex flex-col md:flex-row overflow-hidden">
        {/* Image Container */}
        <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden bg-brand-charcoal">
          <img
            src={property.mainImage}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Purpose & Status Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-brand-dark text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
              {property.purpose === 'buy' ? 'For Sale' : property.purpose === 'rent' ? 'For Lease' : 'Commercial'}
            </span>
            {property.status && (
              <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium border border-brand-border">
                {property.status}
              </span>
            )}
          </div>

          {/* Bookmark Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-4 right-4 p-2 transition-all duration-200 ${
              saved
                ? 'bg-brand-dark text-brand-accent'
                : 'bg-white/90 backdrop-blur-sm text-brand-dark hover:text-brand-accent'
            }`}
            aria-label={saved ? 'Remove from saved' : 'Save property'}
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-brand-accent stroke-brand-accent' : 'stroke-[1.8]'}`} />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-brand-muted uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>{property.location.neighborhood}, {property.location.city}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light text-brand-black tracking-tight mb-2 group-hover:text-brand-charcoal transition-colors">
              <Link to={`/property/${property.id}`} className="focus:outline-none">
                {property.title}
              </Link>
            </h3>

            <p className="text-xs sm:text-sm text-brand-muted font-light line-clamp-2 mb-6">
              {property.tagline}
            </p>

            {/* Specs Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-brand-border text-xs text-brand-dark">
              {property.specs.bedrooms > 0 && (
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-brand-muted stroke-[1.6]" />
                  <span><strong className="font-medium">{property.specs.bedrooms}</strong> Beds</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-brand-muted stroke-[1.6]" />
                <span><strong className="font-medium">{property.specs.bathrooms}</strong> Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="w-4 h-4 text-brand-muted stroke-[1.6]" />
                <span><strong className="font-medium">{property.specs.sqft.toLocaleString()}</strong> SQ FT</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 mt-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
                Valuation
              </span>
              <span className="text-2xl font-light text-brand-dark tracking-tight">
                {property.priceFormatted}
              </span>
            </div>

            <Link
              to={`/property/${property.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Grid Layout (Default)
  return (
    <div className="group bg-white border border-brand-border hover:border-brand-dark transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal">
        <img
          src={property.mainImage}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Purpose & Status Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-brand-dark text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
            {property.purpose === 'buy' ? 'For Sale' : property.purpose === 'rent' ? 'For Lease' : 'Commercial'}
          </span>
          {property.status && (
            <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium border border-brand-border">
              {property.status}
            </span>
          )}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2 transition-all duration-200 ${
            saved
              ? 'bg-brand-dark text-brand-accent'
              : 'bg-white/90 backdrop-blur-sm text-brand-dark hover:text-brand-accent'
          }`}
          aria-label={saved ? 'Remove from saved' : 'Save property'}
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-brand-accent stroke-brand-accent' : 'stroke-[1.8]'}`} />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-brand-muted uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>{property.location.neighborhood}, {property.location.city}</span>
          </div>

          <h3 className="text-xl font-light text-brand-black tracking-tight mb-2 group-hover:text-brand-charcoal transition-colors line-clamp-1">
            <Link to={`/property/${property.id}`} className="focus:outline-none">
              {property.title}
            </Link>
          </h3>

          <p className="text-xs text-brand-muted font-light line-clamp-2 mb-4 leading-relaxed">
            {property.tagline}
          </p>

          {/* Specs Bar */}
          <div className="flex items-center justify-between py-3 border-y border-brand-border text-xs text-brand-dark">
            {property.specs.bedrooms > 0 ? (
              <div className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-brand-muted stroke-[1.6]" />
                <span><strong>{property.specs.bedrooms}</strong> Beds</span>
              </div>
            ) : (
              <span className="text-brand-muted text-[11px] uppercase tracking-wider">Commercial</span>
            )}
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-brand-muted stroke-[1.6]" />
              <span><strong>{property.specs.bathrooms}</strong> Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square className="w-3.5 h-3.5 text-brand-muted stroke-[1.6]" />
              <span><strong>{property.specs.sqft.toLocaleString()}</strong> SQ FT</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 mt-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
              Offered At
            </span>
            <span className="text-xl font-light text-brand-dark tracking-tight">
              {property.priceFormatted}
            </span>
          </div>

          <Link
            to={`/property/${property.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-dark uppercase tracking-wider hover:text-brand-accent transition-colors group/link"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

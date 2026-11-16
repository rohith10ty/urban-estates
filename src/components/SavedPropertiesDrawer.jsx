import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ArrowUpRight, Building2 } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

export default function SavedPropertiesDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, savedProperties, toggleSave } = useSaved();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-brand-border shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-brand-border flex items-center justify-between">
            <div>
              <h2 className="text-lg font-light tracking-tight text-brand-dark">
                Saved Residences
              </h2>
              <p className="text-xs text-brand-muted font-light">
                {savedProperties.length} {savedProperties.length === 1 ? 'property' : 'properties'} bookmarked
              </p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-1.5 text-brand-muted hover:text-brand-dark transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Properties List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4 no-scrollbar">
            {savedProperties.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-12 h-12 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted mb-4">
                  <Building2 className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-light text-brand-dark mb-1">
                  No Saved Properties
                </h3>
                <p className="text-xs text-brand-muted max-w-xs mb-6">
                  Bookmark prime residences while exploring our portfolio to compare and review them here.
                </p>
                <Link
                  to="/listings"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-5 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
                >
                  Explore Portfolio
                </Link>
              </div>
            ) : (
              savedProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex gap-4 p-3 bg-brand-surface/60 border border-brand-border group hover:border-brand-dark transition-all"
                >
                  <img
                    src={property.mainImage}
                    alt={property.title}
                    className="w-24 h-24 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[10px] text-brand-muted uppercase tracking-wider block truncate">
                        {property.location.neighborhood}, {property.location.city}
                      </span>
                      <h4 className="text-sm font-medium text-brand-dark truncate">
                        {property.title}
                      </h4>
                      <p className="text-sm font-light text-brand-dark mt-0.5">
                        {property.priceFormatted}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-brand-border/60">
                      <Link
                        to={`/property/${property.id}`}
                        onClick={() => setIsDrawerOpen(false)}
                        className="text-[11px] font-medium text-brand-dark hover:text-brand-accent uppercase tracking-wider flex items-center gap-1"
                      >
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>

                      <button
                        onClick={() => toggleSave(property.id)}
                        className="text-[11px] text-brand-muted hover:text-red-700 transition-colors p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5 stroke-[1.6]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Action */}
          {savedProperties.length > 0 && (
            <div className="p-6 border-t border-brand-border bg-brand-cream space-y-3">
              <Link
                to="/contact"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-3 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors"
              >
                <span>Inquire on Saved Residences</span>
                <ArrowUpRight className="w-4 h-4 text-brand-accent" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

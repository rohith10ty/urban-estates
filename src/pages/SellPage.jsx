import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Camera, Globe2, EyeOff, Award, CheckCircle2 } from 'lucide-react';

export default function SellPage() {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    propertyType: 'Villa',
    approxSqft: '',
    estimatedValue: '',
    representationMode: 'private', // 'private' or 'public'
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Private Representation
          </span>
          <h1 className="text-4xl sm:text-6xl font-light text-brand-dark tracking-tight mb-4 leading-tight">
            Entrust Your Residence to Architectural Stewards.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Urban Estates represents rare architectural residences, landmark compounds, and prime commercial assets.
            We align each mandate with qualified international collectors while safeguarding your personal privacy.
          </p>
        </div>
      </section>

      {/* Pillars of Representation */}
      <section className="bg-white border-y border-brand-border py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <EyeOff className="w-6 h-6 text-brand-accent mb-4 stroke-[1.5]" />
                <h3 className="text-base font-medium text-brand-dark uppercase tracking-wider mb-2">
                  Confidential Off-Market
                </h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Avoid public MLS syndication. Reach vetted sovereign entities and family offices without exposing interior photography to the open internet.
                </p>
              </div>
            </div>

            <div className="p-6 bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <Camera className="w-6 h-6 text-brand-accent mb-4 stroke-[1.5]" />
                <h3 className="text-base font-medium text-brand-dark uppercase tracking-wider mb-2">
                  Museum-Grade Production
                </h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Our dedicated architectural cinematography teams capture each home as a work of fine art, featuring natural light studies and editorial monographs.
                </p>
              </div>
            </div>

            <div className="p-6 bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <Globe2 className="w-6 h-6 text-brand-accent mb-4 stroke-[1.5]" />
                <h3 className="text-base font-medium text-brand-dark uppercase tracking-wider mb-2">
                  Global Capital Reach
                </h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Direct channels into wealth management desks in London, Zurich, New York, Singapore, and Dubai ensure maximum qualified exposure.
                </p>
              </div>
            </div>

            <div className="p-6 bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <Award className="w-6 h-6 text-brand-accent mb-4 stroke-[1.5]" />
                <h3 className="text-base font-medium text-brand-dark uppercase tracking-wider mb-2">
                  Record Price Benchmarks
                </h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Our advisors routinely establish record price-per-square-foot benchmarks by positioning property as collectible architectural provenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Valuation Request Form & Process */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Valuation Request Form */}
          <div className="lg:col-span-7 bg-white border border-brand-border p-8 sm:p-10 shadow-sm">
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              Confidential Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-brand-dark tracking-tight mb-2">
              Request a Bespoke Valuation
            </h2>
            <p className="text-xs text-brand-muted font-light mb-8">
              Complete the preliminary parameters below. A Senior Managing Partner will prepare a private comparative market dossier.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-brand-surface border border-brand-border p-8">
                <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto mb-4 stroke-[1.6]" />
                <h3 className="text-2xl font-light text-brand-dark mb-2">
                  Valuation Dossier Initiated
                </h3>
                <p className="text-xs text-brand-muted font-light max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-brand-dark font-medium">{formData.ownerName}</strong>.
                  Our senior advisory committee will review your property credentials and contact you confidentially.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal"
                >
                  Submit Another Valuation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Owner / Representative Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Thorne"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Private Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="owner@estate.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Direct Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>
                </div>

                {/* Property Coordinates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Property Street Address / Complex
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1048 Shadow Hill Way"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      City, State & Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Beverly Hills, CA 90210"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>
                </div>

                {/* Property Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
                    >
                      <option value="Villa">Architectural Villa</option>
                      <option value="Penthouse">Sky Penthouse</option>
                      <option value="Waterfront">Waterfront Estate</option>
                      <option value="Townhouse">Historic Townhouse</option>
                      <option value="Commercial">Commercial Asset</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Approximate Area (SQ FT)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 12000"
                      value={formData.approxSqft}
                      onChange={(e) => setFormData({ ...formData, approxSqft: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                      Expected Valuation Range
                    </label>
                    <select
                      value={formData.estimatedValue}
                      onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
                    >
                      <option value="">Select Valuation</option>
                      <option value="10m-20m">$10,000,000 - $20,000,000</option>
                      <option value="20m-35m">$20,000,000 - $35,000,000</option>
                      <option value="35m-50m">$35,000,000 - $50,000,000</option>
                      <option value="50m+">$50,000,000+</option>
                    </select>
                  </div>
                </div>

                {/* Representation Preference */}
                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                    Preferred Representation Channel
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3 border cursor-pointer transition-colors flex items-center gap-3 ${
                        formData.representationMode === 'private'
                          ? 'border-brand-dark bg-brand-surface'
                          : 'border-brand-border bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="representationMode"
                        value="private"
                        checked={formData.representationMode === 'private'}
                        onChange={() => setFormData({ ...formData, representationMode: 'private' })}
                        className="accent-brand-dark"
                      />
                      <div>
                        <span className="block text-xs font-medium text-brand-dark">
                          Private Off-Market Vault
                        </span>
                        <span className="text-[10px] text-brand-muted">
                          Strict NDA protocol; no public syndication.
                        </span>
                      </div>
                    </label>

                    <label
                      className={`p-3 border cursor-pointer transition-colors flex items-center gap-3 ${
                        formData.representationMode === 'public'
                          ? 'border-brand-dark bg-brand-surface'
                          : 'border-brand-border bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="representationMode"
                        value="public"
                        checked={formData.representationMode === 'public'}
                        onChange={() => setFormData({ ...formData, representationMode: 'public' })}
                        className="accent-brand-dark"
                      />
                      <div>
                        <span className="block text-xs font-medium text-brand-dark">
                          Global Editorial Public Launch
                        </span>
                        <span className="text-[10px] text-brand-muted">
                          Featured in architectural publications & media.
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1">
                    Architectural Details & Owner Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Architect name, year built, specific finishes, or timeline considerations..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                  />
                </div>

                {/* Privacy Badge */}
                <div className="flex items-center gap-2 text-[10px] text-brand-muted pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>Submissions are strictly confidential and encrypted under attorney-client level data safety.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest hover:bg-brand-charcoal transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Private Valuation Dossier</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Listing Process Timeline & Advisory Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-brand-border p-8">
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
                Mandate Execution
              </span>
              <h3 className="text-xl font-light text-brand-dark tracking-tight mb-6">
                The Four-Phase Listing Journey
              </h3>

              <div className="space-y-6 text-xs">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-dark text-brand-accent text-xs font-mono flex items-center justify-center flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-medium uppercase tracking-wider text-brand-dark mb-1">
                      Architectural Appraisal & Valuation
                    </h4>
                    <p className="text-brand-muted font-light leading-relaxed">
                      Deep structural audit, zoning confirmation, and historic/architectural pedigree evaluation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-dark text-brand-accent text-xs font-mono flex items-center justify-center flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-medium uppercase tracking-wider text-brand-dark mb-1">
                      Editorial Production & Digital Twin
                    </h4>
                    <p className="text-brand-muted font-light leading-relaxed">
                      High-dynamic-range cinematography, spatial floor plans, and bespoke printed presentation monographs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-dark text-brand-accent text-xs font-mono flex items-center justify-center flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-medium uppercase tracking-wider text-brand-dark mb-1">
                      Vetted Private Showings
                    </h4>
                    <p className="text-brand-muted font-light leading-relaxed">
                      Every prospective buyer is pre-qualified through proof-of-funds or sovereign bank verification before stepping foot on property.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-dark text-brand-accent text-xs font-mono flex items-center justify-center flex-shrink-0">
                    04
                  </div>
                  <div>
                    <h4 className="font-medium uppercase tracking-wider text-brand-dark mb-1">
                      Discreet Closing & Escrow
                    </h4>
                    <p className="text-brand-muted font-light leading-relaxed">
                      Complex trust, LLC, or offshore asset structures navigated cleanly by our dedicated in-house transaction counsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stat Box */}
            <div className="bg-brand-dark text-white p-8 border border-white/10">
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
                Proven Track Record
              </span>
              <div className="text-4xl font-light text-white mb-2">
                42 Days
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Average time from mandate activation to binding offer for exclusive Urban Estates listings.
              </p>
              <div className="pt-4 border-t border-white/10 flex justify-between text-xs">
                <span className="text-neutral-400">Avg. Listing to Sale Price:</span>
                <span className="text-brand-accent font-medium">97.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

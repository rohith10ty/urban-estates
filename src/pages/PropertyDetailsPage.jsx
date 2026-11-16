import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  getPropertyById,
  getRelatedProperties,
} from '../data/properties';
import { useSaved } from '../context/SavedContext';
import Lightbox from '../components/Lightbox';
import ScheduleTourModal from '../components/ScheduleTourModal';
import MortgageCalculator from '../components/MortgageCalculator';
import PropertyCard from '../components/PropertyCard';
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Car,
  ShieldCheck,
  Heart,
  Share2,
  Maximize2,
  Check,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = getPropertyById(id);
  const { isSaved, toggleSave } = useSaved();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Inquire form on agent card
  const [agentForm, setAgentForm] = useState({ name: '', email: '', message: '' });
  const [agentSubmitted, setAgentSubmitted] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-brand-cream pt-36 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-brand-dark mb-4">Property Not Found</h2>
          <p className="text-xs text-brand-muted mb-8">
            The requested estate may have been transacted privately or moved to our off-market vault.
          </p>
          <Link
            to="/listings"
            className="px-6 py-3 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  const saved = isSaved(property.id);
  const related = getRelatedProperties(property.id, 3);
  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.mainImage];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleAgentInquire = (e) => {
    e.preventDefault();
    setAgentSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        currentIndex={activeImageIndex}
        setCurrentIndex={setActiveImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

      {/* Schedule Tour Modal */}
      <ScheduleTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        property={property}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex items-center justify-between py-4 mb-4 border-b border-brand-border text-xs text-brand-muted">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-2">
            <span>Portfolio</span>
            <span>/</span>
            <span>{property.location.city}</span>
            <span>/</span>
            <span className="text-brand-dark font-medium truncate max-w-xs">{property.title}</span>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="mb-10">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-brand-charcoal group">
            <img
              src={images[activeImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Lightbox Trigger Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2.5 bg-black/70 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider hover:bg-black transition-colors flex items-center gap-2 border border-white/20"
            >
              <Maximize2 className="w-4 h-4 text-brand-accent" />
              <span>View Gallery ({images.length} Photos)</span>
            </button>

            {/* Quick Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="bg-brand-dark text-white text-[11px] tracking-widest uppercase px-3 py-1 font-medium">
                {property.purpose === 'buy' ? 'For Sale' : property.purpose === 'rent' ? 'For Lease' : 'Commercial'}
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[11px] tracking-widest uppercase px-3 py-1 font-medium border border-brand-border">
                {property.type}
              </span>
            </div>
          </div>

          {/* Thumbnail Selector Strip */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3 mt-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] overflow-hidden border-2 transition-all ${
                  idx === activeImageIndex
                    ? 'border-brand-dark scale-[1.02]'
                    : 'border-transparent opacity-65 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Title & Key Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-muted uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>{property.location.address}, {property.location.neighborhood}, {property.location.city}, {property.location.state} {property.location.postalCode}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-light text-brand-dark tracking-tight mb-2">
              {property.title}
            </h1>

            <p className="text-sm sm:text-base text-brand-muted font-light max-w-3xl leading-relaxed">
              {property.tagline}
            </p>
          </div>

          {/* Pricing & Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end justify-between gap-4 flex-shrink-0">
            <div>
              <span className="text-[10px] uppercase tracking-ultra text-brand-muted block lg:text-right">
                Offered At
              </span>
              <div className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight lg:text-right">
                {property.priceFormatted}
              </div>
            </div>

            {/* Action Buttons: Save, Share, Schedule */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSave(property.id)}
                className={`px-4 py-2.5 border text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors ${
                  saved
                    ? 'bg-brand-dark text-brand-accent border-brand-dark'
                    : 'bg-white text-brand-dark border-brand-border hover:border-brand-dark'
                }`}
              >
                <Heart className={`w-4 h-4 ${saved ? 'fill-brand-accent stroke-brand-accent' : ''}`} />
                <span>{saved ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2.5 bg-white border border-brand-border text-brand-dark hover:border-brand-dark text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors"
                title="Copy property link"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Copied Link' : 'Share'}</span>
              </button>

              <button
                onClick={() => setIsTourModalOpen(true)}
                className="px-5 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors flex items-center gap-2"
              >
                <span>Schedule Showing</span>
                <ArrowUpRight className="w-4 h-4 text-brand-accent" />
              </button>
            </div>
          </div>
        </div>

        {/* Essential Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-8 border-b border-brand-border">
          {property.specs.bedrooms > 0 && (
            <div className="p-4 bg-white border border-brand-border">
              <span className="text-[10px] uppercase tracking-wider text-brand-muted block mb-1">
                Bedrooms
              </span>
              <div className="flex items-center gap-2 text-xl font-light text-brand-dark">
                <Bed className="w-5 h-5 text-brand-accent stroke-[1.5]" />
                <span>{property.specs.bedrooms}</span>
              </div>
            </div>
          )}

          <div className="p-4 bg-white border border-brand-border">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block mb-1">
              Bathrooms
            </span>
            <div className="flex items-center gap-2 text-xl font-light text-brand-dark">
              <Bath className="w-5 h-5 text-brand-accent stroke-[1.5]" />
              <span>{property.specs.bathrooms}</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-brand-border">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block mb-1">
              Interior Area
            </span>
            <div className="flex items-center gap-2 text-xl font-light text-brand-dark">
              <Square className="w-5 h-5 text-brand-accent stroke-[1.5]" />
              <span>{property.specs.sqft.toLocaleString()} <span className="text-xs text-brand-muted">SQFT</span></span>
            </div>
          </div>

          <div className="p-4 bg-white border border-brand-border">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block mb-1">
              Site / Lot Size
            </span>
            <div className="text-base font-light text-brand-dark pt-1 truncate">
              {property.specs.lotSize}
            </div>
          </div>

          <div className="p-4 bg-white border border-brand-border">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block mb-1">
              Completed Year
            </span>
            <div className="flex items-center gap-2 text-xl font-light text-brand-dark">
              <Calendar className="w-5 h-5 text-brand-accent stroke-[1.5]" />
              <span>{property.specs.yearBuilt}</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-brand-border">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block mb-1">
              Vehicle Bays
            </span>
            <div className="flex items-center gap-2 text-xl font-light text-brand-dark">
              <Car className="w-5 h-5 text-brand-accent stroke-[1.5]" />
              <span>{property.specs.garages}</span>
            </div>
          </div>
        </div>

        {/* Main Details & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          {/* Left Column: Narrative, Highlights, Amenities, Financing */}
          <div className="lg:col-span-8 space-y-12">
            {/* Architectural Overview */}
            <div>
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
                Architectural Provenance
              </span>
              <h2 className="text-2xl font-light text-brand-dark tracking-tight mb-4">
                The Estate Vision
              </h2>
              <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-brand-muted font-light leading-relaxed whitespace-pre-line space-y-4">
                {property.description}
              </div>

              {property.architect && (
                <div className="mt-6 p-4 bg-brand-surface border border-brand-border flex items-center justify-between text-xs">
                  <span className="text-brand-muted">Design & Architecture:</span>
                  <strong className="text-brand-dark font-medium">{property.architect}</strong>
                </div>
              )}
            </div>

            {/* Architectural Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <div>
                <h3 className="text-xl font-light text-brand-dark tracking-tight mb-4">
                  Curated Residence Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-white border border-brand-border text-xs">
                      <div className="w-4 h-4 rounded-full bg-brand-surface border border-brand-accent text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span className="text-brand-dark font-light">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities Grid */}
            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h3 className="text-xl font-light text-brand-dark tracking-tight mb-4">
                  Amenities & Private Infrastructure
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-brand-border flex items-center gap-2.5 text-xs text-brand-dark"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      <span className="font-light">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mortgage Calculator */}
            {property.purpose === 'buy' && (
              <MortgageCalculator defaultPrice={property.price} />
            )}
          </div>

          {/* Right Column: Private Advisor Card & Inquiries */}
          <div className="lg:col-span-4 space-y-6">
            {/* Agent / Advisor Box */}
            <div className="bg-white border border-brand-border p-6 shadow-sm sticky top-28">
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-3">
                Assigned Private Advisor
              </span>

              <div className="flex items-center gap-4 pb-6 border-b border-brand-border">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border border-brand-border flex-shrink-0"
                />
                <div>
                  <h4 className="text-base font-medium text-brand-dark">
                    {property.agent.name}
                  </h4>
                  <p className="text-xs text-brand-muted font-light mb-1">
                    {property.agent.title}
                  </p>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {property.agent.license}
                  </span>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-2 py-4 border-b border-brand-border text-xs">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center gap-2.5 text-brand-dark hover:text-brand-accent transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{property.agent.phone}</span>
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center gap-2.5 text-brand-dark hover:text-brand-accent transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="truncate">{property.agent.email}</span>
                </a>
              </div>

              {/* Instant Inquire Form */}
              <div className="pt-5">
                <h5 className="text-xs uppercase tracking-wider text-brand-dark font-medium mb-3">
                  Direct Mandate Inquiry
                </h5>

                {agentSubmitted ? (
                  <div className="p-4 bg-brand-surface border border-brand-accent text-center">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                    <p className="text-xs font-medium text-brand-dark mb-1">
                      Inquiry Dispatched
                    </p>
                    <p className="text-[11px] text-brand-muted">
                      {property.agent.name} has been notified and will respond via secure channel shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAgentInquire} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={agentForm.name}
                      onChange={(e) => setAgentForm({ ...agentForm, name: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={agentForm.email}
                      onChange={(e) => setAgentForm({ ...agentForm, email: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                    <textarea
                      rows={3}
                      placeholder={`I am interested in ${property.title} and would like to arrange confidential review materials.`}
                      value={agentForm.message}
                      onChange={(e) => setAgentForm({ ...agentForm, message: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest hover:bg-brand-charcoal transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Inquire Discreetly</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent" />
                    </button>
                  </form>
                )}

                <button
                  type="button"
                  onClick={() => setIsTourModalOpen(true)}
                  className="w-full mt-2.5 py-2.5 bg-transparent border border-brand-border text-brand-dark text-xs font-medium uppercase tracking-wider hover:border-brand-dark transition-colors"
                >
                  Book Private Showing
                </button>
              </div>

              {/* Confidentiality Note */}
              <div className="flex items-center gap-2 text-[10px] text-brand-muted mt-5 pt-4 border-t border-brand-border/60">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                <span>All communication is covered by client-broker confidentiality.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar / Related Properties */}
        {related.length > 0 && (
          <div className="pt-16 border-t border-brand-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-1">
                  Complementary Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-brand-dark tracking-tight">
                  Similar Prime Portfolios
                </h3>
              </div>
              <Link
                to="/listings"
                className="text-xs uppercase tracking-wider text-brand-dark hover:text-brand-accent font-medium flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relProperty) => (
                <PropertyCard key={relProperty.id} property={relProperty} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

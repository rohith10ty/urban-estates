import React, { useState } from 'react';
import { Clock, ShieldCheck, CheckCircle2, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Acquisition / Buying',
    budgetRange: '$20M - $35M',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `UE-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryRef(ref);
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How do I access private, off-market listings?',
      a: 'A significant portion of our portfolio never reaches public syndication. After a brief confidential qualification call with a Senior Managing Partner, verified buyers receive direct invitations to our encrypted off-market vault.',
    },
    {
      q: 'Can international buyers acquire properties through an LLC, trust, or offshore entity?',
      a: 'Yes. Our in-house legal and cross-border advisory desks work directly with client family offices and private counsel to structure acquisitions compliant with FIRPTA, UK stamp duty land tax, and UAE freehold ownership statutes.',
    },
    {
      q: 'How does Urban Estates protect seller privacy during showings?',
      a: 'Every prospective purchaser must submit verified proof of funds or an institutional banking reference prior to scheduling. Private security escorts, non-disclosure agreements, and strict photography bans are standard protocol.',
    },
    {
      q: 'What is your process for property valuation?',
      a: 'Unlike automated algorithmic estimates, we conduct comprehensive comparative architectural analyses evaluating structural integrity, finish specifications, architectural pedigree, and recent private sales benchmarks.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Direct Communications
          </span>
          <h1 className="text-4xl sm:text-6xl font-light text-brand-dark tracking-tight mb-4 leading-tight">
            Connect With Our Senior Advisory Desk.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Whether seeking to acquire a landmark trophy estate, lease a prime penthouse, or arrange
            private valuation for your residence, our partners are at your discreet disposal.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Hubs */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-brand-border p-8 sm:p-10 shadow-sm">
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              Confidential Transmission
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-brand-dark tracking-tight mb-2">
              Initiate Direct Dialogue
            </h2>
            <p className="text-xs text-brand-muted font-light mb-8">
              All communications are strictly protected under client-broker non-disclosure protocol.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-brand-surface border border-brand-border p-8">
                <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto mb-4 stroke-[1.6]" />
                <span className="text-[10px] uppercase tracking-widest text-brand-accent block mb-1">
                  Reference: {inquiryRef}
                </span>
                <h3 className="text-2xl font-light text-brand-dark mb-2">
                  Inquiry Successfully Received
                </h3>
                <p className="text-xs text-brand-muted font-light max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-brand-dark font-medium">{formData.name}</strong>.
                  A Senior Managing Partner assigned to your region will review your specifications
                  and reach out via your preferred channel within two business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Harrison Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                      Private Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="principal@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                      Direct Telephone / WhatsApp
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

                {/* Service Interest & Valuation Target */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                      Primary Nature of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
                    >
                      <option value="Acquisition / Buying">Acquisition / Residential Purchase</option>
                      <option value="Lease / Rental">Executive Leasing & Rentals</option>
                      <option value="Disposition / Selling">Listing & Selling a Residence</option>
                      <option value="Commercial">Commercial & Trophy Portfolios</option>
                      <option value="Off-Market Access">Private Off-Market Vault Access</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                      Target Valuation Bracket
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
                    >
                      <option value="under-15m">Under $15,000,000</option>
                      <option value="15m-25m">$15,000,000 - $25,000,000</option>
                      <option value="25m-40m">$25,000,000 - $40,000,000</option>
                      <option value="40m+">$40,000,000+</option>
                      <option value="lease">Luxury Lease ($20,000+/mo)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-1.5">
                    Confidential Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify architectural requirements, geographical targets, or specific properties in our catalog..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                  />
                </div>

                {/* Confidentiality Check */}
                <div className="flex items-center gap-2 text-[10px] text-brand-muted pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>Transmissions are confidential and never shared with third parties or syndicates.</span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest hover:bg-brand-charcoal transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Confidential Inquiry</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Hubs & Global Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-brand-border p-8">
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
                Headquarters
              </span>
              <h3 className="text-xl font-light text-brand-dark tracking-tight mb-6">
                Global Office Desks
              </h3>

              <div className="space-y-6 text-xs">
                {/* New York */}
                <div className="pb-5 border-b border-brand-border">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                    New York Hub
                  </h4>
                  <p className="text-brand-muted font-light leading-relaxed mb-2">
                    67 Franklin Street, Floor 12<br />
                    Tribeca, New York, NY 10013
                  </p>
                  <div className="flex flex-col gap-1 text-brand-dark">
                    <a href="tel:+12125550192" className="hover:text-brand-accent transition-colors">
                      +1 (212) 555-0192
                    </a>
                    <a href="mailto:ny@urbanestates.com" className="hover:text-brand-accent transition-colors">
                      ny@urbanestates.com
                    </a>
                  </div>
                </div>

                {/* Beverly Hills */}
                <div className="pb-5 border-b border-brand-border">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                    Beverly Hills Hub
                  </h4>
                  <p className="text-brand-muted font-light leading-relaxed mb-2">
                    9600 Wilshire Boulevard, Floor 14<br />
                    Beverly Hills, CA 90212
                  </p>
                  <div className="flex flex-col gap-1 text-brand-dark">
                    <a href="tel:+13108492100" className="hover:text-brand-accent transition-colors">
                      +1 (310) 849-2100
                    </a>
                    <a href="mailto:la@urbanestates.com" className="hover:text-brand-accent transition-colors">
                      la@urbanestates.com
                    </a>
                  </div>
                </div>

                {/* London Mayfair */}
                <div className="pb-5 border-b border-brand-border">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                    London Mayfair Hub
                  </h4>
                  <p className="text-brand-muted font-light leading-relaxed mb-2">
                    18 Grosvenor Square<br />
                    Mayfair, London W1K 6LD, UK
                  </p>
                  <div className="flex flex-col gap-1 text-brand-dark">
                    <a href="tel:+442079460881" className="hover:text-brand-accent transition-colors">
                      +44 20 7946 0881
                    </a>
                    <a href="mailto:london@urbanestates.com" className="hover:text-brand-accent transition-colors">
                      london@urbanestates.com
                    </a>
                  </div>
                </div>

                {/* Dubai */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                    Dubai DIFC Hub
                  </h4>
                  <p className="text-brand-muted font-light leading-relaxed mb-2">
                    Gate Precinct 4, Floor 8<br />
                    DIFC, Dubai, UAE
                  </p>
                  <div className="flex flex-col gap-1 text-brand-dark">
                    <a href="tel:+97143982200" className="hover:text-brand-accent transition-colors">
                      +971 4 398 2200
                    </a>
                    <a href="mailto:dubai@urbanestates.com" className="hover:text-brand-accent transition-colors">
                      dubai@urbanestates.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Concierge */}
            <div className="p-6 bg-brand-surface border border-brand-border text-xs">
              <div className="flex items-center gap-2 mb-2 text-brand-dark font-medium uppercase tracking-wider">
                <Clock className="w-4 h-4 text-brand-accent stroke-[1.8]" />
                <span>Operating Protocols</span>
              </div>
              <p className="text-brand-muted font-light leading-relaxed mb-2">
                Advisory Desks operate Monday through Friday from 08:00 to 20:00 across respective local time zones.
              </p>
              <p className="text-brand-muted font-light">
                Registered VIP principals hold 24/7 dedicated satellite phone access directly to their Managing Partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="bg-white border-t border-brand-border py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              Clarity & Protocol
            </span>
            <h2 className="text-3xl font-light text-brand-dark tracking-tight">
              Frequently Addressed Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-brand-border bg-brand-surface/40 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-medium text-brand-dark">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-muted transition-transform duration-200 flex-shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-brand-dark' : ''
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-brand-muted font-light leading-relaxed border-t border-brand-border/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

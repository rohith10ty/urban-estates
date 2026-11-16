import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-black text-white border-t border-brand-charcoal pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white text-brand-black flex items-center justify-center font-bold text-xs tracking-tight">
                UE
              </div>
              <span className="font-semibold text-lg tracking-widest uppercase">
                Urban Estates
              </span>
            </Link>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              A private real estate brokerage and architectural advisory dedicated to prime residential
              and trophy commercial properties across global capital hubs.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-brand-dark p-6 sm:p-8 border border-white/10">
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-1">
                Confidential Gazette
              </span>
              <h4 className="text-xl font-light text-white tracking-tight mb-2">
                Receive Off-Market Architectural Releases
              </h4>
              <p className="text-xs text-neutral-400 font-light mb-4">
                Subscribers receive discreet notifications of pre-market mandates prior to global public syndication.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-brand-accent py-2">
                  <Check className="w-4 h-4" />
                  <span>You have been registered for private off-market dispatches.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your confidential email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-brand-charcoal border border-white/15 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white text-brand-black text-xs font-medium uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-colors flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Global Hubs & Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-white/10 text-xs">
          {/* Navigation: Properties */}
          <div>
            <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-4">
              Properties
            </h5>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <Link to="/listings?purpose=buy" className="hover:text-white transition-colors">
                  Buy Residences
                </Link>
              </li>
              <li>
                <Link to="/listings?purpose=rent" className="hover:text-white transition-colors">
                  Lease & Rentals
                </Link>
              </li>
              <li>
                <Link to="/listings?purpose=commercial" className="hover:text-white transition-colors">
                  Commercial Portfolios
                </Link>
              </li>
              <li>
                <Link to="/listings?type=Penthouse" className="hover:text-white transition-colors">
                  Sky Penthouses
                </Link>
              </li>
              <li>
                <Link to="/listings?type=Villa" className="hover:text-white transition-colors">
                  Architectural Villas
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation: Advisory */}
          <div>
            <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-4">
              Advisory
            </h5>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <Link to="/sell" className="hover:text-white transition-colors">
                  Sell with Urban Estates
                </Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-white transition-colors">
                  Property Valuation
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Private Wealth Desk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Schedule Private Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation: Company */}
          <div>
            <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Architectural Ethos
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Leadership & Advisors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Hubs: NY & LA */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-2">
                New York Hub
              </h5>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                67 Franklin Street, Floor 12<br />
                Tribeca, New York, NY 10013<br />
                <span className="text-neutral-300">+1 (212) 555-0192</span>
              </p>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-2">
                Beverly Hills Hub
              </h5>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                9600 Wilshire Boulevard<br />
                Beverly Hills, CA 90212<br />
                <span className="text-neutral-300">+1 (310) 849-2100</span>
              </p>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-2">
                London Mayfair
              </h5>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                18 Grosvenor Square<br />
                Mayfair, London W1K 6LD<br />
                <span className="text-neutral-300">+44 20 7946 0881</span>
              </p>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium mb-2">
                Dubai DIFC
              </h5>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Gate Precinct Building 4<br />
                DIFC, Dubai, UAE<br />
                <span className="text-neutral-300">+971 4 398 2200</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span>© {CURRENT_YEAR} Urban Estates Luxury Real Estate Inc. All rights reserved. Equal Housing Opportunity.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Confidentiality Protocol</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Agency</span>
            <span className="hover:text-neutral-400 cursor-pointer">Security Credentials</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

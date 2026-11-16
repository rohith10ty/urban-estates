import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Marcus Vance',
      role: 'Founder & Managing Partner',
      hub: 'Beverly Hills / Los Angeles',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
      bio: 'Over two decades representing modernist estates, cantilevered compounds, and private family offices across California and Aspen.',
    },
    {
      name: 'Elena Rostova',
      role: 'Partner, Manhattan Trophy Portfolios',
      hub: 'New York City',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
      bio: 'Specialist in Tribeca cast-iron spires, Central Park penthouses, and landmark architectural conversions.',
    },
    {
      name: 'Charlotte St. Claire',
      role: 'Head of Prime European Residential',
      hub: 'London Mayfair',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
      bio: 'RICS Fellow guiding prime central London freehold acquisitions and historic English country estates.',
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Senior Partner, Middle East & Gulf Frontages',
      hub: 'Dubai DIFC',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
      bio: 'Advising sovereign funds and international principals on bespoke waterfront compounds and Palm Jumeirah estates.',
    },
  ];

  const services = [
    {
      number: '01',
      title: 'Residential Acquisition & Sale',
      desc: 'Curated representation of world-class architectural villas, historic townhouses, and trophy sky penthouses with complete privacy.',
    },
    {
      number: '02',
      title: 'Prime Commercial Advisory',
      desc: 'Institutional-grade corporate headquarters, luxury flagship retail spaces, and creative studio ateliers across prime metropolitan corridors.',
    },
    {
      number: '03',
      title: 'Private Off-Market Vault',
      desc: 'Direct access to unlisted trophy mandates shared exclusively with verified ultra-high-net-worth principals under strict confidentiality.',
    },
    {
      number: '04',
      title: 'Architectural Curation & Valuation',
      desc: 'Comprehensive structural analysis, architectural pedigree verification, and bespoke market valuation modeling.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Our Architectural Heritage
          </span>
          <h1 className="text-4xl sm:text-6xl font-light text-brand-dark tracking-tight mb-4 leading-tight">
            Curating the World's Most Exceptional Architecture.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Founded with a singular commitment: to treat prime real estate not as commodity, but as
            architectural legacy. We connect the world’s most discerning collectors with homes of monumental vision.
          </p>
        </div>
      </section>

      {/* Editorial Split: Philosophy & Photography */}
      <section className="bg-white border-y border-brand-border py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block">
                The Philosophy
              </span>
              <h2 className="text-3xl font-light text-brand-dark tracking-tight leading-snug">
                Space as an Expression of Uncompromising Living
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                At Urban Estates, we believe extraordinary architecture alters how one experiences life.
                From board-formed concrete cantilevered over the Pacific to historic cast-iron spans in
                Manhattan, every estate we represent possesses an unmistakable architectural soul.
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                We reject volume-driven brokerage models. Instead, we maintain an intentionally limited
                mandate roster, ensuring our principals receive bespoke attention, meticulous production,
                and absolute discretion.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border">
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-brand-dark block mb-1">
                    $4.8B+
                  </span>
                  <span className="text-xs uppercase tracking-wider text-brand-muted font-light">
                    Cumulative Transactions
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-brand-dark block mb-1">
                    15 Years
                  </span>
                  <span className="text-xs uppercase tracking-wider text-brand-muted font-light">
                    Private Practice
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-brand-charcoal overflow-hidden border border-brand-border">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
                  alt="Modernist Architectural Estate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-3">
            Comprehensive Advisory Services
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            From cross-border capital repatriation to off-market discreet syndication, our services cater to complex client requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-brand-border hover:border-brand-dark transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-brand-accent block mb-3">
                  {srv.number}
                </span>
                <h3 className="text-xl font-light text-brand-dark tracking-tight mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border/60">
                <Link
                  to="/contact"
                  className="text-xs uppercase tracking-wider font-medium text-brand-dark hover:text-brand-accent transition-colors flex items-center gap-1.5"
                >
                  <span>Inquire for Advisory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Partners & Leadership */}
      <section className="bg-white border-y border-brand-border py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
              The Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-3">
              Senior Private Advisory Desk
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              Decades of experience spanning international law, architectural criticism, and prime real estate brokerage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((partner, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[4/5] bg-brand-charcoal overflow-hidden border border-brand-border mb-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand-accent block mb-1">
                  {partner.hub}
                </span>
                <h4 className="text-lg font-medium text-brand-dark">
                  {partner.name}
                </h4>
                <p className="text-xs text-brand-muted font-light mb-2">
                  {partner.role}
                </p>
                <p className="text-xs text-brand-muted font-light leading-relaxed line-clamp-3">
                  {partner.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium block mb-2">
            Global Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mb-4">
            Four Metropolitan Hubs
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-10">
            Headquartered in New York and Beverly Hills with strategic European and Middle Eastern outposts
            positioned to orchestrate international transfers without delay.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-6 bg-white border border-brand-border">
              <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                New York
              </h4>
              <p className="text-xs text-brand-muted font-light">
                Tribeca Historic District
              </p>
            </div>
            <div className="p-6 bg-white border border-brand-border">
              <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                Beverly Hills
              </h4>
              <p className="text-xs text-brand-muted font-light">
                Wilshire Boulevard
              </p>
            </div>
            <div className="p-6 bg-white border border-brand-border">
              <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                London
              </h4>
              <p className="text-xs text-brand-muted font-light">
                Grosvenor Square, Mayfair
              </p>
            </div>
            <div className="p-6 bg-white border border-brand-border">
              <h4 className="text-sm font-medium uppercase tracking-wider text-brand-dark mb-1">
                Dubai
              </h4>
              <p className="text-xs text-brand-muted font-light">
                DIFC Gate Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

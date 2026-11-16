import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark, Menu, X, ArrowUpRight } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { savedCount, setIsDrawerOpen } = useSaved();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/listings?purpose=buy' },
    { name: 'Rent', path: '/listings?purpose=rent' },
    { name: 'Sell', path: '/sell' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.includes('?')) {
      return location.pathname + location.search === path;
    }
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-brand-border py-4 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-brand-border/50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - Minimal & Editorial */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="group flex items-center gap-3 text-brand-dark focus:outline-none"
          >
            <div className="w-9 h-9 bg-brand-dark text-brand-accent flex items-center justify-center font-semibold text-sm tracking-tighter transition-transform duration-300 group-hover:scale-95">
              <span>UE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-widest text-brand-dark uppercase">
                Urban Estates
              </span>
              <span className="text-[10px] tracking-ultra text-brand-muted uppercase -mt-1 font-light">
                Architectural Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                    active
                      ? 'text-brand-dark font-medium'
                      : 'text-brand-muted hover:text-brand-dark'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Inquiry CTA */}
          <div className="flex items-center gap-4">
            {/* Saved Properties Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 text-brand-dark hover:text-brand-accent transition-colors duration-200 focus:outline-none"
              title="Saved Properties"
              aria-label="View Saved Properties"
            >
              <Bookmark className="w-5 h-5 stroke-[1.6]" />
              {savedCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-dark text-brand-accent text-[10px] font-semibold flex items-center justify-center rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Inquire CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-xs font-medium tracking-wider uppercase hover:bg-brand-charcoal transition-all duration-200 group"
            >
              <span>Schedule Tour</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-dark focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.8]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.8]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-dark text-brand-accent flex items-center justify-center font-semibold text-xs">
                  UE
                </div>
                <span className="font-semibold text-base tracking-widest text-brand-dark uppercase">
                  Urban Estates
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-brand-muted hover:text-brand-dark"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 mt-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`text-lg tracking-wide transition-colors ${
                      active
                        ? 'text-brand-dark font-medium flex items-center justify-between'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-brand-border space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="w-full flex items-center justify-between py-3 px-4 bg-brand-cream border border-brand-border text-sm font-medium text-brand-dark"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-brand-accent" />
                Saved Residences
              </span>
              <span className="text-xs bg-brand-dark text-white px-2 py-0.5 rounded-full">
                {savedCount}
              </span>
            </button>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 py-3 bg-brand-dark text-white text-xs font-medium tracking-wider uppercase"
            >
              <span>Schedule Private Tour</span>
              <ArrowUpRight className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

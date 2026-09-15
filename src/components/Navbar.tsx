import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenBrandModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrandModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'For Brands', href: '#for-brands' },
    { label: 'For Creators', href: '#for-creators' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Categories', href: '#categories' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090D1A]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                <div className="w-full h-full bg-[#090D1A] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xl tracking-tighter bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    N
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                    Nexora
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    India
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide hidden sm:block">
                  Influence That Moves People
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBrandModal}
                className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg"
              >
                Work With Nexora
              </button>

              <a
                href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-lg overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:scale-[1.02] transition-all"
                title="Join as a Creator (Google Form)"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join as a Creator</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500"
              >
                <span>Join</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 left-0 bottom-0 bg-[#0A0E1F] border-b border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/10">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Navigation
                </p>
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Creator Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>For Emerging Indian Creators</span>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Connect directly with D2C and consumer brands for paid campaigns. Free to register.
                </p>
                <a
                  href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Join the Creator Network</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandModal();
                }}
                className="w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 flex items-center justify-center gap-2"
              >
                <span>Work With Nexora (Brands)</span>
              </button>
              <div className="text-center text-[11px] text-slate-500">
                © 2026 Nexora • Bengaluru, Mumbai, Delhi NCR
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

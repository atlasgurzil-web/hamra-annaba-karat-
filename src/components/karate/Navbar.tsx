import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Shield, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: (dojoId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Le Club', href: '#club' },
    { label: 'Nos 4 Dojos', href: '#dojos' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Ceintures', href: '#ceintures' },
    { label: 'Dossier & Tarifs', href: '#tarifs' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-neutral-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/hamra-annaba-logo.png"
              alt="Logo Club Hamra Annaba"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-neutral-900 uppercase" style={{ fontFamily: 'var(--font-syne)' }}>
                  HAMRA <span className="text-[#DC2626]">ANNABA</span>
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                  Fondé en 1944
                </span>
              </div>
              <span className="text-[11px] text-neutral-500 font-medium tracking-wide flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#DC2626]" />
                Section Karaté-Do • حمراء عنابة
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:038000000"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              <span>Annaba</span>
            </a>

            <button
              onClick={() => onOpenRegister()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Inscription • 2 000 DA/m</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenRegister()}
              className="px-2.5 py-1.5 rounded-md bg-[#DC2626] text-white text-xs font-bold"
            >
              2 000 DA
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-neutral-900"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-lg bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Rejoindre la section (2 000 DA/mois)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-neutral-500">
                4 Dojos à Annaba : Chabou • Pont Blanc • El Bouni • Plaine Ouest
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

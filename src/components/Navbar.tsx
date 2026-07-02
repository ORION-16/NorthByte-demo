import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, Calendar, Phone } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface NavbarProps {
  config: RestaurantConfig;
  onBookClick: () => void;
  activeSection: string;
}

export default function Navbar({ config, onBookClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'STORY', id: 'about' },
    { label: 'PHILOSOPHY', id: 'philosophy' },
    { label: 'SIGNATURES', id: 'signatures' },
    { label: 'MENU', id: 'menu' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'CHEF', id: 'chef' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 glass-navbar shadow-2xl' 
            : 'py-6 bg-transparent'
        }`}
        style={{
          '--primary-glow': config.colors.accentGlow,
        } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Link */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2 text-left focus:outline-none"
          >
            <span 
              className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-light text-white"
              style={{ color: '#fff' }}
            >
              {config.logoText}
            </span>
            <span 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: config.colors.primary }}
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative py-1 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none uppercase"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                      style={{ backgroundColor: config.colors.primary }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Call To Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${config.contact.phone}`}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/40 rounded-full transition-all duration-300"
              title="Call Concierge"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onBookClick}
              className="relative px-5 py-2.5 font-mono text-[10px] tracking-widest text-black font-semibold overflow-hidden group rounded-sm shadow-lg transition-all duration-300 focus:outline-none focus:ring-1"
              style={{ 
                backgroundColor: config.colors.primary,
                borderColor: config.colors.primary,
                boxShadow: `0 4px 20px ${config.colors.accentGlow}`
              }}
            >
              {/* Button shimmer hover highlight */}
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                RESERVE NOW
              </span>
            </button>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 font-mono text-[9px] tracking-widest text-black font-semibold rounded-sm shadow-md"
              style={{ backgroundColor: config.colors.primary }}
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/60 rounded-sm focus:outline-none transition-colors duration-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Navigation Panel Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-[73px] left-0 right-0 z-30 lg:hidden glass-navbar shadow-2xl border-b border-gray-800"
          >
            <div className="flex flex-col px-6 py-8 space-y-5">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left py-2 font-mono text-xs tracking-[0.25em] flex items-center justify-between"
                    style={{ color: isActive ? config.colors.primary : '#9CA3AF' }}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: config.colors.primary }}
                      />
                    )}
                  </motion.button>
                );
              })}

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <a 
                  href={`tel:${config.contact.phone}`}
                  className="font-mono text-xs tracking-wider text-gray-400 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {config.contact.phoneFormatted}
                </a>
                <span className="font-mono text-[9px] tracking-widest text-amber-500/80 uppercase">
                  NorthByte Premium
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

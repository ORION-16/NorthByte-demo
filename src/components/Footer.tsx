import React, { useState } from 'react';
import { Mail, ArrowRight, Instagram, Facebook, ShieldCheck, Heart } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface FooterProps {
  config: RestaurantConfig;
  onBookClick: () => void;
}

export default function Footer({ config, onBookClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="footer-suite" 
      className="relative bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-950 to-amber-500/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top block: Newsletter and Core Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          {/* Logo Brand line and pitch */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              {config.logoImage ? (
                <img
                  src={config.logoImage}
                  alt={`${config.name} logo`}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <span className="font-serif text-2xl tracking-[0.2em] font-light text-white uppercase">{config.logoText}</span>
              )}
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.colors.primary }} />
            </div>
            <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed font-light max-w-md">
              A private Michelin-starred dining experience built on biodynamic sourcing, uncompromised scales of seasoning, and award-winning architectural layouts.
            </p>
            {/* Private Dining Highlight */}
            <div className="p-4 bg-white/[0.01] border border-white/5 rounded-sm max-w-sm text-left">
              <span className="font-mono text-[9px] text-amber-500/80 font-semibold block uppercase">// PRIVATE SALON BOOKINGS</span>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Hosting corporate galas or curated sommelier cycles? Contact our desk 48 hours prior to secure the Vault Room.
              </p>
            </div>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-gray-500 uppercase font-semibold">
                THE SENSORY BULLETIN
              </span>
              <h3 className="font-serif text-2xl text-white font-light mt-1">Subscribe for private vintage listings.</h3>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative max-w-xl">
                <input
                  type="email"
                  required
                  placeholder="Enter email to join our private dispatch"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-gray-600 rounded-sm py-4 pl-4 pr-16 text-xs sm:text-sm font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-sm text-black hover:opacity-90 transition-all duration-300 cursor-pointer flex items-center justify-center"
                  style={{ backgroundColor: config.colors.primary }}
                  title="Subscribe Now"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3 max-w-xl">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="font-mono text-xs tracking-wide">
                  Credentials locked. You are now subscribed to the dispatch.
                </span>
              </div>
            )}
            <p className="text-[10px] text-gray-600 font-sans uppercase tracking-wider">
              WE VALUE Patrons' SECRECY. ZERO NOISE DISPATCHES SENT.
            </p>
          </div>
        </div>

        {/* Middle Block: Quick links rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-left border-b border-white/5">
          {/* Quick Nav */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-4">MAP INDEX</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-sans">
              <li><a href="#hero" className="hover:text-white transition-colors duration-300 uppercase">Home Canopy</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-300 uppercase">About Story</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors duration-300 uppercase">Interactive Menu</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors duration-300 uppercase">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Core Contacts */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-4">CORRESPONDENCE</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-sans">
              <li><a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors duration-300">{config.contact.phoneFormatted}</a></li>
              <li><a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors duration-300 overflow-hidden text-ellipsis block">{config.contact.email}</a></li>
              <li><a href="#booking-desk" onClick={onBookClick} className="hover:text-white transition-colors duration-300">Desk Booking</a></li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-4">DISCLAIMERS</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-sans">
              <li><span className="hover:text-white transition-colors duration-300 cursor-pointer">PRIVACY CLAUSE</span></li>
              <li><span className="hover:text-white transition-colors duration-300 cursor-pointer">TERMS OF PATRONAGE</span></li>
              <li><span className="hover:text-white transition-colors duration-300 cursor-pointer">COOKIES POLICY</span></li>
            </ul>
          </div>

          {/* Social connections */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-4">SOCIAL DIGEST</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-sans">
              <li>
                <a href={config.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 uppercase">
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram Feed
                </a>
              </li>
              <li>
                <a href={config.contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 uppercase">
                  <Facebook className="w-3.5 h-3.5" />
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Block: Agency details & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 font-mono gap-6">
          <div className="flex items-center gap-1 text-center md:text-left">
            <span>© {currentYear} {config.name.toUpperCase()}. ALL RESERVATIONS PROTECTED.</span>
          </div>

          {/* Clean agency reference promotion */}
          <div className="flex items-center gap-1">
            <span>DIGITAL ARCHITECTURE DESIGNED BY</span>
            <a 
              href="#rebranding-playground"
              className="text-white hover:text-amber-400 transition-colors duration-300 font-semibold flex items-center gap-1 uppercase"
            >
              NORTHBYTE
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

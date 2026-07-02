import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Calendar, ChevronUp, Clock } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface StickyActionsProps {
  config: RestaurantConfig;
  onBookClick: () => void;
}

export default function StickyActions({ config, onBookClick }: StickyActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    const encodedMsg = encodeURIComponent(config.contact.whatsappMessage);
    const url = `https://wa.me/${config.contact.whatsapp}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Action Elements (Bottom Right Area) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        
        {/* Back To Top Arrow (reveals dynamically) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              key="scroll-btn"
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="p-3 bg-black/80 hover:bg-black text-white rounded-full border border-white/10 hover:border-white/20 shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none"
              title="Scroll back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button with ring pulse */}
        <motion.button
          onClick={handleWhatsAppClick}
          className="relative p-4 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden border border-emerald-500/20"
          style={{
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          title="Direct WhatsApp Concierge"
        >
          <MessageSquare className="w-5 h-5 fill-white/10" />
          
          {/* Pulsing ring indicator */}
          <span className="absolute inset-0 rounded-full border border-emerald-400 animate-ping opacity-30 scale-125 pointer-events-none" />
        </motion.button>

      </div>

      {/* Dynamic bottom action bar for tablet/mobile viewers */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-[#030712]/90 backdrop-blur-md border-t border-white/5 flex items-center gap-3">
        <button
          onClick={onBookClick}
          className="flex-grow py-3.5 px-4 font-mono text-[10px] tracking-widest font-semibold text-black rounded-sm shadow-lg flex items-center justify-center gap-2"
          style={{ backgroundColor: config.colors.primary }}
        >
          <Calendar className="w-4 h-4" />
          RESERVE TABLE SEAT
        </button>
        
        <button
          onClick={handleWhatsAppClick}
          className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-emerald-400 flex items-center justify-center"
          title="WhatsApp Concierge"
        >
          <MessageSquare className="w-5 h-5 fill-emerald-400/10" />
        </button>
      </div>
    </>
  );
}

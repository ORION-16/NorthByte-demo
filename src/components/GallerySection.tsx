import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { RestaurantConfig, GalleryItem } from '../types';

interface GallerySectionProps {
  config: RestaurantConfig;
}

export default function GallerySection({ config }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ambience' | 'dishes' | 'behind-the-scenes'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { label: 'ALL IMAGES', value: 'all' as const },
    { label: 'AMBIENCE & CELLAR', value: 'ambience' as const },
    { label: 'CULINARY MASTERPIECES', value: 'dishes' as const },
    { label: 'BEHIND THE SCENES', value: 'behind-the-scenes' as const },
  ];

  // Filter gallery items
  const filteredItems = config.gallery.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  // Cycle handlers for lightbox
  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <section 
      id="gallery" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              VISUAL CHRONOLOGY
            </span>
            <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light mb-6">
            The Sensory <span className="italic">Gallery.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed font-light">
            An atmospheric chronicle of our architectural layouts, plated crafts, and dedicated culinary rituals. Hover to inspect, click to immerse.
          </p>
        </div>

        {/* Gallery Filter Nav Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => {
            const active = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setLightboxIndex(null); // safety reset
                }}
                className={`px-5 py-2.5 font-mono text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase rounded-sm border transition-all duration-300 focus:outline-none cursor-pointer ${
                  active 
                    ? 'bg-white text-black border-white' 
                    : 'bg-black/30 text-gray-400 border-white/5 hover:border-white/10'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Elegant Visual Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              // Create dynamic spans to form a gorgeous asymmetric masonry layout!
              const isLarge = idx % 4 === 0;
              const isTall = idx % 3 === 1;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative overflow-hidden rounded-sm bg-gray-900 border border-white/5 cursor-pointer shadow-xl ${
                    isLarge 
                      ? 'lg:col-span-2 lg:row-span-1' 
                      : isTall 
                        ? 'lg:row-span-2' 
                        : ''
                  }`}
                >
                  {/* Photo background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-108"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Gradient overlay reveals on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  {/* Absolute Center Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="p-3 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md">
                      <Maximize2 className="w-5 h-5 text-gray-300" />
                    </div>
                  </div>

                  {/* Bottom static layout details */}
                  <div className="absolute bottom-6 left-6 right-6 text-left transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span 
                      className="font-mono text-[8px] tracking-[0.2em] uppercase font-semibold"
                      style={{ color: config.colors.primary }}
                    >
                      {item.category.replace('-', ' ')}
                    </span>
                    <p className="font-serif text-base sm:text-lg text-white mt-1 leading-snug drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </p>
                  </div>

                  {/* Tiny aesthetic corner indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* IMMERSIVE LIGHTBOX OVERLAY */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-10"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white border border-white/10 transition-colors duration-300 focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Central Box Carousel */}
              <div className="relative max-w-5xl w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
                
                {/* Left cycling control */}
                <button
                  onClick={showPrev}
                  className="absolute left-2 sm:-left-12 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-colors duration-300 focus:outline-none cursor-pointer z-10"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* High-res Image display */}
                <motion.div 
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-full max-h-full rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black"
                  onClick={(e) => e.stopPropagation()} // block clicks close overlay
                >
                  <img 
                    src={filteredItems[lightboxIndex].image} 
                    alt={filteredItems[lightboxIndex].caption}
                    className="max-w-full max-h-[65vh] sm:max-h-[75vh] object-contain block mx-auto select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Fine Caption display at the bottom of the image card */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-left">
                    <span 
                      className="font-mono text-[9px] tracking-widest uppercase font-semibold block"
                      style={{ color: config.colors.primary }}
                    >
                      {filteredItems[lightboxIndex].category.replace('-', ' ')}
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white mt-1 font-light max-w-3xl">
                      {filteredItems[lightboxIndex].caption}
                    </p>
                  </div>
                </motion.div>

                {/* Right cycling control */}
                <button
                  onClick={showNext}
                  className="absolute right-2 sm:-right-12 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-colors duration-300 focus:outline-none cursor-pointer z-10"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

              {/* Status Counter */}
              <div className="mt-6 font-mono text-xs tracking-widest text-gray-500" onClick={(e) => e.stopPropagation()}>
                {lightboxIndex + 1} OF {filteredItems.length} PHOTO RECORDS
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface TestimonialsProps {
  config: RestaurantConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto rotate timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % config.reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [config.reviews.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? config.reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % config.reviews.length);
  };

  return (
    <section 
      id="reviews" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Dynamic background gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-gray-950 to-amber-500/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* Section Head */}
        <div className="flex flex-col items-center justify-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            PATRON TESTIMONIALS
          </span>
          <div className="h-[1.5px] w-8 my-3" style={{ backgroundColor: config.colors.primary }} />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light">
            Critiques & <span className="italic">Accolades.</span>
          </h2>
        </div>

        {/* Testimonial Active Display Card with Framer Motion slide effects */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full text-center"
            >
              {/* Massive ambient decorative quotes */}
              <Quote 
                className="w-16 h-16 mx-auto mb-8 opacity-10"
                style={{ color: config.colors.primary }}
              />

              {/* Star Rating Grid */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: config.reviews[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Core review comment text */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed max-w-4xl mx-auto">
                "{config.reviews[activeIdx].comment}"
              </blockquote>

              {/* Patron details layout */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Circular Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                  <img 
                    src={config.reviews[activeIdx].avatar} 
                    alt={config.reviews[activeIdx].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="text-left sm:text-left">
                  <cite className="not-italic font-serif text-base text-white font-medium block">
                    {config.reviews[activeIdx].name}
                  </cite>
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-gray-500 uppercase block mt-0.5">
                    {config.reviews[activeIdx].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Slide controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Bullet Indicators */}
          <div className="flex gap-2">
            {config.reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
                style={{ 
                  backgroundColor: i === activeIdx ? config.colors.primary : '#374151',
                  transform: i === activeIdx ? 'scale(1.3)' : 'scale(1)'
                }}
                aria-label={`Go to Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

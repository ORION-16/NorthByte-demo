import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ChefHat, Play } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface HeroProps {
  config: RestaurantConfig;
  onBookClick: () => void;
  onMenuClick: () => void;
}

export default function Hero({ config, onBookClick, onMenuClick }: HeroProps) {
  const [currentBgIdx, setCurrentBgIdx] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Carousel background image timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIdx((prev) => (prev + 1) % config.hero.backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [config.hero.backgroundImages]);

  // Subtle interactive mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // max 20px tilt
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Image Carousel with Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBgIdx}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.6, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${config.hero.backgroundImages[currentBgIdx]})`,
            }}
          />
        </AnimatePresence>
        
        {/* Cinematic black and radial-gradient vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-gray-950/80 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 via-transparent to-gray-950/70 z-0 pointer-events-none" />
      </div>

      {/* Luxury radial golden glow tracking behind content */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 mix-blend-screen pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{
          background: `radial-gradient(circle, ${config.colors.primary} 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`
        }}
      />

      {/* Main Copy Wrapper */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
        }}
      >
        {/* Fine subhead badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2.5 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
        >
          <ChefHat className="w-4 h-4" style={{ color: config.colors.primary }} />
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-gray-300 uppercase">
            A CULINARY HAVEN PREVIEWED BY NORTHBYTE
          </span>
        </motion.div>

        {/* Dynamic Massive Display Heading with clip reveals */}
        <h1 className="flex flex-col mb-6 select-none">
          <span className="overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] font-light leading-none text-white text-shadow-xl"
            >
              {config.hero.titleLine1}
            </motion.span>
          </span>
          <span className="overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] italic font-extralight text-transparent bg-clip-text leading-none py-1"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 40%, ${config.colors.primary} 100%)`
              }}
            >
              {config.hero.titleLine2}
            </motion.span>
          </span>
        </h1>

        {/* Refined subtext with maximum characters restriction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-sans tracking-wide leading-relaxed font-light mb-10"
        >
          {config.hero.subtitle}
        </motion.p>

        {/* Action button container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* Primary Action Button (Reservation) */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto relative px-8 py-4 font-mono text-[11px] tracking-widest font-semibold text-black overflow-hidden group rounded-sm shadow-2xl transition-all duration-300 cursor-pointer"
            style={{ 
              backgroundColor: config.colors.primary,
              boxShadow: `0 8px 30px ${config.colors.accentGlow}`
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-white/25 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative flex items-center justify-center gap-2">
              {config.hero.ctaPrimaryText}
            </span>
          </button>

          {/* Secondary Action Button (Menu view) */}
          <button
            onClick={onMenuClick}
            className="w-full sm:w-auto relative px-8 py-4 font-mono text-[11px] tracking-widest font-semibold text-white overflow-hidden group rounded-sm bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
          >
            <span className="relative flex items-center justify-center gap-2.5">
              <Play className="w-3 h-3 fill-white" />
              {config.hero.ctaSecondaryText}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Interactive elements: Soft badges in margins */}
      <div className="absolute bottom-12 left-12 hidden xl:flex items-center gap-4 z-10 pointer-events-none">
        <div className="h-10 w-[1px] bg-white/20" />
        <div className="text-left font-mono">
          <div className="text-[10px] text-gray-500 tracking-widest uppercase">Gastronomic Rating</div>
          <div className="text-sm font-semibold tracking-wider text-white">★★★ MICHELIN</div>
        </div>
      </div>

      {/* Beautiful Animated Down Arrow scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={onMenuClick}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center group"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors duration-300 mb-2 uppercase">
          SCROLL TO DISCOVER
        </span>
        <ArrowDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" />
      </motion.div>
    </section>
  );
}

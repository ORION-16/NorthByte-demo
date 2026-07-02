import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  restaurantName: string;
  onComplete: () => void;
}

export default function Preloader({ restaurantName, onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 800); // Allow exit animations to complete
          }, 600);
          return 100;
        }
        // Smooth random increments to feel realistic
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="preloader-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]"
          exit={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Ambient subtle glowing backdrop */}
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent pointer-events-none" />

          {/* Core content wrapper */}
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Agency branding line */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-8 font-mono text-[10px] tracking-[0.3em] text-amber-500/60 uppercase"
            >
              NorthByte Creative Showcase
            </motion.div>

            {/* Restaurant name reveal */}
            <h1 className="overflow-hidden mb-2 py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="block font-serif text-4xl sm:text-5xl md:text-6xl tracking-[0.1em] text-white font-light"
              >
                {restaurantName.toUpperCase()}
              </motion.span>
            </h1>

            {/* Elegant sub line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] w-16 bg-white my-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-mono text-[11px] tracking-[0.2em] text-gray-400 uppercase"
            >
              FINE CULINARY REVELATION
            </motion.p>

            {/* Progress percentage overlay */}
            <div className="mt-16 h-12 flex items-baseline justify-center">
              <motion.span 
                className="font-serif text-6xl md:text-7xl font-extralight text-white opacity-90 tracking-tighter"
                key={progress}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
              >
                {progress}
              </motion.span>
              <span className="font-serif text-xl font-light text-amber-500 ml-1">%</span>
            </div>

            {/* Luxury sleek progress bar */}
            <div className="mt-4 w-40 h-[1px] bg-gray-800 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-amber-200"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Elegant footer note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-8 font-mono text-[9px] tracking-widest text-gray-500"
          >
            ESTABLISHED MULTI-EXPERIENCE TEMPLATE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

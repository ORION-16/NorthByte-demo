import { motion } from 'motion/react';
import { Calendar, Flame, Star, Leaf } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface SignatureDishesProps {
  config: RestaurantConfig;
  onBookClick: () => void;
}

export default function SignatureDishes({ config, onBookClick }: SignatureDishesProps) {
  return (
    <section 
      id="signatures" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-950 to-amber-500/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                GASTRONOMY HIGHLIGHTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light">
              Our Signature <span className="italic" style={{ color: config.colors.primary }}>Creations.</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400 font-sans text-xs sm:text-sm leading-relaxed font-light text-left md:text-right">
            Handpicked specialties that embody our culinary director's philosophy: extreme precision, sensory contrast, and raw agricultural focus.
          </p>
        </div>

        {/* Signatures List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {config.signatureDishes.map((dish, idx) => {
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group flex flex-col justify-between h-full bg-[#080b13] border border-white/5 hover:border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-300"
              >
                
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${dish.image})` }}
                  />
                  
                  {/* Visual gradient filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />

                  {/* Top floating indicators */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    {/* Organic or Veg indicator badge */}
                    <span className="flex items-center gap-1.5 px-3 py-1 font-mono text-[9px] tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10 uppercase">
                      {dish.isVeg ? (
                        <>
                          <Leaf className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400/20" />
                          <span className="text-emerald-400">VEG</span>
                        </>
                      ) : (
                        <>
                          <Flame className="w-2.5 h-2.5 text-amber-500 fill-amber-500/20" />
                          <span className="text-gray-300">NON-VEG</span>
                        </>
                      )}
                    </span>

                    {/* Popular Star */}
                    {dish.isPopular && (
                      <span className="p-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-amber-500/20 animate-pulse" />
                      </span>
                    )}
                  </div>

                  {/* Bottom overlay: Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-black/80 border border-white/10 px-4 py-2 rounded-sm backdrop-blur-md">
                    <span className="font-mono text-sm font-semibold tracking-wide text-white">
                      {dish.price}
                    </span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between text-left">
                  <div className="space-y-3">
                    {/* Tag list */}
                    <div className="flex flex-wrap gap-2">
                      {dish.tags.map(tag => (
                        <span 
                          key={tag}
                          className="font-mono text-[8px] sm:text-[9px] tracking-widest text-amber-500/80 uppercase font-semibold"
                        >
                          // {tag}
                        </span>
                      ))}
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide group-hover:text-amber-100 transition-colors duration-300">
                      {dish.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>

                  {/* Bottom Quick-Action Reservation button */}
                  <div className="mt-8 pt-6 border-t border-white/[0.03] flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">
                      PRESTIGE PAIRINGS READY
                    </span>
                    <button
                      onClick={onBookClick}
                      className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      ORDER SPECIFIC
                      <Calendar className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

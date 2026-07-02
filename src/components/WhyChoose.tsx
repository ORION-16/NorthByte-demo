import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { RestaurantConfig } from '../types';

interface WhyChooseProps {
  config: RestaurantConfig;
}

// Simple helper to safely map icon string to Lucide React component
function SafeIcon({ name, color, className }: { name: string; color: string; className?: string }) {
  // Fallback icon in case named icon is missing
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Compass;
  return <IconComponent style={{ color }} className={className} />;
}

export default function WhyChoose({ config }: WhyChooseProps) {
  return (
    <section 
      id="philosophy" 
      className="relative py-24 sm:py-32 bg-[#050811]"
    >
      {/* Background soft glowing orb */}
      <div 
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: config.colors.primary }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Category Label */}
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            OUR THREE PILLARS
          </span>
          <div className="h-[1.5px] w-8 my-3" style={{ backgroundColor: config.colors.primary }} />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light mb-16">
          Uncompromised standards, <span className="italic">always.</span>
        </h2>

        {/* 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.whyChooseUs.map((pillar, idx) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative p-8 md:p-10 rounded-sm glass-panel border border-white/5 hover:border-white/10 transition-all duration-300 text-left flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Micro hovering subtle background glowing radial effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${config.colors.accentGlow} 0%, transparent 60%)`
                  }}
                />

                <div>
                  {/* Icon wrapper with glowing background circles */}
                  <div 
                    className="relative w-12 h-12 rounded-sm flex items-center justify-center mb-8"
                    style={{ backgroundColor: `${config.colors.primary}10` }}
                  >
                    <SafeIcon name={pillar.iconName} color={config.colors.primary} className="w-5 h-5" />
                    
                    {/* Ring glow hover */}
                    <div 
                      className="absolute inset-0 rounded-sm border border-transparent group-hover:border-white/10 scale-110 transition-all duration-500 pointer-events-none"
                      style={{ borderColor: `${config.colors.primary}20` }}
                    />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide font-light mb-4 group-hover:text-amber-100 transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Pillar description */}
                  <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Aesthetic tiny number index */}
                <div className="mt-12 flex items-center justify-between pt-4 border-t border-white/[0.03]">
                  <span className="font-mono text-[9px] tracking-widest text-gray-600">
                    PILLAR 0{idx + 1}
                  </span>
                  <span 
                    className="w-1 h-1 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"
                    style={{ backgroundColor: config.colors.primary }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elegant disclaimer note below */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 font-mono text-[10px] tracking-widest text-gray-500"
        >
          CURATED FOR GOURMANDS BY NORTHBYTE CREATIVE
        </motion.div>

      </div>
    </section>
  );
}

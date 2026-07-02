import { motion } from 'motion/react';
import { Calendar, Award, Star, BookOpen, Quote } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface ChefStoryProps {
  config: RestaurantConfig;
}

export default function ChefStory({ config }: ChefStoryProps) {
  return (
    <section 
      id="chef" 
      className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden"
    >
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-gray-900/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section title */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            THE ARCHITECTS OF FLAVOR
          </span>
        </div>

        {/* Two-Column Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait & Signature Quote */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/5 shadow-2xl group bg-gray-900"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${config.chef.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-85" />

              {/* Accolade badge overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-mono text-[9px] text-gray-300 tracking-widest uppercase">MASTER SERIES</span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 text-left">
                <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">DIRECTOR OF GASTRONOMY</p>
                <h3 className="font-serif text-2xl text-white font-light tracking-wide mt-1">{config.chef.name}</h3>
              </div>
            </motion.div>

            {/* Signature Cursive Font layout */}
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">OFFICIAL AUTHENTICITY</span>
                <p 
                  className="font-serif text-3xl italic tracking-widest text-gray-300 mt-2 font-extralight select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {config.chef.name}
                </p>
              </div>
              <div className="h-[1px] w-24 bg-gray-800" />
            </div>
          </div>

          {/* Right Column: Narrative & Beautiful Timeline */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight tracking-wide">
                Crafting culinary legacies <br />
                <span className="italic" style={{ color: config.colors.primary }}>one ingredient at a time.</span>
              </h3>
              <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                {config.chef.bio}
              </p>
            </div>

            {/* Career Milestones vertical timeline */}
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-800">
              {config.chef.milestones.map((milestone, idx) => {
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.8 }}
                    className="flex gap-6 relative"
                  >
                    {/* Glowing circular node */}
                    <div 
                      className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 z-10 bg-[#050811]"
                      style={{ 
                        borderColor: idx === 2 ? config.colors.primary : '#1f2937',
                      }}
                    >
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ 
                          backgroundColor: idx === 2 ? config.colors.primary : '#4b5563',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 pt-0.5">
                      <div className="flex items-center gap-3">
                        <span 
                          className="font-mono text-[11px] font-semibold tracking-widest px-2.5 py-0.5 rounded-sm border"
                          style={{ 
                            color: config.colors.primary,
                            borderColor: `${config.colors.primary}20`,
                            backgroundColor: `${config.colors.primary}05`
                          }}
                        >
                          {milestone.year}
                        </span>
                        <h4 className="font-serif text-lg text-white font-light tracking-wide">
                          {milestone.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

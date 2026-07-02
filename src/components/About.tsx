import { motion } from 'motion/react';
import { Quote, Award, Sparkles, Flame } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface AboutProps {
  config: RestaurantConfig;
}

export default function About({ config }: AboutProps) {
  const achievements = [
    {
      id: 'ach-1',
      icon: Award,
      val: '3',
      label: 'MICHELIN STARS',
      desc: 'Consecutive annual ratings since inception'
    },
    {
      id: 'ach-2',
      icon: Flame,
      val: '100%',
      label: 'ORGANIC INGREDIENTS',
      desc: 'Sourced purely from local biodynamic farms'
    },
    {
      id: 'ach-3',
      icon: Sparkles,
      val: '450+',
      label: 'RARE VINTAGES',
      desc: 'Sourced from legendary historic cellars'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-r from-gray-900/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            OUR HERITAGE
          </span>
        </div>

        {/* Major Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide font-light mb-16 leading-tight">
          Where culinary alchemy meets <br />
          <span className="italic" style={{ color: config.colors.primary }}>uncompromising design.</span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Story narrative & quote */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 md:p-10 rounded-sm glass-panel border-l-2"
              style={{ borderLeftColor: config.colors.primary }}
            >
              <Quote className="w-10 h-10 mb-6 opacity-30" style={{ color: config.colors.primary }} />
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-100 font-light italic leading-relaxed">
                "{config.chef.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-gray-600" />
                <span className="font-mono text-[11px] tracking-widest text-gray-400 uppercase">
                  Chef {config.chef.name}, Culinary Director
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed space-y-6 font-light"
            >
              <p>
                At {config.name}, we believe dining is a multi-sensory symphony. Every plate represents an intricate architectural balance: combining centuries of culinary tradition with pioneering techniques to translate raw ingredients into deep, memorable emotions.
              </p>
              <p>
                This template, designed with meticulous precision by NorthByte, represents the zenith of restaurant presentation. It guarantees that the refined craftsmanship in your kitchen is reflected with absolute fidelity on the screens of every potential client.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Multi-Image Showcase & Stats */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Main Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/5 shadow-2xl group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${config.gallery?.[1]?.image || config.gallery?.[0]?.image || config.hero.backgroundImages?.[0]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-90" />
              
              {/* Micro interactive text badge */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="font-mono text-[9px] tracking-[0.2em] text-gray-400 uppercase">SIGNATURE PRESENTATION</span>
                <p className="font-serif text-lg text-white mt-1">Sculpted Truffle Gastronomy</p>
              </div>
            </motion.div>

            {/* Overlapping secondary decorative card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 hidden sm:flex flex-col p-6 rounded-sm glass-panel w-52 text-left border border-white/5"
            >
              <span className="font-serif text-4xl font-light text-white" style={{ color: config.colors.primary }}>
                08
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gray-400 mt-2 uppercase">
                EXCLUSIVE SEATS
              </span>
              <p className="text-[11px] text-gray-500 font-sans mt-1">
                Ensuring raw focus on every single gourmet patron.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Achievements Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/5">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="flex items-start gap-4 p-6 rounded-sm bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 border border-white/[0.02]"
              >
                <div 
                  className="p-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${config.colors.primary}10` }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: config.colors.primary }} />
                </div>
                <div className="text-left">
                  <div className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
                    {item.val}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-gray-400 mt-1 uppercase">
                    {item.label}
                  </div>
                  <p className="text-xs text-gray-500 font-sans mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

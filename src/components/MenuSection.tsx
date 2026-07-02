import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Leaf, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { RestaurantConfig, DishItem } from '../types';
import logoImage from '../../assets/logo.png';

interface MenuSectionProps {
  config: RestaurantConfig;
  onExpressInterest: (dishName: string) => void;
}

export default function MenuSection({ config, onExpressInterest }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts' | 'drinks'>('starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const tabs: { label: string; value: typeof activeTab }[] = [
    { label: 'STARTERS', value: 'starters' },
    { label: 'MAINS', value: 'mains' },
    { label: 'DESSERTS', value: 'desserts' },
    { label: 'ELIXIRS & DRINKS', value: 'drinks' },
  ];

  // Filtering Logic
  const filteredDishes = useMemo(() => {
    return config.menu.filter((dish) => {
      // 1. Tab check
      if (dish.category !== activeTab) return false;

      // 2. Search check
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesTag = dish.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }

      // 3. Diet check
      if (dietFilter === 'veg' && !dish.isVeg) return false;
      if (dietFilter === 'non-veg' && dish.isVeg) return false;

      return true;
    });
  }, [config.menu, activeTab, searchQuery, dietFilter]);

  return (
    <section 
      id="menu" 
      className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              THE FULL LEDGER
            </span>
            <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light mb-6">
            Explore the Culinary <span className="italic">Inventory.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed font-light">
            Each recipe represents a careful equation of local biodynamic agriculture and classical technique. Filter by category, dietary preferences, or search specifically.
          </p>
        </div>

        {/* Search & Filter Controls Hub */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-6 items-center justify-between p-4 rounded-sm glass-panel border border-white/5 shadow-xl">
          {/* Text Search Input */}
          <div className="relative w-full md:w-80">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
              <img
                src={logoImage}
                alt="North Byte logo"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              placeholder="Search recipes, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3 pl-14 pr-4 text-sm font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
            />
          </div>

          {/* Diet Toggle Pills */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto justify-start md:justify-end">
            {(['all', 'veg', 'non-veg'] as const).map((diet) => {
              const active = dietFilter === diet;
              return (
                <button
                  key={diet}
                  onClick={() => setDietFilter(diet)}
                  className={`px-4 py-2 font-mono text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase rounded-sm border transition-all duration-300 focus:outline-none cursor-pointer ${
                    active 
                      ? 'bg-white text-black border-white' 
                      : 'bg-black/30 text-gray-400 border-white/5 hover:border-white/10'
                  }`}
                >
                  {diet === 'all' && 'ALL DIETS'}
                  {diet === 'veg' && '🟢 VEGETARIAN'}
                  {diet === 'non-veg' && '🥩 NON-VEG'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabs Desktop navigation row */}
        <div className="flex flex-wrap justify-center border-b border-white/5 mb-16 max-w-3xl mx-auto">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setSearchQuery(''); // reset search on tab click for standard UX
                }}
                className="relative px-6 py-4 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-gray-400 hover:text-white transition-colors duration-300 uppercase focus:outline-none cursor-pointer"
              >
                {tab.label}
                {isSelected && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                    style={{ backgroundColor: config.colors.primary }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dishes Showcase Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + dietFilter + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredDishes.length > 0 ? (
                filteredDishes.map((dish) => {
                  return (
                    <motion.div
                      key={dish.id}
                      layout
                      className="group flex flex-col sm:flex-row items-center gap-6 p-6 rounded-sm bg-[#080b13] border border-white/[0.03] hover:border-white/10 transition-all duration-300"
                    >
                      {/* Image Frame */}
                      <div className="relative w-full sm:w-36 aspect-square rounded-sm overflow-hidden bg-gray-900 shrink-0">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                          style={{ backgroundImage: `url(${dish.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        
                        {/* Diet Micro circle inside image corner */}
                        <div className="absolute top-2 left-2 p-1 rounded-full bg-black/60 backdrop-blur-md">
                          {dish.isVeg ? (
                            <Leaf className="w-2.5 h-2.5 text-emerald-400" />
                          ) : (
                            <Flame className="w-2.5 h-2.5 text-amber-500" />
                          )}
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="flex-grow text-left flex flex-col justify-between h-full w-full">
                        <div className="space-y-2">
                          <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-serif text-lg text-white font-light group-hover:text-amber-100 transition-colors duration-300">
                              {dish.name}
                            </h3>
                            <span className="font-mono text-sm font-semibold text-gray-300 shrink-0">
                              {dish.price}
                            </span>
                          </div>

                          {/* Subtags list */}
                          <div className="flex flex-wrap gap-1.5">
                            {dish.tags.map(t => (
                              <span key={t} className="font-mono text-[8px] tracking-widest text-amber-500/70 uppercase">
                                #{t}
                              </span>
                            ))}
                          </div>

                          <p className="text-xs text-gray-400 font-sans leading-relaxed font-light">
                            {dish.description}
                          </p>
                        </div>

                        {/* Interactive Express Interest */}
                        <div className="mt-4 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                          <span className="font-mono text-[8px] tracking-widest text-gray-500">
                            MICHELIN FORMULATION
                          </span>
                          <button
                            onClick={() => onExpressInterest(dish.name)}
                            className="font-mono text-[9px] tracking-widest text-white hover:text-amber-400 font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer group/btn"
                          >
                            SELECT FOR BOOKING
                            <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-2 py-16 text-center">
                  <div className="w-12 h-12 rounded-full border border-dashed border-gray-700 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="font-serif text-lg text-gray-400 font-light">No corresponding recipes found</p>
                  <p className="text-xs text-gray-600 font-mono mt-2 uppercase tracking-widest">TRY TO CLEAR DIET OR QUERY FILTERS</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

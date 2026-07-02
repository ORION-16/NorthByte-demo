import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Sparkles, Palette, Check, RotateCcw, ShieldCheck, HelpCircle, Code, DollarSign } from 'lucide-react';
import { RestaurantConfig } from '../types';
import { ELEGANT_DARK_CONFIG, L_ETOILE_CONFIG, SAKURA_CONFIG, VELOCE_CONFIG } from '../config/restaurant.config';

interface ThemeSelectorProps {
  currentConfig: RestaurantConfig;
  onSelectPreset: (preset: RestaurantConfig) => void;
  onCustomNameChange: (newName: string) => void;
}

export default function ThemeSelector({ currentConfig, onSelectPreset, onCustomNameChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePresetId, setActivePresetId] = useState(currentConfig.id);
  const [customName, setCustomName] = useState(currentConfig.name);

  const presets = [
    {
      id: 'elegant_dark',
      config: ELEGANT_DARK_CONFIG,
      name: "Elegant Dark (NorthByte)",
      style: 'Cobalt Blue & Slate Obsidian',
      colorHex: '#2563eb'
    },
    {
      id: 'letoile',
      config: L_ETOILE_CONFIG,
      name: "L'Étoile Fine Dining",
      style: 'Gold & Obsidian (French)',
      colorHex: '#D4AF37'
    },
    {
      id: 'sakura',
      config: SAKURA_CONFIG,
      name: "Sakura Kyoto",
      style: 'Crimson & Zen Black (Japanese)',
      colorHex: '#E11D48'
    },
    {
      id: 'veloce',
      config: VELOCE_CONFIG,
      name: "Veloce Trattoria",
      style: 'Emerald & Tuscan Slate (Italian)',
      colorHex: '#10B981'
    }
  ];

  const handlePresetClick = (preset: typeof presets[0]) => {
    setActivePresetId(preset.id);
    onSelectPreset(preset.config);
    setCustomName(preset.config.name);
  };

  const handleNameInput = (val: string) => {
    setCustomName(val);
    onCustomNameChange(val);
  };

  return (
    <>
      {/* Floating Toggle Pin */}
      <div className="fixed bottom-24 left-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer border border-white/15 overflow-hidden group"
          style={{
            background: 'rgba(3, 7, 18, 0.8)',
            backdropFilter: 'blur(16px)',
            boxShadow: `0 4px 30px ${currentConfig.colors.accentGlow}`
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Subtle spinning cog background effect */}
          <Settings className="w-5 h-5 animate-spin-slow group-hover:text-amber-400 transition-colors duration-300" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </motion.button>
      </div>

      {/* Slide-out Control Panel Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 bottom-0 left-0 z-50 w-80 sm:w-96 bg-[#030712]/95 backdrop-blur-2xl border-r border-white/5 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="space-y-6">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-amber-500 font-semibold uppercase">
                    NORTHBYTE PRODUCTS
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mt-1">Rebranding Playground</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md hover:bg-white/5 border border-white/5 text-gray-400 hover:text-white font-mono text-xs cursor-pointer focus:outline-none"
                >
                  CLOSE
                </button>
              </div>

              {/* Pitch block for the potential restaurant client */}
              <div className="p-4 rounded-sm bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/15 text-left space-y-2">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-mono text-[9px] tracking-wider font-semibold uppercase">DEMO CAPABILITY</span>
                </div>
                <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                  We built this template entirely <strong>config-driven</strong>. Swapping one text file instantly modifies menus, pricing, chef milestones, map locations, and color arrays.
                </p>
              </div>

              {/* Preset selection buttons */}
              <div className="space-y-3">
                <label className="block font-mono text-[9px] tracking-widest text-gray-400 uppercase font-semibold text-left">
                  SELECT RESTAURANT PRESET
                </label>
                <div className="space-y-2">
                  {presets.map((preset) => {
                    const active = activePresetId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => handlePresetClick(preset)}
                        className={`w-full p-3.5 rounded-sm border text-left flex items-center justify-between transition-all duration-300 focus:outline-none cursor-pointer ${
                          active 
                            ? 'bg-white/[0.03] border-white' 
                            : 'bg-black/40 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <div>
                          <p className="font-serif text-sm text-white font-medium">{preset.name}</p>
                          <span className="font-mono text-[9px] text-gray-500 uppercase mt-0.5 block">{preset.style}</span>
                        </div>
                        {/* Selected Indicator icon */}
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300"
                          style={{ 
                            borderColor: active ? preset.colorHex : '#1f2937',
                            backgroundColor: active ? `${preset.colorHex}20` : 'transparent'
                          }}
                        >
                          {active && <Check className="w-3.5 h-3.5" style={{ color: preset.colorHex }} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mock CMS live editing input box */}
              <div className="space-y-2 text-left">
                <label className="block font-mono text-[9px] tracking-widest text-gray-400 uppercase font-semibold">
                  LIVE RESTAURANT NAME (TEST THE REBRAND)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => handleNameInput(e.target.value)}
                    placeholder="Type custom name..."
                    className="w-full bg-black/50 border border-white/5 focus:border-gray-700 rounded-sm py-2.5 px-4 text-xs font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
                  />
                </div>
                <span className="block text-[9px] text-gray-500 font-sans uppercase tracking-wider">
                  TYPING ABOVE UPDATES LOGOS AND LABELS ACROSS ALL SECTIONS INSTANTLY.
                </span>
              </div>

              {/* NorthByte Commercial value blocks */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <label className="block font-mono text-[9px] tracking-widest text-gray-400 uppercase font-semibold text-left">
                  COMMERCIAL ESTIMATES
                </label>
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 bg-black/40 border border-white/5 rounded-sm">
                    <span className="font-mono text-[8px] text-gray-500 block uppercase">Custom Template Fee</span>
                    <span className="font-serif text-lg text-white font-medium mt-1">₹20,000</span>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/5 rounded-sm">
                    <span className="font-mono text-[8px] text-gray-500 block uppercase">Host & Domain Fee</span>
                    <span className="font-serif text-lg text-white font-medium mt-1">₹40,000/yr</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer with agency contact info */}
            <div className="pt-6 border-t border-white/5 text-left space-y-3">
              <div className="flex items-center gap-1.5 text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[9px] tracking-wider uppercase font-semibold">NorthByte Confirmed</span>
              </div>
              <p className="text-[10px] text-gray-500 font-sans leading-relaxed">
                This website is structured to seamlessly plug into Sanity CMS, Firebase, or Supabase. 
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[8px] tracking-widest text-gray-600">NORTHBYTE AGENCY PRODUCT</span>
                <span className="font-mono text-[8px] text-amber-500 font-semibold">VERSION 1.0</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

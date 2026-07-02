import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Compass, ShieldAlert, CheckCircle2, AlertTriangle, FileText, Download } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface ReservationFormProps {
  config: RestaurantConfig;
  prefilledSpecialRequest: string;
  onClearPrefill: () => void;
}

export default function ReservationForm({ config, prefilledSpecialRequest, onClearPrefill }: ReservationFormProps) {
  // Booking Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [zone, setZone] = useState('Standard Salon');
  const [requests, setRequests] = useState('');
  const [dietary, setDietary] = useState<string[]>([]);

  // Form states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState<any | null>(null);

  // Sync prefilled requests from menu interaction
  useEffect(() => {
    if (prefilledSpecialRequest) {
      setRequests(prev => {
        const itemNote = `Highly interested in experiencing: ${prefilledSpecialRequest}.`;
        if (prev.includes(itemNote)) return prev;
        return prev ? `${prev} \n${itemNote}` : itemNote;
      });
      onClearPrefill(); // Clear so it doesn't double append
    }
  }, [prefilledSpecialRequest, onClearPrefill]);

  const diningZones = [
    { name: 'Standard Salon', desc: 'The main architectural dining hall with soft golden lighting.' },
    { name: "Chef's 8-seat Counter", desc: "Front row interactives directly facing Chef Takahashi's prep counter." },
    { name: 'Sommelier Vault Room', desc: 'An intimate, private glass-enclosed cellar for curated vintage pairing cycles.' },
  ];

  const dietaryOptions = ['Gluten-Free', 'Vegan', 'Nut-Allergy', 'Shellfish-Allergy', 'Lactose-Intolerant'];

  const toggleDietary = (option: string) => {
    setDietary(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Full name is required to secure a reservation.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'A valid email address is required for confirmation.';
    if (!phone.trim() || phone.length < 10) tempErrors.phone = 'A valid contact number is required for urgent SMS updates.';
    if (!date) tempErrors.date = 'Please specify your preferred calendar date.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury API gateway transit
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = `${config.logoText.substring(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}-2026`;
      setSuccessTicket({
        ref: bookingRef,
        name,
        email,
        phone,
        date,
        time,
        guests,
        zone,
        requests,
        dietary
      });
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('19:00');
    setGuests(2);
    setZone('Standard Salon');
    setRequests('');
    setDietary([]);
    setSuccessTicket(null);
  };

  return (
    <section 
      id="booking-desk" 
      className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden"
    >
      {/* Background Orbs */}
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ backgroundColor: config.colors.primary }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Head */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              RESERVATION CONCIERGE
            </span>
            <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light mb-6">
            The Booking <span className="italic">Desk.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed font-light">
            Secure your seat at our exclusive culinary sanctuary. Please fill in your preferences below; our concierge desk will review and send your boarding digital ticket immediately.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!successTicket ? (
            <motion.form
              key="booking-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-sm glass-panel border border-white/5 shadow-2xl text-left space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    PATRON FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3 px-4 text-sm font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@luxurymail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3 px-4 text-sm font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Contact */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    CONTACT NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3 px-4 text-sm font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Guest counter controls */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    PARTY GUEST COUNT *
                  </label>
                  <div className="flex items-center bg-black/40 border border-white/5 rounded-sm p-1.5 justify-between">
                    <button
                      type="button"
                      disabled={guests <= 1}
                      onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                      className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-sm text-sm focus:outline-none cursor-pointer disabled:opacity-30"
                    >
                      -
                    </button>
                    <span className="font-serif text-lg text-white font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      {guests} Patrons
                    </span>
                    <button
                      type="button"
                      disabled={guests >= 8}
                      onClick={() => setGuests(prev => Math.min(8, prev + 1))}
                      className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-sm text-sm focus:outline-none cursor-pointer disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                  <span className="block text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                    PARTIES LARGER THAN 8 REQUIRE EXCLUSIVE CORRESPONDENCE.
                  </span>
                </div>

                {/* Calendar Date Selection */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    CALENDAR DATE *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3 px-4 text-sm font-sans text-white focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 shrink-0" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    DINING CYCLE TIME *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3.5 px-4 text-sm font-sans text-white focus:outline-none transition-colors duration-300"
                  >
                    <option value="12:30">Lunch Block A - 12:30 PM</option>
                    <option value="13:30">Lunch Block B - 1:30 PM</option>
                    <option value="19:00">Dinner Block A - 7:00 PM</option>
                    <option value="20:30">Dinner Block B - 8:30 PM</option>
                    <option value="21:30">Dinner Block C - 9:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Seating Zone Radios */}
              <div className="space-y-3">
                <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                  CHOOSE DINING ZONE SECTOR
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {diningZones.map((z) => {
                    const active = zone === z.name;
                    return (
                      <button
                        key={z.name}
                        type="button"
                        onClick={() => setZone(z.name)}
                        className={`p-4 rounded-sm border text-left transition-all duration-300 focus:outline-none flex flex-col justify-between h-28 cursor-pointer ${
                          active 
                            ? 'bg-white/[0.02] border-white' 
                            : 'bg-black/30 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-serif text-sm text-white font-medium">{z.name}</span>
                          {active && (
                            <span 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: config.colors.primary }}
                            />
                          )}
                        </div>
                        <p className="text-[10px] text-gray-500 font-sans leading-relaxed">
                          {z.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dietary Multi Selection pills */}
              <div className="space-y-3">
                <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                  DIETARY ALERTS (SELECT ALL APPLICABLE)
                </label>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((opt) => {
                    const active = dietary.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleDietary(opt)}
                        className={`px-3 py-1.5 font-mono text-[9px] tracking-wider rounded-full border transition-all duration-300 focus:outline-none cursor-pointer ${
                          active 
                            ? 'bg-amber-500/10 text-amber-500 border-amber-500/40' 
                            : 'bg-black/40 text-gray-400 border-white/5 hover:border-white/10'
                        }`}
                      >
                        {active ? `✓ ${opt.toUpperCase()}` : opt.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests textarea */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                  CONCIERGE SPECIAL REQUESTS / PRE-ORDER DETAILS
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Celebrating 5th Wedding Anniversary. Requesting silent table corner, wine pairing notes, or specific menu dishes chosen..."
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  className="w-full bg-black/40 border border-white/5 focus:border-gray-700 rounded-sm py-3 px-4 text-sm font-sans text-white focus:outline-none placeholder:text-gray-600 transition-colors duration-300"
                />
              </div>

              {/* Submit panel */}
              <div className="pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-2 max-w-md text-left">
                  <Compass className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-gray-500 font-sans leading-relaxed uppercase">
                    By submitting, you authorize the concierge to trigger automated email passes. Pre-bookings hold a grace limit of 15 minutes.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto relative px-8 py-4 font-mono text-[10px] tracking-widest font-semibold text-black overflow-hidden group rounded-sm shadow-xl transition-all duration-300 focus:outline-none cursor-pointer"
                  style={{ 
                    backgroundColor: config.colors.primary,
                    boxShadow: `0 8px 24px ${config.colors.accentGlow}`
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-white/25 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative flex items-center justify-center gap-2 uppercase">
                    {isSubmitting ? 'TRANSMITTING CREDENTIALS...' : 'LOCK RESERVATION'}
                  </span>
                </button>
              </div>
            </motion.form>
          ) : (
            /* CONGRATULATORY GOLD BOARDING TICKET PASS */
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="max-w-2xl mx-auto flex flex-col items-center"
            >
              {/* Congratulatory notice */}
              <div className="flex flex-col items-center justify-center mb-8">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 fill-emerald-400/10 mb-4 animate-bounce" />
                <h3 className="font-serif text-3xl text-white font-light tracking-wide">
                  Table Secured Successfully.
                </h3>
                <p className="text-xs text-emerald-400 font-mono mt-2 tracking-widest uppercase">
                  A DIGITAL BOARDING TICKET HAS BEEN MINTED.
                </p>
              </div>

              {/* Digital Boarding Pass Ticket */}
              <div 
                className="w-full border-t-[3px] rounded-sm bg-[#080b13] border-white/5 overflow-hidden shadow-2xl text-left flex flex-col justify-between"
                style={{ borderTopColor: config.colors.primary }}
              >
                {/* Header Ticket Zone */}
                <div className="p-6 sm:p-8 bg-black/60 border-b border-white/[0.03] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">OFFICIAL ESTABLISHMENT</span>
                    <h4 className="font-serif text-2xl text-white font-light tracking-widest mt-1">{config.logoText}</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">BOOKING REFERENCE</span>
                    <p className="font-mono text-sm sm:text-base font-semibold text-white mt-1" style={{ color: config.colors.primary }}>
                      {successTicket.ref}
                    </p>
                  </div>
                </div>

                {/* Ticket Details Core */}
                <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-[#080b13]">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">PATRON</span>
                    <p className="font-serif text-base text-white mt-1 font-light overflow-hidden text-ellipsis whitespace-nowrap">
                      {successTicket.name}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">DATE SECURED</span>
                    <p className="font-serif text-base text-white mt-1 font-light">
                      {successTicket.date}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">DINING CYCLE</span>
                    <p className="font-serif text-base text-white mt-1 font-light">
                      {successTicket.time}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">GUEST SIZE</span>
                    <p className="font-serif text-base text-white mt-1 font-light">
                      {successTicket.guests} Patrons
                    </p>
                  </div>
                </div>

                {/* Seating sector & Diet overlays */}
                <div className="px-6 sm:px-8 pb-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase block mb-1">ALLOCATED ZONE SECTOR</span>
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-sm font-mono text-[10px] text-gray-300 font-semibold uppercase">
                        {successTicket.zone}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase block mb-1">DIETARY PREFERENCES</span>
                      <div className="flex flex-wrap gap-1.5">
                        {successTicket.dietary.length > 0 ? (
                          successTicket.dietary.map((d: string) => (
                            <span key={d} className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full font-mono text-[8px] tracking-wider uppercase font-semibold">
                              {d}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-gray-500 font-sans italic">None declared</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {successTicket.requests && (
                    <div className="pt-4 border-t border-white/[0.03]">
                      <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">CONCIERGE REMARKS</span>
                      <p className="text-xs text-gray-400 font-sans italic leading-relaxed mt-1 whitespace-pre-line">
                        "{successTicket.requests}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Boarding barcodes design illustration */}
                <div className="bg-black/80 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.03] gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-500 uppercase">
                    <FileText className="w-3.5 h-3.5" />
                    CONCIERGE CLOUD TERMINAL SYNCED
                  </div>
                  {/* Decorative barcode */}
                  <div className="h-6 flex items-baseline gap-0.5 opacity-40">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="h-full bg-white" 
                        style={{ width: i % 3 === 0 ? '1px' : i % 5 === 1 ? '3px' : '2px' }}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 font-mono text-[10px] tracking-widest font-semibold border border-white/5 hover:border-white/10 bg-white/5 rounded-sm hover:bg-white/10 text-white transition-all duration-300 cursor-pointer"
                >
                  SECURE ANOTHER SEAT
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 font-mono text-[10px] tracking-widest font-semibold text-black rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  <Download className="w-3.5 h-3.5" />
                  PRINT BOARDING TICKET
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

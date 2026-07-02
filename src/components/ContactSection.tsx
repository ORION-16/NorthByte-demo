import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Instagram, Facebook, Compass } from 'lucide-react';
import { RestaurantConfig } from '../types';

interface ContactSectionProps {
  config: RestaurantConfig;
}

export default function ContactSection({ config }: ContactSectionProps) {
  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Head */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-8 h-[1px]" style={{ backgroundColor: config.colors.primary }} />
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            CORRESPONDENCE HUBS
          </span>
        </div>

        {/* Two Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Coordinates details & Working hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 text-left">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-light leading-tight">
                Establish direct <br />
                <span className="italic" style={{ color: config.colors.primary }}>correspondence.</span>
              </h2>
              <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                Our concierge desk is operational daily for catering custom diets, hosting reservations, and coordinating private wine pairing events.
              </p>
            </div>

            {/* Core Address / Contact Details List */}
            <div className="space-y-6">
              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase block">DIRECT PHONE</span>
                  <a 
                    href={`tel:${config.contact.phone}`}
                    className="font-serif text-lg text-white hover:text-amber-100 transition-colors duration-300 block mt-1"
                  >
                    {config.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase block">CONCIERGE MAIL</span>
                  <a 
                    href={`mailto:${config.contact.email}`}
                    className="font-serif text-lg text-white hover:text-amber-100 transition-colors duration-300 block mt-1 overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    {config.contact.email}
                  </a>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase block">LOCATION DESK</span>
                  <p className="font-serif text-base text-gray-300 leading-relaxed mt-1">
                    {config.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Timetable block */}
            <div className="p-6 rounded-sm bg-white/[0.01] border border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: config.colors.primary }} />
                <span className="font-mono text-[10px] tracking-widest text-gray-300 uppercase font-semibold">
                  OPERATIONAL TIMES
                </span>
              </div>
              <div className="space-y-2 font-sans text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                  <span className="text-gray-400">Weekdays (Mon - Fri)</span>
                  <span className="text-white font-mono text-[11px] font-semibold">{config.contact.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                  <span className="text-gray-400">Weekends (Sat - Sun)</span>
                  <span className="text-white font-mono text-[11px] font-semibold">{config.contact.openingHours.weekends}</span>
                </div>
                {config.contact.openingHours.specialNotes && (
                  <p className="text-[10px] text-gray-500 font-sans italic pt-1 text-left">
                    * NOTE: {config.contact.openingHours.specialNotes}
                  </p>
                )}
              </div>
            </div>

            {/* Social profiles row */}
            <div className="flex items-center gap-6">
              <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">SUBSCRIBE DIALOGS</span>
              <div className="flex gap-4">
                {Object.entries(config.contact.socials).map(([key, url]) => {
                  const Icon = (socialIcons as any)[key] || Instagram;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all duration-300 border border-white/10"
                      title={key.toUpperCase()}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map container */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full flex-grow rounded-sm overflow-hidden border border-white/5 shadow-2xl h-[360px] lg:h-auto bg-gray-900"
            >
              <iframe
                title="Restaurant Location Map"
                src={config.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay floating action for Maps Directions */}
              <a
                href={config.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 px-4 py-2.5 bg-black/80 hover:bg-black text-white font-mono text-[10px] tracking-widest font-semibold flex items-center gap-2 rounded-sm border border-white/10 transition-all duration-300 shadow-2xl uppercase"
              >
                <Compass className="w-4 h-4 text-amber-500" />
                GET DIRECTIONS
                <ArrowUpRight className="w-3 h-3 text-gray-500" />
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

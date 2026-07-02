import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import SignatureDishes from './components/SignatureDishes';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ChefStory from './components/ChefStory';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import ContactSection from './components/ContactSection';
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import { defaultRestaurantConfig } from './config/restaurant.config';
import { RestaurantConfig } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentConfig, setCurrentConfig] = useState<RestaurantConfig>(defaultRestaurantConfig);
  const [activeSection, setActiveSection] = useState('hero');
  const [prefilledDish, setPrefilledDish] = useState('');

  // Handle hot-swapping presets or real-time customization name edits
  const handleSelectPreset = (preset: RestaurantConfig) => {
    setCurrentConfig(preset);
  };

  const handleCustomNameChange = (newName: string) => {
    setCurrentConfig((prev) => ({
      ...prev,
      name: newName || 'My Restaurant',
      logoText: newName ? newName.toUpperCase().replace(/\s+/g, ' ') : 'RESTAURANT'
    }));
  };

  // Scroll smoothly to any element ID
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Express interest on a dish item from menu, prefills the reservation request textarea
  const handleExpressInterest = (dishName: string) => {
    setPrefilledDish(dishName);
    scrollToId('booking-desk');
  };

  // Standard IntersectionObserver to dynamically highlight the current section in navigation bar
  useEffect(() => {
    const sections = ['hero', 'about', 'philosophy', 'signatures', 'menu', 'gallery', 'chef', 'contact'];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the middle view
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, [isLoading, currentConfig]);

  // Dynamically inject color tokens to document root to keep it completely config-driven
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', currentConfig.colors.primary);
    root.style.setProperty('--color-secondary', currentConfig.colors.secondary);
    root.style.setProperty('--color-background', currentConfig.colors.background);
    root.style.backgroundColor = currentConfig.colors.background;
  }, [currentConfig]);

  return (
    <>
      {/* 1. Preloader Cover */}
      <Preloader 
        restaurantName={currentConfig.name} 
        onComplete={() => setIsLoading(false)} 
      />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen text-gray-100 flex flex-col justify-between overflow-x-hidden"
            style={{ 
              backgroundColor: currentConfig.colors.background,
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" 
            }}
          >
            {/* 2. Sticky Glass Navbar */}
            <Navbar 
              config={currentConfig} 
              onBookClick={() => scrollToId('booking-desk')}
              activeSection={activeSection}
            />

            {/* Main Landing Sections Suite */}
            <main className="w-full flex-grow">
              
              {/* 3. Immersive Hero Carousel */}
              <Hero 
                config={currentConfig} 
                onBookClick={() => scrollToId('booking-desk')}
                onMenuClick={() => scrollToId('menu')}
              />

              {/* 4. Our Story Narrative Section */}
              <About config={currentConfig} />

              {/* 5. Brand Philosophy Pillars Section */}
              <WhyChoose config={currentConfig} />

              {/* 6. Asymmetric Signature Dishes Slider */}
              <SignatureDishes 
                config={currentConfig} 
                onBookClick={() => scrollToId('booking-desk')}
              />

              {/* 7. Comprehensive Searchable Menu List */}
              <MenuSection 
                config={currentConfig} 
                onExpressInterest={handleExpressInterest}
              />

              {/* 8. Grid Masonry Lightbox Gallery */}
              <GallerySection config={currentConfig} />

              {/* 9. Chef Biography Timeline Block */}
              <ChefStory config={currentConfig} />

              {/* 10. Patron Testimonials Slide carousel */}
              <Testimonials config={currentConfig} />

              {/* 11. Luxury Booking Validation Form */}
              <ReservationForm 
                config={currentConfig}
                prefilledSpecialRequest={prefilledDish}
                onClearPrefill={() => setPrefilledDish('')}
              />

              {/* 12. Location coordinates, hours and map */}
              <ContactSection config={currentConfig} />

            </main>

            {/* 13. Footer and newsletters */}
            <Footer 
              config={currentConfig} 
              onBookClick={() => scrollToId('booking-desk')}
            />

            {/* 14. Floating shortcut controls (WhatsApp, Back To Top) */}
            <StickyActions 
              config={currentConfig} 
              onBookClick={() => scrollToId('booking-desk')}
            />

            {/* 15. The Agency Playground float widget (Bottom Left) */}
            <div id="rebranding-playground">
              <ThemeSelector 
                currentConfig={currentConfig}
                onSelectPreset={handleSelectPreset}
                onCustomNameChange={handleCustomNameChange}
              />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

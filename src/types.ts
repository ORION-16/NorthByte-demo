export interface ColorPalette {
  primary: string;       // Accent / Brand color (e.g. Gold #D4AF37)
  secondary: string;     // Secondary details (e.g. Bronze #CD7F32)
  background: string;    // Dark luxurious background (e.g. Black/Charcoal #030712)
  textMuted: string;     // Subtext color
  accentGlow: string;    // Soft glowing effect color
}

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  backgroundImages: string[];
}

export interface DishItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string;
  tags: string[]; // e.g., ["Chef's Special", "Organic", "Spicy"]
  isVeg: boolean;
  isPopular?: boolean;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // matches a Lucide icon
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface ChefMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ChefConfig {
  name: string;
  title: string;
  quote: string;
  bio: string;
  image: string;
  signatureImage?: string;
  milestones: ChefMilestone[];
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: 'ambience' | 'dishes' | 'behind-the-scenes';
}

export interface ContactConfig {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  openingHours: {
    weekdays: string;
    weekends: string;
    specialNotes?: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    tripadvisor?: string;
  };
}

export interface SEOConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
}

export interface RestaurantConfig {
  id: string;
  name: string;
  logoText: string;
  colors: ColorPalette;
  hero: HeroConfig;
  whyChooseUs: WhyChooseUsItem[];
  signatureDishes: DishItem[];
  menu: DishItem[];
  gallery: GalleryItem[];
  chef: ChefConfig;
  reviews: ReviewItem[];
  contact: ContactConfig;
  seo: SEOConfig;
}

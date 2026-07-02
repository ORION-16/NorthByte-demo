import { RestaurantConfig } from '../types';

export const L_ETOILE_CONFIG: RestaurantConfig = {
  id: 'letoile',
  name: "L'Étoile",
  logoText: "L'ÉTOILE",
  colors: {
    primary: '#D4AF37', // Luxury Champagne Gold
    secondary: '#CD7F32', // Bronze
    background: '#0B0D12', // Pure Obsidian
    textMuted: '#9CA3AF',
    accentGlow: 'rgba(212, 175, 55, 0.15)'
  },
  hero: {
    titleLine1: "CULINARY ART",
    titleLine2: "DEFINED BY SENSES.",
    subtitle: "A Michelin-starred odyssey of modern French gastronomy nestled in the heart of the city.",
    ctaPrimaryText: "RESERVE A TABLE",
    ctaSecondaryText: "EXPLORE THE MENU",
    backgroundImages: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  whyChooseUs: [
    {
      id: 'why-1',
      title: 'Michelin Star Standard',
      description: 'Every plate undergoes rigorous calibration by our world-class culinary directors.',
      iconName: 'Award'
    },
    {
      id: 'why-2',
      title: 'Biodynamic Sourcing',
      description: 'We harvest ingredients exclusively from organic micro-farms within a 50-mile radius.',
      iconName: 'Leaf'
    },
    {
      id: 'why-3',
      title: 'Curated Cellar',
      description: 'Over 450 rare vintages curated carefully by our head sommelier.',
      iconName: 'Wine'
    }
  ],
  signatureDishes: [
    {
      id: 'sig-1',
      name: 'Perigord Truffle Filet',
      price: '₹4,800',
      description: 'Wagyu A5 tenderloin, black truffle potato pavé, aged port reduction, gold leaf accent.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
      tags: ["Chef's Signature", "Rare Aged"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'sig-2',
      name: 'Coastal Diver Scallops',
      price: '₹3,200',
      description: 'Pan-seared scallops, Jerusalem artichoke purée, brown butter emulsion, sea asparagus.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
      tags: ["Fresh Catch", "Light"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'sig-3',
      name: 'La Sphère au Chocolat',
      price: '₹1,900',
      description: 'Valrhona dark chocolate dome, warm salted caramel coulis, Madagascar vanilla bean caviar.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
      tags: ["Award Winning", "Dessert"],
      isVeg: true,
      isPopular: true
    }
  ],
  menu: [
    {
      id: 'menu-1',
      name: 'Aged Foie Gras Terrine',
      price: '₹2,600',
      description: 'Armagnac infused goose liver, wild fig compote, toasted brioche sourdough.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800',
      tags: ["Classic French"],
      isVeg: false
    },
    {
      id: 'menu-2',
      name: 'Artisanal Heirloom Burrata',
      price: '₹1,800',
      description: 'Smoked heirloom tomatoes, cold-pressed basil elixir, aged balsamic pearls, micro-basil.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800',
      tags: ["Organic", "Gluten Free"],
      isVeg: true
    },
    {
      id: 'menu-3',
      name: 'Line-Caught Sea Bass',
      price: '₹3,900',
      description: 'Crisp scale sea bass, saffron-infused lobster broth, braised fennel, fingerling potatoes.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
      tags: ["Chef's Selection"],
      isVeg: false
    },
    {
      id: 'menu-4',
      name: 'Morel Mushroom Risotto',
      price: '₹3,400',
      description: 'Acquerello aged carnaroli rice, fresh morels, white wine reduction, 36-month parmigiano.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
      tags: ["Veg Delight", "Truffle Oil"],
      isVeg: true
    },
    {
      id: 'menu-5',
      name: 'Deconstructed Lemon Tart',
      price: '₹1,400',
      description: 'Meyer lemon curd, toasted Italian meringue peaks, butter sable crust, basil sorbet.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
      tags: ["Fresh", "Tangy"],
      isVeg: true
    },
    {
      id: 'menu-6',
      name: 'Grand Marnier Soufflé',
      price: '₹1,600',
      description: 'Baked to perfection, served with orange blossom creme anglaise pouring sauce.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800',
      tags: ["Baked Fresh"],
      isVeg: true
    },
    {
      id: 'menu-7',
      name: 'The Royal Royalist',
      price: '₹1,200',
      description: '24k gold infused bourbon, smoked cherrywood, Angostura bitters, hand-carved ice sphere.',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
      tags: ["Signature Cocktail", "Alcoholic"],
      isVeg: true
    },
    {
      id: 'menu-8',
      name: 'Imperial Matcha Elixir',
      price: '₹850',
      description: 'Uji matcha, organic macadamia milk, white chocolate cloud, gold dust.',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800',
      tags: ["Non-Alcoholic", "Adaptogens"],
      isVeg: true
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      caption: 'The Grand Dining Room offering architectural elegance and soft golden lighting.',
      category: 'ambience'
    },
    {
      id: 'gal-2',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
      caption: 'Plated Truffle Wagyu ready for critical service presentation.',
      category: 'dishes'
    },
    {
      id: 'gal-3',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
      caption: 'Chef de Cuisine meticulously placing micro-herbs using tweezers.',
      category: 'behind-the-scenes'
    },
    {
      id: 'gal-4',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
      caption: 'The Private Sommelier Vault featuring historic vintages.',
      category: 'ambience'
    },
    {
      id: 'gal-5',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      caption: 'Truffle-infused handmade taglioni tossed in aged parmigiano wheel.',
      category: 'dishes'
    },
    {
      id: 'gal-6',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
      caption: 'The evening brief - aligning front-of-house with culinary standards.',
      category: 'behind-the-scenes'
    }
  ],
  chef: {
    name: 'Jean-Luc Fontaine',
    title: 'Executive Chef & Founder',
    quote: "A plate is a silent sonnet. It is born of heritage, carved by discipline, and elevated by genuine emotion.",
    bio: "After earning three Michelin stars across legendary Paris and Lyon kitchens, Chef Jean-Luc established L'Étoile to challenge gastronomic conventions. His signature is a respectful deconstruction of classic French sauces blended with local, biodynamic farm yields.",
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
    milestones: [
      {
        year: '2016',
        title: 'Apprentice at Le Meurice',
        description: 'Trained under legendary masters in Paris, mastering the intricate craft of sauce-making.'
      },
      {
        year: '2019',
        title: 'Headed Michelin Star Lounge',
        description: 'Commanded the line as Executive Chef, earning consecutive ratings and regional acclaim.'
      },
      {
        year: '2023',
        title: "Launched L'Étoile",
        description: 'Opened this private sanctuary to express his purest, uncompromising culinary philosophy.'
      }
    ]
  },
  reviews: [
    {
      id: 'rev-1',
      name: 'Victoria Vance',
      role: 'Luxury Connoisseur, Condé Nast',
      rating: 5,
      comment: "L'Étoile is not a meal; it is absolute performance art. The Truffle Filet literally melted on contact, and the sommelier pair-ups were flawless. NorthByte has made an absolute masterpiece of a website for them too!",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      date: 'June 2026'
    },
    {
      id: 'rev-2',
      name: 'Marcus Sterling',
      role: 'Tech Venture Partner',
      rating: 5,
      comment: "The reservation interface was so clean and intuitive that I booked a client dinner in 10 seconds. The actual dinner somehow managed to exceed the premium web presentation. World-class in every metric.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      date: 'May 2026'
    },
    {
      id: 'rev-3',
      name: 'Chef Akira Sato',
      role: 'Critique & Culinary Judge',
      rating: 5,
      comment: "Meticulous. Jean-Luc's scale of seasoning is precise, and the scale of the website's layout matches that standard. Absolutely gorgeous user experience.",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      date: 'April 2026'
    }
  ],
  contact: {
    phone: '+919876543210',
    phoneFormatted: '+91 98765 43210',
    whatsapp: '919876543210',
    whatsappMessage: 'Hello L\'Étoile, I would like to inquire about hosting a private dining event.',
    email: 'concierge@letoile.com',
    address: '12, Luxury Promenade Road, Level 2, Metropolis, India',
    openingHours: {
      weekdays: 'Lunch: 12:00 PM - 3:00 PM | Dinner: 7:00 PM - 11:30 PM',
      weekends: 'Brunch: 11:30 AM - 4:00 PM | Dinner: 6:30 PM - Midnight',
      specialNotes: 'Chef Fontaine\'s Private Table requires 48-hour advance notice.'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8037748443916!2d72.8256338148972!3d18.940026387165842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e8c05763df%3A0xc6cb181d85698b67!2sTaj%20Mahal%20Palace%20Hotel!5e0!3m2!1sen!2sin!4v1652431804294!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com',
    socials: {
      instagram: 'https://instagram.com/letoile_dining',
      facebook: 'https://facebook.com/letoile_dining'
    }
  },
  seo: {
    metaTitle: "L'Étoile Fine Dining - Modern French Gastronomy",
    metaDescription: "Experience an award-winning Michelin-starred culinary journey. Reserve tables, browse our curated menu, and join Chef Jean-Luc Fontaine's private dining experience.",
    keywords: ["Michelin star", "Fine dining", "Modern French", "Luxury restaurant", "Gourmet dining"],
    ogImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200"
  }
};

export const SAKURA_CONFIG: RestaurantConfig = {
  id: 'sakura',
  name: 'Sakura Kyoto',
  logoText: 'SAKURA',
  colors: {
    primary: '#E11D48', // Cherry Blossom Crimson Red
    secondary: '#FDA4AF', // Gentle Petal Pink
    background: '#09090B', // Zen Ink Black
    textMuted: '#A1A1AA',
    accentGlow: 'rgba(225, 29, 72, 0.15)'
  },
  hero: {
    titleLine1: "ZEN HARMONY,",
    titleLine2: "MODERN PLATING.",
    subtitle: "A meticulous exploration of Kyoto heritage blended with high-altitude Andean ingredients.",
    ctaPrimaryText: "SECURE COUNTER SEAT",
    ctaSecondaryText: "THE OMAKASE PATH",
    backgroundImages: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  whyChooseUs: [
    {
      id: 'why-sakura-1',
      title: 'The Omakase Spirit',
      description: 'Interact directly with the master at our 8-seat Japanese cypress counter.',
      iconName: 'ChefHat'
    },
    {
      id: 'why-sakura-2',
      title: 'Toyosu Fish Market Air-Lift',
      description: 'Fish are hand-selected at dawn in Tokyo and served at dinner in our dining lounge.',
      iconName: 'PlaneTakeoff'
    },
    {
      id: 'why-sakura-3',
      title: 'Craft Sake Library',
      description: 'Sip unpasteurized, craft sakes sourced directly from micro-breweries in Niigata.',
      iconName: 'Droplet'
    }
  ],
  signatureDishes: [
    {
      id: 'sak-sig-1',
      name: 'Flamed Otoro Nigiri',
      price: '₹3,200',
      description: 'Fatty bluefin tuna belly, single-estate shoyu glaze, Kizami fresh wasabi, shiso flower.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=800',
      tags: ["Toyosu Special", "Raw"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'sak-sig-2',
      name: 'Black Cod with Red Miso',
      price: '₹4,100',
      description: '72-hour marinated black cod in sweet sake and red Kyomiso, char-roasted on binchotan.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
      tags: ["Heritage Recipe"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'sak-sig-3',
      name: 'Yuzu Shisho Panna Cotta',
      price: '₹1,200',
      description: 'Creamy cold-infused yuzu pudding, minty shiso leaf gelée, fresh seasonal lychee.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
      tags: ["Vegan Option", "Refreshing"],
      isVeg: true,
      isPopular: true
    }
  ],
  menu: [
    {
      id: 'sak-menu-1',
      name: 'A5 Wagyu Gyoza',
      price: '₹1,800',
      description: 'Pan-seared dumplings filled with hand-minced Wagyu, caramelized scallions, black vinegar.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800',
      tags: ["Crisp", "Warm"],
      isVeg: false
    },
    {
      id: 'sak-menu-2',
      name: 'Charred Edamame with Truffle Sea Salt',
      price: '₹800',
      description: 'Young soybeans steamed and tossed in smoked white truffle oil and coarse sea salt flakes.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
      tags: ["Vegan", "Nut Free"],
      isVeg: true
    },
    {
      id: 'sak-menu-3',
      name: 'Binchotan Roasted King Oyster Mushroom',
      price: '₹2,100',
      description: 'Fleshy mushrooms glazed with sweet tamari, garlic chives, crisp leek ribbons.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800',
      tags: ["Veg Champion", "Gluten Free"],
      isVeg: true
    },
    {
      id: 'sak-menu-4',
      name: 'The Kyoto Omakase Platter',
      price: '₹6,500',
      description: 'Chef\'s premium selection of 10 seasonal nigiri pieces and a hand-rolled Temaki.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
      tags: ["Omakase Elite", "Raw"],
      isVeg: false
    },
    {
      id: 'sak-menu-5',
      name: 'Uji Matcha Lava Fondant',
      price: '₹1,300',
      description: 'Warm liquid-centered matcha cake, black sesame ice cream, toasted rice puffs.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
      tags: ["Sweet & Savory"],
      isVeg: true
    },
    {
      id: 'sak-menu-6',
      name: 'Royal Hibiscus Highball',
      price: '₹950',
      description: 'Japanese pure malt whisky, carbonated hibiscus water, fresh plum syrup.',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
      tags: ["Sip Slow", "Alcoholic"],
      isVeg: true
    }
  ],
  gallery: [
    {
      id: 'sak-gal-1',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
      caption: 'The minimalist rock garden corridor and cypress sliding panels.',
      category: 'ambience'
    },
    {
      id: 'sak-gal-2',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
      caption: 'Precisely rolled Hamachi Maki on dark volcanic slate.',
      category: 'dishes'
    },
    {
      id: 'sak-gal-3',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
      caption: 'Master Kenji slicing raw bluefin with a 45cm forged Yanagiba blade.',
      category: 'behind-the-scenes'
    }
  ],
  chef: {
    name: 'Kenji Takahashi',
    title: 'Master Sushi Chef',
    quote: "A single grain of sushi rice must hold the perfect envelope of air. It is architecture in micro-scale.",
    bio: "Kenji spent 15 years as apprentice and sous chef at the legendary Sukiyabashi Jiro block. He relocated to set up Sakura, importing premium binchotan coals and hand-crafted shoyu to introduce the uncompromised Tokyo Ginza discipline.",
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
    milestones: [
      {
        year: '2008',
        title: 'Entered Ginza Apprenticeship',
        description: 'Learnt to clean and scale fish for three straight years before cooking rice.'
      },
      {
        year: '2015',
        title: 'Mastered Shari Calibration',
        description: 'Earned the right to calibrate rice vinegar formulations under Jiro\'s senior staff.'
      },
      {
        year: '2022',
        title: 'Founded Sakura Kyoto',
        description: 'Brought authentic Ginza Omakase directly to a highly discerning international audience.'
      }
    ]
  },
  reviews: [
    {
      id: 'sak-rev-1',
      name: 'Lady Satsuki Mori',
      role: 'Heirloom Sake Sommelier, Kyoto',
      rating: 5,
      comment: "Unmatched fidelity. The rice temperature matches the core body heat exactly, and Kenji\'s direct Bincho-roasting is legendary. Best-designed restaurant page I have ever used.",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      date: 'March 2026'
    }
  ],
  contact: {
    phone: '+919998887776',
    phoneFormatted: '+91 99988 87776',
    whatsapp: '919998887776',
    whatsappMessage: 'Konnichiwa Sakura, I would like to check seat availability at the Counter for next Friday.',
    email: 'reservations@sakurakyoto.in',
    address: '8, Cherry Blossom Heights, Zen Gardens Complex, New Delhi, India',
    openingHours: {
      weekdays: 'Dinner Only: 6:00 PM - 11:30 PM (Pre-booked Omakase Cycles)',
      weekends: 'Lunch (Bento): 12:00 PM - 2:30 PM | Dinner: 6:00 PM - Midnight',
      specialNotes: 'The 8-seat Counter requires reservation at least 3 weeks in advance.'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9965020922874!2d77.20661241508269!3d28.629853582417754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd39ab301643%3A0x67db238ff7227cb9!2sThe%20Leela%20Palace%20New%20Delhi!5e0!3m2!1sen!2sin!4v1652431804294!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com',
    socials: {
      instagram: 'https://instagram.com/sakura_kyoto',
      facebook: 'https://facebook.com/sakura_kyoto'
    }
  },
  seo: {
    metaTitle: "Sakura Kyoto - High-Altitude Japanese Fusion",
    metaDescription: "Taste uncompromised, Toyosu-sourced Kyoto sushi paired with ancient sakes. An exclusive 8-seat master-led Omakase experience.",
    keywords: ["Sushi Omakase", "Kyoto Fusion", "Raw Tuna", "Japanese restaurant", "Master Chef"],
    ogImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200"
  }
};

export const VELOCE_CONFIG: RestaurantConfig = {
  id: 'veloce',
  name: 'Veloce Trattoria',
  logoText: 'VELOCE',
  colors: {
    primary: '#10B981', // Emerald Olive Green
    secondary: '#F59E0B', // Amber Tuscan Sunrise
    background: '#0F172A', // Deep Mediterranean Slate
    textMuted: '#94A3B8',
    accentGlow: 'rgba(16, 185, 129, 0.15)'
  },
  hero: {
    titleLine1: "HANDROLLED PASSION,",
    titleLine2: "WOODFIRED SOUL.",
    subtitle: "A modern, high-spirited Tuscan trattoria dedicated to coarse hand-pulled semolina, vintage Chianti, and open flame cooking.",
    ctaPrimaryText: "SECURE A COZY BOOTH",
    ctaSecondaryText: "MEET THE DOUGH",
    backgroundImages: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  whyChooseUs: [
    {
      id: 'why-vel-1',
      title: 'Heritage Sourdough Starter',
      description: 'Our wild-yeast culture has been fed continuously since 1984 in Florence.',
      iconName: 'Compass'
    },
    {
      id: 'why-vel-2',
      title: '100% Bronze Die Extruded',
      description: 'All pastas are extruded in-house daily for the perfect rough sauce-clinging surface.',
      iconName: 'Activity'
    },
    {
      id: 'why-vel-3',
      title: 'Bespoke Chianti Cellar',
      description: 'Sample bold, regional sangiovese casks imported directly from our family farm.',
      iconName: 'CupSoda'
    }
  ],
  signatureDishes: [
    {
      id: 'vel-sig-1',
      name: 'Wild Boar Ragù Pappardelle',
      price: '₹2,900',
      description: 'Hand-cut 24-egg-yolk flat ribbons, slow-braised wild boar shoulder, sweet rosemary, pecorino romano.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      tags: ["House Pasta", "Slow Braised"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'vel-sig-2',
      name: 'Woodfired Burrata & Fig Pizza',
      price: '₹1,950',
      description: '48-hour fermented dough, organic black figs, fresh burrata sphere, wild arugula, chestnut honey.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
      tags: ["Voted Best Pizza"],
      isVeg: true,
      isPopular: true
    }
  ],
  menu: [
    {
      id: 'vel-menu-1',
      name: 'Zucchini Blossoms with Goat Cheese',
      price: '₹1,200',
      description: 'Crispy tempura flowers filled with herbed goat cheese, drizzled with lavender blossom honey.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800',
      tags: ["Veg Delight", "Crispy"],
      isVeg: true
    },
    {
      id: 'vel-menu-2',
      name: 'Spotted Crab Ravioli',
      price: '₹3,200',
      description: 'Hand-stuffed ravioli with fresh blue crab meat, brown butter broth, toasted pine nuts, sage.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
      tags: ["Chef Special"],
      isVeg: false
    },
    {
      id: 'vel-menu-3',
      name: 'Tiramisu Della Nonna',
      price: '₹1,100',
      description: 'Traditional style with triple-soaked espresso savoiardi, high-fat mascarpone, bitter cocoa.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800',
      tags: ["Signature Sweet"],
      isVeg: true
    }
  ],
  gallery: [
    {
      id: 'vel-gal-1',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      caption: 'The lively open-hearth oven kitchen where our sourdough rises daily.',
      category: 'behind-the-scenes'
    }
  ],
  chef: {
    name: 'Giovanni Veloce',
    title: 'Capo de Cucina',
    quote: "Flour, water, and fire. When you strip away the pretension, Italian cuisine is a dialogue with ancient elements.",
    bio: "Raised in the hills of San Gimignano, Chef Giovanni inherited his grandmother's pasta cutter and her strict iron will. He brings high-spirited laughter, heavy rustic pans, and uncompromising olive oil selections.",
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
    milestones: [
      {
        year: '1999',
        title: 'Master of Flour',
        description: 'Trained under local Tuscan bakers, mastering the moisture curves of heritage flours.'
      },
      {
        year: '2020',
        title: 'Brought Fire to Metropolis',
        description: 'Launched Veloce to recreate the warmth and rustic depth of real woodfire cooking.'
      }
    ]
  },
  reviews: [
    {
      id: 'vel-rev-1',
      name: 'Sophia Romano',
      role: 'Tuscan Gastronomy Lead',
      rating: 5,
      comment: "Outstanding rustic depth. The sourdough crust is incredible, and the pappardelle holds sauce like nowhere else. NorthByte's template has captured the energetic Mediterranean glow perfectly.",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      date: 'April 2026'
    }
  ],
  contact: {
    phone: '+919830012345',
    phoneFormatted: '+91 98300 12345',
    whatsapp: '919830012345',
    whatsappMessage: 'Ciao Veloce! I would like to book a table for 4 for next weekend\'s wine pairing dinner.',
    email: 'ciao@veloce.in',
    address: '42, Olive Grove Boulevard, Sector V, Kolkata, India',
    openingHours: {
      weekdays: 'Lunch: 12:30 PM - 3:30 PM | Dinner: 6:30 PM - 11:30 PM',
      weekends: 'Continuous Service: 12:00 PM - Midnight',
      specialNotes: 'Woodfired Pizza is available exclusively during evening dinner cycles.'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.062839947833!2d88.42721861502479!3d22.572935285181775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ade3ec1599%3A0x6b4f713e2fec3494!2sBiswa%20Bangla%20Gate!5e0!3m2!1sen!2sin!4v1652431804294!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com',
    socials: {
      instagram: 'https://instagram.com/veloce_trattoria',
      facebook: 'https://facebook.com/veloce_trattoria'
    }
  },
  seo: {
    metaTitle: "Veloce Trattoria - Artisanal Sourdough & Pasta",
    metaDescription: "Savor woodfired sourdough pizzas and bronze-extruded pastas. An open-flame Tuscan dining adventure in Sector V.",
    keywords: ["Sourdough Pizza", "Handmade Pasta", "Chianti wine", "Tuscan Trattoria", "Woodfired hearth"],
    ogImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200"
  }
};

export const ELEGANT_DARK_CONFIG: RestaurantConfig = {
  id: 'elegant_dark',
  name: "NorthByte Bistro",
  logoText: "NORTHBYTE",
  colors: {
    primary: '#2563eb', // Brilliant Cobalt Blue
    secondary: '#4f46e5', // Deep Indigo
    background: '#030712', // Obsidian Black
    textMuted: '#94A3B8', // Muted Slate
    accentGlow: 'rgba(37, 99, 235, 0.15)'
  },
  hero: {
    titleLine1: "SAVOUR THE",
    titleLine2: "EXTRAORDINARY.",
    subtitle: "A symphony of flavors, crafted by masters of the culinary arts. Redefining fine dining through technical precision and local soul.",
    ctaPrimaryText: "RESERVE TABLE",
    ctaSecondaryText: "EXPLORE THE MENU",
    backgroundImages: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  whyChooseUs: [
    {
      id: 'why-ed-1',
      title: 'Technical Precision',
      description: 'Every plate undergoes rigorous calibration and temperature-controlled execution.',
      iconName: 'Award'
    },
    {
      id: 'why-ed-2',
      title: 'Local Soul & Sourcing',
      description: 'We partner with the finest biodynamic regional estates to source pristine seasonal ingredients.',
      iconName: 'Leaf'
    },
    {
      id: 'why-ed-3',
      title: 'Award Winning Design',
      description: 'Dine in an architectural sanctuary featuring bespoke hand-finished obsidian details.',
      iconName: 'Sparkles'
    }
  ],
  signatureDishes: [
    {
      id: 'ed-sig-1',
      name: 'Wagyu A5 Striploin',
      price: '₹2,450',
      description: 'Truffle Jus & Smoked Bone Marrow, charred pearl onions, gold leaf garnish.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
      tags: ["Signature Dish", "Best Seller"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'ed-sig-2',
      name: 'Coastal Diver Scallops',
      price: '₹1,950',
      description: 'Pan-seared sea scallops, parsnip velvet purée, saffron-infused foam, sea fennel.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
      tags: ["Fresh Catch", "Light"],
      isVeg: false,
      isPopular: true
    },
    {
      id: 'ed-sig-3',
      name: 'Deconstructed Lemon Sphère',
      price: '₹1,200',
      description: 'Meyer lemon fluid curd, crispy meringue peaks, sable crust soil, yuzu sorbet.',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
      tags: ["Award Winning"],
      isVeg: true,
      isPopular: true
    }
  ],
  menu: [
    {
      id: 'ed-menu-1',
      name: 'Aged Foie Gras Terrine',
      price: '₹1,800',
      description: 'Armagnac infused goose liver, wild fig compote, toasted brioche sourdough.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800',
      tags: ["Classic"],
      isVeg: false
    },
    {
      id: 'ed-menu-2',
      name: 'Artisanal Heirloom Burrata',
      price: '₹1,400',
      description: 'Smoked heirloom tomatoes, cold-pressed basil elixir, aged balsamic pearls.',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800',
      tags: ["Organic", "Gluten Free"],
      isVeg: true
    },
    {
      id: 'ed-menu-3',
      name: 'Line-Caught Sea Bass',
      price: '₹2,100',
      description: 'Crisp scale sea bass, saffron-infused lobster broth, braised fennel, fingerling potatoes.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
      tags: ["Ocean Fresh"],
      isVeg: false
    },
    {
      id: 'ed-menu-4',
      name: 'Morel Mushroom Risotto',
      price: '₹1,850',
      description: 'Acquerello aged carnaroli rice, fresh morels, white wine reduction, 36-month parmigiano.',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
      tags: ["Veg Delight"],
      isVeg: true
    },
    {
      id: 'ed-menu-5',
      name: 'The Royal Sovereign',
      price: '₹1,100',
      description: '24k gold infused bourbon, smoked cherrywood, Angostura bitters, hand-carved ice sphere.',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
      tags: ["Signature Cocktail"],
      isVeg: true
    }
  ],
  gallery: [
    {
      id: 'ed-gal-1',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      caption: 'The main dining lounge showing technical lighting precision and obsidian finishes.',
      category: 'ambience'
    },
    {
      id: 'ed-gal-2',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
      caption: 'A beautifully plated Wagyu A5 Striploin being prepared for critical table service.',
      category: 'dishes'
    },
    {
      id: 'ed-gal-3',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
      caption: 'Our culinary masters assembling delicate textures and precise flavors.',
      category: 'behind-the-scenes'
    }
  ],
  chef: {
    name: 'Jean-Luc Fontaine',
    title: 'Executive Chef & Founder',
    quote: "A plate is a silent sonnet. It is born of heritage, carved by discipline, and elevated by genuine emotion.",
    bio: "After earning three Michelin stars across legendary Paris and Lyon kitchens, Chef Jean-Luc established NorthByte Bistro to challenge gastronomic conventions with modern tech-forward precision.",
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
    milestones: [
      {
        year: '2016',
        title: 'Apprentice at Le Meurice',
        description: 'Trained under legendary masters in Paris, mastering the intricate craft of sauce-making.'
      },
      {
        year: '2020',
        title: 'Headed Michelin Star Lounge',
        description: 'Commanded the line as Executive Chef, earning consecutive ratings and regional acclaim.'
      },
      {
        year: '2024',
        title: "Launched NorthByte",
        description: 'Opened this private sanctuary to express his purest, uncompromising culinary philosophy.'
      }
    ]
  },
  reviews: [
    {
      id: 'ed-rev-1',
      name: 'Victoria Vance',
      role: 'Luxury Connoisseur, Condé Nast',
      rating: 5,
      comment: "NorthByte Bistro is not a meal; it is absolute performance art. The Truffle Wagyu literally melted on contact, and the sommelier pair-ups were flawless. An absolute masterpiece.",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      date: 'June 2026'
    }
  ],
  contact: {
    phone: '+919876543210',
    phoneFormatted: '+91 98765 43210',
    whatsapp: '919876543210',
    whatsappMessage: 'Hello NorthByte Bistro, I would like to inquire about hosting a private dining event.',
    email: 'concierge@northbytebistro.com',
    address: 'Cyber Hub, Sector 24, Gurgaon, India',
    openingHours: {
      weekdays: 'Lunch: 12:00 PM - 3:00 PM | Dinner: 7:00 PM - 11:30 PM',
      weekends: 'Brunch: 11:30 AM - 4:00 PM | Dinner: 6:30 PM - Midnight',
      specialNotes: 'Our Sommelier pairing table requires a 48-hour advance notice.'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9576402447936!2d77.08637771507857!3d28.49581178247346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1938ee8541e1%3A0x6b445353beec7784!2sCyber%20Hub!5e0!3m2!1sen!2sin!4v1652431804294!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com',
    socials: {
      instagram: 'https://instagram.com/northbyte_bistro',
      facebook: 'https://facebook.com/northbyte_bistro'
    }
  },
  seo: {
    metaTitle: "NorthByte Bistro - Modern Fine Dining",
    metaDescription: "Experience an award-winning Michelin-starred culinary journey. Reserve tables, browse our curated menu, and join Chef Jean-Luc Fontaine's private dining experience.",
    keywords: ["Michelin star", "Fine dining", "Modern European", "Luxury restaurant", "Gourmet dining"],
    ogImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200"
  }
};

// Default export is the Elegant Dark preset, but users can hot-swap configurations in real-time
export const defaultRestaurantConfig = ELEGANT_DARK_CONFIG;

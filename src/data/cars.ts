
import { Car, Brand } from '../types/car';

export const brands: Brand[] = [
  {
    id: 'bentley',
    name: 'Bentley',
    logo: '/placeholder.svg',
    description: 'Extraordinary journeys demand extraordinary cars.',
    founded: 1919,
    headquarters: 'Crewe, England',
    website: 'bentleymotors.com'
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    logo: '/placeholder.svg',
    description: 'The pinnacle of luxury and craftsmanship.',
    founded: 1904,
    headquarters: 'Goodwood, England',
    website: 'rolls-roycemotorcars.com'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: '/placeholder.svg',
    description: 'Racing heritage meets Italian excellence.',
    founded: 1939,
    headquarters: 'Maranello, Italy',
    website: 'ferrari.com'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: '/placeholder.svg',
    description: 'Expect the unexpected.',
    founded: 1963,
    headquarters: 'Sant\'Agata Bolognese, Italy',
    website: 'lamborghini.com'
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: '/placeholder.svg',
    description: 'Pure driving excellence.',
    founded: 1963,
    headquarters: 'Woking, England',
    website: 'mclaren.com'
  }
];

export const cars: Car[] = [
  // Bentley Cars
  {
    id: 'bentley-continental-gt',
    name: 'Continental GT',
    brand: 'Bentley',
    price: 25000000,
    originalPrice: 27000000,
    image: '/placeholder.svg',
    description: 'The definitive luxury grand tourer combining effortless performance with handcrafted luxury.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.7s',
      topSpeed: '333 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Diamond Quilted Leather', 'Rotating Display', 'Bentley Dynamic Ride', 'Naim Audio'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: 'bentley-flying-spur',
    name: 'Flying Spur',
    brand: 'Bentley',
    price: 32000000,
    image: '/placeholder.svg',
    description: 'The world\'s finest luxury sedan with unparalleled comfort and performance.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '333 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Massage Seats', 'Champagne Cooler', '3D Diamond Design', 'Active Suspension'],
    category: 'sedan',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentayga',
    brand: 'Bentley',
    price: 28000000,
    image: '/placeholder.svg',
    description: 'The ultimate luxury SUV that redefines the segment.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '542 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '290 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Air Suspension', 'Terrain Response', 'Panoramic Sunroof', 'Bentley Safeguard Plus'],
    category: 'suv',
    year: 2024,
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'bentley-mulsanne',
    name: 'Mulsanne',
    brand: 'Bentley',
    price: 35000000,
    image: '/placeholder.svg',
    description: 'The flagship sedan representing the pinnacle of British luxury.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '505 HP',
      acceleration: '0-100 km/h in 5.1s',
      topSpeed: '296 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Hand-Crafted Interior', 'Entertainment Suite', 'Mulliner Driving Specification', 'Adaptive Cruise Control'],
    category: 'sedan',
    year: 2023,
    inStock: false,
    rating: 4.9,
    reviews: 73
  },
  {
    id: 'bentley-bacalar',
    name: 'Bacalar',
    brand: 'Bentley',
    price: 45000000,
    image: '/placeholder.svg',
    description: 'Ultra-rare bespoke grand tourer with no roof, no rules.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '650 HP',
      acceleration: '0-100 km/h in 3.5s',
      topSpeed: '320 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Bespoke Design', 'Open-Top Experience', 'Sustainable Materials', 'Unique Color Options'],
    category: 'convertible',
    year: 2024,
    inStock: true,
    rating: 5.0,
    reviews: 12
  },
  {
    id: 'bentley-continental-gtc',
    name: 'Continental GTC',
    brand: 'Bentley',
    price: 27000000,
    image: '/placeholder.svg',
    description: 'The ultimate convertible grand tourer with timeless elegance.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '333 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Soft-Top Convertible', 'Neck Warmer', 'Diamond Knurling', 'All-Weather Capability'],
    category: 'convertible',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 94
  },
  {
    id: 'bentley-speed',
    name: 'Continental GT Speed',
    brand: 'Bentley',
    price: 29000000,
    image: '/placeholder.svg',
    description: 'The most dynamic Bentley ever, engineered for performance.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '650 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '335 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Sport Mode', 'Carbon Fiber Details', 'Performance Exhaust', 'Sport Suspension'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 68
  },
  {
    id: 'bentley-azure',
    name: 'Azure',
    brand: 'Bentley',
    price: 38000000,
    image: '/placeholder.svg',
    description: 'Classic luxury convertible with timeless British elegance.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '450 HP',
      acceleration: '0-100 km/h in 5.6s',
      topSpeed: '270 km/h',
      fuelType: 'Petrol',
      transmission: '4-Speed Automatic'
    },
    features: ['Classic Design', 'Premium Leather', 'Wood Veneers', 'Vintage Charm'],
    category: 'convertible',
    year: 2023,
    inStock: false,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'bentley-brooklands',
    name: 'Brooklands',
    brand: 'Bentley',
    price: 40000000,
    image: '/placeholder.svg',
    description: 'Exclusive luxury coupe with distinctive British character.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '530 HP',
      acceleration: '0-100 km/h in 5.0s',
      topSpeed: '296 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Automatic'
    },
    features: ['Distinctive Styling', 'Luxury Appointments', 'Rare Collectible', 'Hand-Built Quality'],
    category: 'coupe',
    year: 2023,
    inStock: true,
    rating: 4.7,
    reviews: 31
  },
  {
    id: 'bentley-arnage',
    name: 'Arnage',
    brand: 'Bentley',
    price: 30000000,
    image: '/placeholder.svg',
    description: 'Traditional luxury sedan with uncompromising elegance.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '500 HP',
      acceleration: '0-100 km/h in 5.4s',
      topSpeed: '270 km/h',
      fuelType: 'Petrol',
      transmission: '4-Speed Automatic'
    },
    features: ['Traditional Craftsmanship', 'Walnut Veneers', 'Leather Appointments', 'Classic Luxury'],
    category: 'sedan',
    year: 2023,
    inStock: true,
    rating: 4.5,
    reviews: 67
  },

  // Rolls-Royce Cars
  {
    id: 'rolls-royce-phantom',
    name: 'Phantom',
    brand: 'Rolls-Royce',
    price: 60000000,
    originalPrice: 65000000,
    image: '/placeholder.svg',
    description: 'The pinnacle of luxury, handcrafted to perfection.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.3s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Magic Carpet Ride', 'Starlight Headliner', 'Bespoke Audio', 'Self-Leveling Suspension'],
    category: 'sedan',
    year: 2024,
    inStock: true,
    rating: 5.0,
    reviews: 89
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Ghost',
    brand: 'Rolls-Royce',
    price: 45000000,
    image: '/placeholder.svg',
    description: 'Contemporary luxury with whisper-quiet performance.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.8s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Planar Suspension', 'Illuminated Grille', 'Crystal Spirit of Ecstasy', 'Whisper Quiet Cabin'],
    category: 'sedan',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 124
  },
  {
    id: 'rolls-royce-cullinan',
    name: 'Cullinan',
    brand: 'Rolls-Royce',
    price: 55000000,
    image: '/placeholder.svg',
    description: 'The world\'s most luxurious SUV, effortlessly capable.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.2s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Viewing Suite', 'Off-Road Capability', 'Luxury Picnic Setup', 'Bespoke Interior'],
    category: 'suv',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 97
  },
  {
    id: 'rolls-royce-wraith',
    name: 'Wraith',
    brand: 'Rolls-Royce',
    price: 42000000,
    image: '/placeholder.svg',
    description: 'The most powerful Rolls-Royce in history.',
    specifications: {
      engine: '6.6L Twin-Turbo V12',
      power: '624 HP',
      acceleration: '0-100 km/h in 4.4s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Fastback Silhouette', 'Satellite Aided Transmission', 'Starlight Headliner', 'Suicide Doors'],
    category: 'coupe',
    year: 2023,
    inStock: true,
    rating: 4.9,
    reviews: 76
  },
  {
    id: 'rolls-royce-dawn',
    name: 'Dawn',
    brand: 'Rolls-Royce',
    price: 48000000,
    image: '/placeholder.svg',
    description: 'The sexiest Rolls-Royce ever built.',
    specifications: {
      engine: '6.6L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.9s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Silent Hood', 'Air Collar', 'Inspired by Fashion', 'Open-Top Luxury'],
    category: 'convertible',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 63
  },
  {
    id: 'rolls-royce-spectre',
    name: 'Spectre',
    brand: 'Rolls-Royce',
    price: 70000000,
    image: '/placeholder.svg',
    description: 'The first ultra-luxury electric super coupé.',
    specifications: {
      engine: 'Dual Electric Motors',
      power: '577 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '250 km/h',
      fuelType: 'Electric',
      transmission: 'Single-Speed Automatic'
    },
    features: ['Electric Drivetrain', 'Spirit of Ecstasy Illuminated', 'Theatre Suite', 'Whisper Quiet'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 5.0,
    reviews: 34
  },
  {
    id: 'rolls-royce-phantom-ewb',
    name: 'Phantom Extended',
    brand: 'Rolls-Royce',
    price: 75000000,
    image: '/placeholder.svg',
    description: 'Extended wheelbase for ultimate rear passenger luxury.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.4s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Extended Wheelbase', 'Partition Glass', 'Executive Seating', 'Champagne Cooler'],
    category: 'sedan',
    year: 2024,
    inStock: true,
    rating: 5.0,
    reviews: 28
  },
  {
    id: 'rolls-royce-ghost-ewb',
    name: 'Ghost Extended',
    brand: 'Rolls-Royce',
    price: 52000000,
    image: '/placeholder.svg',
    description: 'Extended wheelbase Ghost for enhanced rear comfort.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.9s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Extended Legroom', 'Rear Entertainment', 'Massage Seats', 'Privacy Glass'],
    category: 'sedan',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 41
  },
  {
    id: 'rolls-royce-boat-tail',
    name: 'Boat Tail',
    brand: 'Rolls-Royce',
    price: 200000000,
    image: '/placeholder.svg',
    description: 'The world\'s most expensive new car, completely bespoke.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.0s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Completely Bespoke', 'Hosting Suite', 'Unique Design', 'Ultra Exclusive'],
    category: 'convertible',
    year: 2024,
    inStock: false,
    rating: 5.0,
    reviews: 3
  },
  {
    id: 'rolls-royce-silver-shadow',
    name: 'Silver Shadow',
    brand: 'Rolls-Royce',
    price: 35000000,
    image: '/placeholder.svg',
    description: 'Classic luxury sedan with timeless appeal.',
    specifications: {
      engine: '6.2L V8',
      power: '220 HP',
      acceleration: '0-100 km/h in 10.9s',
      topSpeed: '185 km/h',
      fuelType: 'Petrol',
      transmission: '3-Speed Automatic'
    },
    features: ['Classic Design', 'Traditional Luxury', 'Vintage Appeal', 'Collector\'s Item'],
    category: 'sedan',
    year: 2023,
    inStock: true,
    rating: 4.4,
    reviews: 52
  },

  // Ferrari Cars
  {
    id: 'ferrari-sf90-stradale',
    name: 'SF90 Stradale',
    brand: 'Ferrari',
    price: 38000000,
    originalPrice: 42000000,
    image: '/placeholder.svg',
    description: 'Ferrari\'s first series-production plug-in hybrid.',
    specifications: {
      engine: '4.0L Twin-Turbo V8 + Electric',
      power: '986 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '340 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Hybrid Technology', 'Active Aerodynamics', 'Side Slip Control', 'Manettino Switch'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: 'ferrari-f8-tributo',
    name: 'F8 Tributo',
    brand: 'Ferrari',
    price: 28000000,
    image: '/placeholder.svg',
    description: 'The most powerful V8 in Ferrari history.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Aerodynamic Excellence', 'Variable Torque Management', 'Ferrari Dynamic Enhancer', 'Carbon Fiber Body'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 187
  },
  {
    id: 'ferrari-roma',
    name: 'Roma',
    brand: 'Ferrari',
    price: 22000000,
    image: '/placeholder.svg',
    description: 'New front-mid-engined 2+ coupé.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '320 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Elegant Design', 'Grand Touring Comfort', 'Advanced Infotainment', 'Refined Interior'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'ferrari-portofino-m',
    name: 'Portofino M',
    brand: 'Ferrari',
    price: 24000000,
    image: '/placeholder.svg',
    description: 'The evolution of Ferrari\'s entry-level convertible.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.45s',
      topSpeed: '320 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Retractable Hard Top', 'Magneride Suspension', 'Race Mode', 'Wind Deflector'],
    category: 'convertible',
    year: 2024,
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'ferrari-812-superfast',
    name: '812 Superfast',
    brand: 'Ferrari',
    price: 35000000,
    image: '/placeholder.svg',
    description: 'The most powerful Ferrari production car ever.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '789 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['V12 Engine', 'Rear-Wheel Steering', 'Advanced Traction Control', 'Aerodynamic Efficiency'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 'ferrari-296-gtb',
    name: '296 GTB',
    brand: 'Ferrari',
    price: 26000000,
    image: '/placeholder.svg',
    description: 'The evolution of the Ferrari berlinetta.',
    specifications: {
      engine: '2.9L Twin-Turbo V6 + Electric',
      power: '818 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '330 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Hybrid V6', 'Pure Electric Mode', 'Dynamic Mode', 'Advanced Aerodynamics'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 132
  },
  {
    id: 'ferrari-purosangue',
    name: 'Purosangue',
    brand: 'Ferrari',
    price: 45000000,
    image: '/placeholder.svg',
    description: 'Ferrari\'s first four-door four-seater.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '715 HP',
      acceleration: '0-100 km/h in 3.3s',
      topSpeed: '310 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Four Doors', 'Active Suspension', 'Four-Wheel Steering', 'Ferrari DNA'],
    category: 'suv',
    year: 2024,
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'ferrari-daytona-sp3',
    name: 'Daytona SP3',
    brand: 'Ferrari',
    price: 85000000,
    image: '/placeholder.svg',
    description: 'Limited series inspired by Ferrari\'s racing heritage.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '829 HP',
      acceleration: '0-100 km/h in 2.85s',
      topSpeed: '340+ km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Limited Edition', 'Racing Heritage', 'Extreme Performance', 'Unique Design'],
    category: 'coupe',
    year: 2024,
    inStock: false,
    rating: 5.0,
    reviews: 23
  },
  {
    id: 'ferrari-monza-sp1',
    name: 'Monza SP1',
    brand: 'Ferrari',
    price: 95000000,
    image: '/placeholder.svg',
    description: 'Single-seat speedster from the Icona series.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '810 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '300+ km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Single Seat', 'No Windscreen', 'Virtual Wind Shield', 'Ultra Exclusive'],
    category: 'convertible',
    year: 2024,
    inStock: false,
    rating: 5.0,
    reviews: 8
  },
  {
    id: 'ferrari-488-pista',
    name: '488 Pista',
    brand: 'Ferrari',
    price: 32000000,
    image: '/placeholder.svg',
    description: 'Track-focused evolution of the 488 GTB.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.85s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Track Focus', 'Aerodynamic Package', 'Weight Reduction', 'Racing Technology'],
    category: 'coupe',
    year: 2023,
    inStock: true,
    rating: 4.9,
    reviews: 67
  },

  // Lamborghini Cars
  {
    id: 'lamborghini-huracan-evo',
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    price: 25000000,
    originalPrice: 28000000,
    image: '/placeholder.svg',
    description: 'The evolution of the most successful Lamborghini ever.',
    specifications: {
      engine: '5.2L Naturally Aspirated V10',
      power: '630 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Lamborghini Dinamica Veicolo Integrata', 'Rear-Wheel Steering', 'Torque Vectoring', 'Anima Drive Modes'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'lamborghini-aventador-ultimae',
    name: 'Aventador Ultimae',
    brand: 'Lamborghini',
    price: 42000000,
    image: '/placeholder.svg',
    description: 'The final naturally aspirated V12 Aventador.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '769 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '355 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed ISR'
    },
    features: ['Final Edition', 'Active Aerodynamics', 'Four-Wheel Drive', 'Legendary V12'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 167
  },
  {
    id: 'lamborghini-revuelto',
    name: 'Revuelto',
    brand: 'Lamborghini',
    price: 65000000,
    image: '/placeholder.svg',
    description: 'The first V12 hybrid super sports car.',
    specifications: {
      engine: '6.5L V12 + Electric Motors',
      power: '1001 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '350+ km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Hybrid Technology', '1000+ HP', 'All-Wheel Drive', 'Next Generation Design'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 5.0,
    reviews: 89
  },
  {
    id: 'lamborghini-urus-performante',
    name: 'Urus Performante',
    brand: 'Lamborghini',
    price: 35000000,
    image: '/placeholder.svg',
    description: 'The most powerful SUV ever created.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '657 HP',
      acceleration: '0-100 km/h in 3.3s',
      topSpeed: '306 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    features: ['Rally Mode', 'Carbon Fiber Package', 'Sport Exhaust', 'Track Performance'],
    category: 'suv',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'lamborghini-huracan-spyder',
    name: 'Huracán Spyder',
    brand: 'Lamborghini',
    price: 27000000,
    image: '/placeholder.svg',
    description: 'Open-top driving excitement with V10 power.',
    specifications: {
      engine: '5.2L Naturally Aspirated V10',
      power: '630 HP',
      acceleration: '0-100 km/h in 3.1s',
      topSpeed: '324 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Soft-Top Convertible', 'Wind Deflector', 'Open-Air Experience', 'V10 Sound'],
    category: 'convertible',
    year: 2024,
    inStock: true,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'lamborghini-huracan-sto',
    name: 'Huracán STO',
    brand: 'Lamborghini',
    price: 38000000,
    image: '/placeholder.svg',
    description: 'Super Trofeo Omologata - track-bred road car.',
    specifications: {
      engine: '5.2L Naturally Aspirated V10',
      power: '630 HP',
      acceleration: '0-100 km/h in 3.0s',
      topSpeed: '310 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Track-Focused', 'Aerodynamic Package', 'Weight Reduction', 'Racing Heritage'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 76
  },
  {
    id: 'lamborghini-gallardo',
    name: 'Gallardo',
    brand: 'Lamborghini',
    price: 18000000,
    image: '/placeholder.svg',
    description: 'The best-selling Lamborghini of all time.',
    specifications: {
      engine: '5.2L Naturally Aspirated V10',
      power: '560 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Manual'
    },
    features: ['Classic Design', 'Manual Transmission', 'Pure V10', 'Iconic Status'],
    category: 'coupe',
    year: 2023,
    inStock: true,
    rating: 4.6,
    reviews: 312
  },
  {
    id: 'lamborghini-murcielago',
    name: 'Murciélago',
    brand: 'Lamborghini',
    price: 22000000,
    image: '/placeholder.svg',
    description: 'Legendary V12 supercar with scissor doors.',
    specifications: {
      engine: '6.2L Naturally Aspirated V12',
      power: '570 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '330 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Manual'
    },
    features: ['Scissor Doors', 'V12 Engine', 'Classic Lamborghini', 'Collector\'s Item'],
    category: 'coupe',
    year: 2023,
    inStock: false,
    rating: 4.7,
    reviews: 187
  },
  {
    id: 'lamborghini-diablo',
    name: 'Diablo',
    brand: 'Lamborghini',
    price: 25000000,
    image: '/placeholder.svg',
    description: 'The devil\'s own supercar with timeless design.',
    specifications: {
      engine: '5.7L Naturally Aspirated V12',
      power: '492 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '5-Speed Manual'
    },
    features: ['Iconic Design', 'Pure Manual', 'Vintage Appeal', 'Investment Grade'],
    category: 'coupe',
    year: 2023,
    inStock: true,
    rating: 4.5,
    reviews: 143
  },
  {
    id: 'lamborghini-countach-lpi-800-4',
    name: 'Countach LPI 800-4',
    brand: 'Lamborghini',
    price: 75000000,
    image: '/placeholder.svg',
    description: 'The return of a legend with hybrid technology.',
    specifications: {
      engine: '6.5L V12 + Electric Motor',
      power: '802 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '355 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed ISR'
    },
    features: ['Legendary Return', 'Hybrid Power', 'Limited Production', 'Iconic Wedge Shape'],
    category: 'coupe',
    year: 2024,
    inStock: false,
    rating: 5.0,
    reviews: 34
  },

  // McLaren Cars
  {
    id: 'mclaren-720s',
    name: '720S',
    brand: 'McLaren',
    price: 32000000,
    originalPrice: 35000000,
    image: '/placeholder.svg',
    description: 'Supercar with uncompromising performance and everyday usability.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '341 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Carbon Fiber Monocoque', 'Active Suspension', 'Proactive Chassis Control', 'Dihedral Doors'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 176
  },
  {
    id: 'mclaren-765lt',
    name: '765LT',
    brand: 'McLaren',
    price: 45000000,
    image: '/placeholder.svg',
    description: 'Track-focused evolution of the 720S.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '755 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '330 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['LongTail Design', 'Weight Reduction', 'Track Focus', 'Active Aerodynamics'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 'mclaren-artura',
    name: 'Artura',
    brand: 'McLaren',
    price: 28000000,
    image: '/placeholder.svg',
    description: 'McLaren\'s first series-production High-Performance Hybrid.',
    specifications: {
      engine: '3.0L Twin-Turbo V6 + Electric',
      power: '671 HP',
      acceleration: '0-100 km/h in 3.0s',
      topSpeed: '330 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Dual-Clutch'
    },
    features: ['Hybrid Technology', 'Carbon Fiber Architecture', 'Electric Mode', 'Revolutionary Design'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'mclaren-gt',
    name: 'GT',
    brand: 'McLaren',
    price: 24000000,
    image: '/placeholder.svg',
    description: 'The most comfortable and refined McLaren ever.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '326 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Grand Touring Comfort', 'Practical Storage', 'Refined Suspension', 'Long Distance Cruising'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'mclaren-p1',
    name: 'P1',
    brand: 'McLaren',
    price: 125000000,
    image: '/placeholder.svg',
    description: 'Ultimate expression of McLaren\'s Formula 1 technology.',
    specifications: {
      engine: '3.8L Twin-Turbo V8 + Electric',
      power: '903 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '350 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['F1 Technology', 'Active Aerodynamics', 'DRS System', 'Ultimate Performance'],
    category: 'coupe',
    year: 2023,
    inStock: false,
    rating: 5.0,
    reviews: 67
  },
  {
    id: 'mclaren-senna',
    name: 'Senna',
    brand: 'McLaren',
    price: 95000000,
    image: '/placeholder.svg',
    description: 'The most track-focused McLaren road car ever.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '789 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Extreme Aerodynamics', 'Track-Only Focus', 'Lightweight Construction', 'Racing Heritage'],
    category: 'coupe',
    year: 2024,
    inStock: false,
    rating: 5.0,
    reviews: 43
  },
  {
    id: 'mclaren-600lt',
    name: '600LT',
    brand: 'McLaren',
    price: 38000000,
    image: '/placeholder.svg',
    description: 'LongTail philosophy applied to the Sports Series.',
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '592 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '328 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['LongTail Heritage', 'Top-Exit Exhausts', 'Carbon Fiber Body', 'Track Performance'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.8,
    reviews: 87
  },
  {
    id: 'mclaren-570s',
    name: '570S',
    brand: 'McLaren',
    price: 22000000,
    image: '/placeholder.svg',
    description: 'The accessible supercar with McLaren DNA.',
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '562 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '328 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Sports Series DNA', 'Daily Usability', 'McLaren Performance', 'Accessible Supercar'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 'mclaren-620r',
    name: '620R',
    brand: 'McLaren',
    price: 42000000,
    image: '/placeholder.svg',
    description: 'Road-legal version of the 570S GT4 race car.',
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '610 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '322 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Race Car DNA', 'Track-Focused Setup', 'Aerodynamic Package', 'Limited Production'],
    category: 'coupe',
    year: 2024,
    inStock: true,
    rating: 4.9,
    reviews: 54
  },
  {
    id: 'mclaren-speedtail',
    name: 'Speedtail',
    brand: 'McLaren',
    price: 150000000,
    image: '/placeholder.svg',
    description: 'McLaren\'s first Hyper-GT with three seats.',
    specifications: {
      engine: '4.0L Twin-Turbo V8 + Electric',
      power: '1035 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '403 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Dual-Clutch'
    },
    features: ['Three-Seat Layout', 'Teardrop Shape', 'Velocity Mode', 'Ultra Exclusive'],
    category: 'coupe',
    year: 2024,
    inStock: false,
    rating: 5.0,
    reviews: 19
  }
];

// Helper functions to get cars by brand
export const getCarsByBrand = (brandId: string): Car[] => {
  return cars.filter(car => car.brand.toLowerCase().replace(/[^a-z0-9]/g, '-') === brandId);
};

export const getBrandById = (brandId: string): Brand | undefined => {
  return brands.find(brand => brand.id === brandId);
};

export const getFeaturedCars = (): Car[] => {
  return cars.filter(car => car.originalPrice).slice(0, 6);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};


export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  specifications: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    fuelType: string;
    transmission: string;
  };
  features: string[];
  category: 'sedan' | 'suv' | 'coupe' | 'convertible' | 'hatchback';
  year: number;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  founded: number;
  headquarters: string;
  website: string;
}

export interface CartItem {
  car: Car;
  quantity: number;
}

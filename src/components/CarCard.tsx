
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types/car';
import { formatPrice } from '../data/cars';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, featured = false }) => {
  const { addToCart } = useCart();

  return (
    <div className={`luxury-card rounded-xl overflow-hidden ${featured ? 'animate-glow' : ''} group`}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {car.originalPrice && (
            <Badge className="bg-destructive text-destructive-foreground">
              Sale
            </Badge>
          )}
          {!car.inStock && (
            <Badge variant="secondary">
              Out of Stock
            </Badge>
          )}
        </div>
        {/* Brand Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground">
            {car.brand}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Year */}
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {car.name}
          </h3>
          <p className="text-foreground/60 text-sm">{car.year} Model</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(car.rating)
                    ? 'text-primary fill-current'
                    : 'text-foreground/20'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-foreground/70">
            {car.rating} ({car.reviews} reviews)
          </span>
        </div>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-foreground/70">
            <span className="font-medium">Engine:</span> {car.specifications.engine.split(' ')[0]}
          </div>
          <div className="text-foreground/70">
            <span className="font-medium">Power:</span> {car.specifications.power}
          </div>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(car.price)}
            </span>
            {car.originalPrice && (
              <span className="text-lg text-foreground/50 line-through">
                {formatPrice(car.originalPrice)}
              </span>
            )}
          </div>
          {car.originalPrice && (
            <p className="text-sm text-green-500">
              Save {formatPrice(car.originalPrice - car.price)}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button
            onClick={() => addToCart(car)}
            disabled={!car.inStock}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

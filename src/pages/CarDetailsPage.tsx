
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { cars, formatPrice } from '../data/cars';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft, ShoppingCart, Star, Check, X } from 'lucide-react';

const CarDetailsPage = () => {
  const { carId } = useParams<{ carId: string }>();
  const car = cars.find(c => c.id === carId);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Car Not Found</h1>
          <Link to="/cars">
            <Button>View All Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Mock additional images for demo
  const images = [car.image, car.image, car.image, car.image];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/cars">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cars
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="luxury-card rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={images[selectedImage]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`luxury-card rounded-lg overflow-hidden aspect-square ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {car.brand}
                </Badge>
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
              
              <h1 className="text-4xl font-bold text-foreground mb-2">{car.name}</h1>
              <p className="text-foreground/70 text-lg">{car.year} Model</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(car.rating)
                        ? 'text-primary fill-current'
                        : 'text-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-foreground/70">
                {car.rating} ({car.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(car.price)}
                </span>
                {car.originalPrice && (
                  <span className="text-2xl text-foreground/50 line-through">
                    {formatPrice(car.originalPrice)}
                  </span>
                )}
              </div>
              {car.originalPrice && (
                <p className="text-lg text-green-500 font-medium">
                  You save {formatPrice(car.originalPrice - car.price)}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              {car.description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {car.inStock ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-500 font-medium">In Stock</span>
                </>
              ) : (
                <>
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-red-500 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button
                onClick={() => addToCart(car)}
                disabled={!car.inStock}
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {car.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Link to="/cart" className="flex-1">
                <Button variant="outline" size="lg" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                  View Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-effect">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="luxury-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-border/30">
                      <span className="font-medium text-foreground/80 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-primary font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-8">
              <div className="luxury-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Premium Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="luxury-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Mock reviews */}
                  {[
                    {
                      name: 'Rajesh Kumar',
                      rating: 5,
                      comment: 'Absolutely stunning vehicle. The luxury and performance exceed expectations.',
                      date: 'December 2024'
                    },
                    {
                      name: 'Priya Sharma',
                      rating: 5,
                      comment: 'Best purchase I\'ve ever made. The attention to detail is incredible.',
                      date: 'November 2024'
                    },
                    {
                      name: 'Arjun Patel',
                      rating: 4,
                      comment: 'Outstanding car with amazing features. Highly recommended!',
                      date: 'November 2024'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-border/30 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{review.name}</div>
                            <div className="text-sm text-foreground/60">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-primary fill-current'
                                  : 'text-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground/80">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;

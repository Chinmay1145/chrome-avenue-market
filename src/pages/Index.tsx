
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import CarCard from '../components/CarCard';
import BackgroundSlider from '../components/BackgroundSlider';
import { brands, getFeaturedCars } from '../data/cars';
import { ChevronDown, Star, ShoppingCart } from 'lucide-react';

const Index = () => {
  const featuredCars = getFeaturedCars();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BackgroundSlider />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            Premium Luxury Automobiles
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Extraordinary</span>
            <br />
            <span className="text-white drop-shadow-lg">Luxury Cars</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
            Discover the world's most prestigious automotive brands. From Bentley to Ferrari, 
            experience the pinnacle of luxury, performance, and craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/cars">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop All Cars
              </Button>
            </Link>
            <Link to="#featured">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-8">
                View Featured
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Premium Brands
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Luxury <span className="text-gradient">Automotive</span> Excellence
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore our curated collection of the world's most prestigious automotive brands, 
              each representing the pinnacle of luxury and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <Link
                key={brand.id}
                to={`/brand/${brand.id}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="luxury-card p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2">
                    Est. {brand.founded}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Special Offers
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Featured <span className="text-gradient">Luxury</span> Collection
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Handpicked selection of our finest luxury automobiles, 
              now available with exclusive pricing and premium benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CarCard car={car} featured />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-8">
                View All Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '55+', label: 'Luxury Cars' },
              { number: '5', label: 'Premium Brands' },
              { number: '24/7', label: 'Concierge Service' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Experience <span className="text-gradient">Luxury</span>?
            </h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Join thousands of satisfied customers who have discovered the ultimate in automotive excellence. 
              Your dream car awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cars">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

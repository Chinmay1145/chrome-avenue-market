
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import CarCard from '../components/CarCard';
import { getBrandById, getCarsByBrand } from '../data/cars';
import { ArrowLeft, Calendar, MapPin, Globe } from 'lucide-react';

const BrandPage = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brandId ? getBrandById(brandId) : null;
  const cars = brandId ? getCarsByBrand(brandId) : [];

  if (!brand) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Brand Not Found</h1>
          <Link to="/cars">
            <Button>View All Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const inStockCars = cars.filter(car => car.inStock);
  const outOfStockCars = cars.filter(car => !car.inStock);

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Link to="/cars">
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Cars
          </Button>
        </Link>
      </div>

      {/* Brand Header */}
      <section className="relative py-20 mb-12 bg-luxury-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center animate-fade-in">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-16 h-16 object-contain"
            />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-foreground animate-fade-in">
            <span className="text-gradient">{brand.name}</span>
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            {brand.description}
          </p>

          {/* Brand Info */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground/70 animate-fade-in">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Founded {brand.founded}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{brand.headquarters}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>{brand.website}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-effect p-6 rounded-xl text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">{cars.length}</div>
            <div className="text-foreground/70">Total Models</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center animate-fade-in">
            <div className="text-3xl font-bold text-green-500 mb-2">{inStockCars.length}</div>
            <div className="text-foreground/70">In Stock</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center animate-fade-in">
            <div className="text-3xl font-bold text-foreground/50 mb-2">{outOfStockCars.length}</div>
            <div className="text-foreground/70">Coming Soon</div>
          </div>
        </div>

        {/* Available Cars */}
        {inStockCars.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                Available Now
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                {inStockCars.length} Model{inStockCars.length !== 1 ? 's' : ''} Available
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inStockCars.map((car, index) => (
                <div
                  key={car.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Out of Stock Cars */}
        {outOfStockCars.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Badge className="bg-foreground/20 text-foreground/70 border-foreground/30">
                Coming Soon
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                {outOfStockCars.length} Model{outOfStockCars.length !== 1 ? 's' : ''} Coming Soon
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outOfStockCars.map((car, index) => (
                <div
                  key={car.id}
                  className="animate-fade-in opacity-60"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No Cars */}
        {cars.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No Cars Available</h3>
            <p className="text-foreground/70 mb-6">
              We're working on adding {brand.name} models to our collection.
            </p>
            <Link to="/cars">
              <Button className="bg-primary hover:bg-primary/90">
                View All Cars
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;

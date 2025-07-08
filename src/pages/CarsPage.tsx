
import React, { useState, useMemo } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import CarCard from '../components/CarCard';
import { cars, brands } from '../data/cars';
import { Search, Filter } from 'lucide-react';

const CarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || car.brand.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedBrand;
      const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = car.price >= min && car.price <= max;
        } else {
          matchesPrice = car.price >= min;
        }
      }

      return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedBrand, selectedCategory, priceRange, sortBy]);

  const categories = ['sedan', 'suv', 'coupe', 'convertible', 'hatchback'];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-fade-in">
            Complete Collection
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-foreground animate-fade-in">
            Luxury <span className="text-gradient">Car</span> Collection
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in">
            Discover our complete collection of {cars.length} luxury automobiles from the world's most prestigious brands.
          </p>
        </div>

        {/* Filters */}
        <div className="glass-effect rounded-xl p-6 mb-8 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>

            {/* Brand Filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="bg-background/50 border-primary/20">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map(brand => (
                  <SelectItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background/50 border-primary/20">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-background/50 border-primary/20">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-30000000">Under ₹3 Crore</SelectItem>
                <SelectItem value="30000000-50000000">₹3-5 Crore</SelectItem>
                <SelectItem value="50000000-100000000">₹5-10 Crore</SelectItem>
                <SelectItem value="100000000">Above ₹10 Crore</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-background/50 border-primary/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="year">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-foreground/70">
            Showing {filteredAndSortedCars.length} of {cars.length} cars
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedBrand('all');
              setSelectedCategory('all');
              setPriceRange('all');
              setSortBy('name');
            }}
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
        </div>

        {/* Cars Grid */}
        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedCars.map((car, index) => (
              <div
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No Cars Found</h3>
            <p className="text-foreground/70 mb-6">
              Try adjusting your filters to see more results.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedBrand('all');
                setSelectedCategory('all');
                setPriceRange('all');
                setSortBy('name');
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;

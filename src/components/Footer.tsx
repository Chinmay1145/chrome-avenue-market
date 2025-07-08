
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-gradient border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gradient">LuxuryCars</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Your premier destination for the world's most exclusive luxury automobiles. 
              Experience the pinnacle of automotive excellence.
            </p>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Brands</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/brand/bentley" className="text-foreground/70 hover:text-primary transition-colors">
                Bentley
              </Link>
              <Link to="/brand/rolls-royce" className="text-foreground/70 hover:text-primary transition-colors">
                Rolls-Royce
              </Link>
              <Link to="/brand/ferrari" className="text-foreground/70 hover:text-primary transition-colors">
                Ferrari
              </Link>
              <Link to="/brand/lamborghini" className="text-foreground/70 hover:text-primary transition-colors">
                Lamborghini
              </Link>
              <Link to="/brand/mclaren" className="text-foreground/70 hover:text-primary transition-colors">
                McLaren
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/cars" className="text-foreground/70 hover:text-primary transition-colors">
                All Cars
              </Link>
              <Link to="/cart" className="text-foreground/70 hover:text-primary transition-colors">
                Shopping Cart
              </Link>
              <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-foreground/70 text-sm">
              <p>📍 Luxury Car District</p>
              <p>Mumbai, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@luxurycars.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 mt-8 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © 2024 LuxuryCars. All rights reserved. | Powered by Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

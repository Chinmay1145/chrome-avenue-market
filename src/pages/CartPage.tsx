
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../data/cars';
import { Plus, Minus, Trash2, ShoppingCart, CreditCard, CheckCircle, Truck, Calendar, Award, Gift } from 'lucide-react';
import { toast } from 'sonner';
import CheckoutForm from '../components/CheckoutForm';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Mock checkout process
  const handleCheckout = async (formData: any) => {
    setIsCheckingOut(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setOrderPlaced(true);
    setIsCheckingOut(false);
    setShowCheckoutForm(false);
    clearCart();
    
    toast.success('Payment successful! Your order is confirmed 🎉');
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Success Animation */}
            <div className="text-center mb-12">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-fade-in shadow-2xl">
                  <CheckCircle className="w-16 h-16 text-white animate-scale-in" />
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-green-400 animate-ping opacity-20"></div>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
                🎉 Order Confirmed! 🎉
              </h1>
              
              <div className="text-xl text-foreground/80 mb-8 animate-fade-in">
                <p className="mb-2">Thank you for choosing our luxury cars!</p>
                <p>Your dream car is on its way.</p>
              </div>
            </div>

            {/* Order Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="luxury-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Free Delivery</h3>
                <p className="text-sm text-foreground/70">Your car will be delivered to your doorstep within 7-14 business days</p>
              </div>
              
              <div className="luxury-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Installation Scheduled</h3>
                <p className="text-sm text-foreground/70">Our team will contact you within 24 hours to schedule delivery</p>
              </div>
              
              <div className="luxury-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Premium Warranty</h3>
                <p className="text-sm text-foreground/70">5-year comprehensive warranty included with your purchase</p>
              </div>
            </div>

            {/* Special Offer */}
            <div className="luxury-card p-8 mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-4 mb-4">
                <Gift className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Congratulations!</h3>
                  <p className="text-foreground/80">You've earned exclusive benefits with this purchase</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Free premium car accessories worth ₹50,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Lifetime maintenance support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">VIP customer service priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Exclusive invites to luxury car events</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <Link to="/cars">
                <Button size="lg" className="bg-primary hover:bg-primary/90 min-w-[200px]">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 min-w-[200px]">
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Email Confirmation */}
            <div className="text-center mt-8 p-4 bg-muted/30 rounded-lg animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <p className="text-sm text-foreground/70">
                📧 Confirmation email sent to your registered email address
              </p>
              <p className="text-xs text-foreground/60 mt-1">
                Order ID: #LUX{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="luxury-card p-12 rounded-xl animate-fade-in">
              <ShoppingCart className="w-24 h-24 text-foreground/30 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-foreground/70 text-lg mb-8">
                Discover our collection of luxury automobiles and add your dream car to the cart.
              </p>
              <Link to="/cars">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Luxury Cars
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.18; // 18% GST
  const finalPrice = totalPrice + tax;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-fade-in">
            Shopping Cart
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-foreground animate-fade-in">
            Your <span className="text-gradient">Luxury</span> Selection
          </h1>
          <p className="text-foreground/70 animate-fade-in">
            {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <div
                key={item.car.id}
                className="luxury-card p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-6">
                  {/* Car Image */}
                  <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.car.image}
                      alt={item.car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Car Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {item.car.name}
                        </h3>
                        <p className="text-foreground/70">{item.car.brand} • {item.car.year}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.car.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.car.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.car.id, parseInt(e.target.value) || 1)}
                          className="w-16 text-center h-8"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.car.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">
                          {formatPrice(item.car.price * item.quantity)}
                        </div>
                        <div className="text-sm text-foreground/60">
                          {formatPrice(item.car.price)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-between items-center pt-6">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-destructive border-destructive/30 hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
              <Link to="/cars">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="luxury-card p-6 rounded-xl animate-fade-in sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-foreground/80">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                
                <div className="flex justify-between text-foreground/80">
                  <span>GST (18%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                
                <div className="border-t border-border/30 pt-4">
                  <div className="flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(finalPrice)}</span>
                  </div>
                </div>
              </div>

              <Dialog open={showCheckoutForm} onOpenChange={setShowCheckoutForm}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      Complete Your Purchase
                    </DialogTitle>
                  </DialogHeader>
                  <CheckoutForm
                    totalAmount={finalPrice}
                    onSubmit={handleCheckout}
                    isProcessing={isCheckingOut}
                  />
                </DialogContent>
              </Dialog>

              <p className="text-xs text-foreground/60 mt-4 text-center">
                Secure checkout with 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

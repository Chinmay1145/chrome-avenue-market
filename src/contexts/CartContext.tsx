
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Car, CartItem } from '../types/car';
import { toast } from 'sonner';

interface CartContextType {
  items: CartItem[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: string) => void;
  updateQuantity: (carId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('luxuryCarsCart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('luxuryCarsCart', JSON.stringify(items));
  }, [items]);

  const addToCart = (car: Car) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.car.id === car.id);
      if (existingItem) {
        toast.success(`Updated ${car.name} quantity in cart`);
        return prevItems.map(item =>
          item.car.id === car.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`Added ${car.name} to cart`);
        return [...prevItems, { car, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (carId: string) => {
    setItems(prevItems => {
      const removedItem = prevItems.find(item => item.car.id === carId);
      if (removedItem) {
        toast.success(`Removed ${removedItem.car.name} from cart`);
      }
      return prevItems.filter(item => item.car.id !== carId);
    });
  };

  const updateQuantity = (carId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(carId);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.car.id === carId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.car.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

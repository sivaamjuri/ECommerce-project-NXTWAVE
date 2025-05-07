
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cartItems: number[];
  addToCart: (productId: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart,
      cartCount: cartItems.length
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

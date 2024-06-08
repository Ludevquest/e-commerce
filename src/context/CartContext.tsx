import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems([...items, item]);
  };

  const removeFromCart = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};

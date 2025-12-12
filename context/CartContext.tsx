// my-app/context/CartContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// --- Tipos de Datos ---
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface ProductToAdd extends Omit<CartItem, 'quantity'> {}

// --- Tipos del Contexto ---
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: ProductToAdd) => void;
  removeFromCart: (id: number) => void;
  // Añade aquí más funciones si las necesitas
}

// 1. Crear el Contexto, inicializado como 'undefined'
const CartContext = createContext<CartContextType | undefined>(undefined);

// --- Componente Provider ---
interface CartProviderProps {
  children: ReactNode; // Corregido: tipificación de 'children'
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Función corregida: tipifica el parámetro 'productToAdd'
  const addToCart = (productToAdd: ProductToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Exportamos el Contexto para que el hook pueda importarlo
export default CartContext;
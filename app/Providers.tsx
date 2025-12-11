// my-app/app/Providers.tsx
'use client';
import { CartProvider } from '../context/CartContext';

// Tipificamos los props, incluyendo children
export function Providers({ children }: { children: React.ReactNode }) { // <-- Corregido: Tipificamos 'children'
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
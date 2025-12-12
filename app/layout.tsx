// my-app/app/layout.tsx
import { CartProvider } from '@/context/CartContext';
import './globals.css'
import { Providers } from './Providers'; 
import CartIcon from '@/components/CartIcon';
import CartModal from '@/components/CartModal';

// Tipifica children para Layouts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { // Tipificamos
  return (
   <html lang="es">
      <body>
        <CartProvider>
          <CartIcon />
          <CartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
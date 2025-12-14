// my-app/app/layout.tsx
import { CartProvider } from '@/context/CartContext';
import './globals.css'
import CartIcon from '@/components/CartIcon';
import CartModal from '@/components/CartModal';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

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
          <Navbar />
          <CartIcon />
          <CartModal />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import CartIcon from "@/components/CartIcon";
import CartModal from "@/components/CartModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "Base Market",
  description: "E-commerce Next.js + React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <CartIcon />
          <CartModal />
          <div className="flex justify-center">{children}</div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}

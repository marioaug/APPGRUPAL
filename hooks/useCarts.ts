// my-app/hooks/useCart.ts
'use client';


import CartContext from "@/context/CartContext";
import { useContext } from "react";

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};

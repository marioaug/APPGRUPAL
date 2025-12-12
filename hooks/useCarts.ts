// my-app/hooks/useCart.ts
'use client';

// 1. Importar useContext
import { useContext } from 'react';
// 2. Importar CartContext 
import CartContext from '../context/CartContext'; 

export const useCart = () => {
    // 3. Usa useContext con el contexto importado
    const ctx = useContext(CartContext); 

    if (!ctx) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }

    return ctx;
};
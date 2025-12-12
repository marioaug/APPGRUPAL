'use client';

import { useFetch } from "../hooks/useFetch";

interface Product { 
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function ProductList() {
    // URL de la API de la consigna
    const { data: products, loading } = useFetch<Product[]>("https://fakestoreapi.com/products?limit=10");
    // ...

    if (loading) {
        return <div>Cargando productos...</div>; 
    }

    if (!products || products.length === 0) {
    return <div>No hay productos.</div>;
  }

  return (
  <div>
    <h2>Productos</h2>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
      {products.map(p => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          
          <img
            src={p.image}
            alt={p.title}
            style={{ width: "100%", height: 150, objectFit: "contain" }}
          />

          <h4>{p.title}</h4>
          <p>${p.price}</p>

          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  </div>
)};

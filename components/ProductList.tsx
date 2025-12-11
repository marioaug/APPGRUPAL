'use client';

import { useFetch } from "../hooks/useFetch";
import { useCart } from "../hooks/useCart";

export default function ProductList() {
  const { data: products, loading } = useFetch("https://fakestoreapi.com/products");
  const { addToCart } = useCart();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products?.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: 20 }}>
          <img src={product.image} width={150} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}
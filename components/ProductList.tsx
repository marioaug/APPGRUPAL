'use client';

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCart } from "@/hooks/useCarts";
import styles from "./ProductList.module.css";

interface Product { 
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductList() {
  const { data: products, loading } = useFetch<Product[]>(
    "https://fakestoreapi.com/products?limit=10"
  );
  const { addToCart } = useCart();

  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false); // ⬅ controla el menú

  const categories = [
    { label: "Todas", value: "all" },
    { label: "Hombre", value: "men's clothing" },
    { label: "Mujer", value: "women's clothing" },
    { label: "Joyas", value: "jewelery" },
    { label: "Electrónica", value: "electronics" }
  ];

  if (loading) return <div>Cargando productos...</div>;
  if (!products) return <div>No hay productos.</div>;

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const handleSelect = (value: string) => {
    setFilter(value);
    setOpen(false); // cerrar menú después de elegir
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Productos destacados</h1>

      {/* ⭐ BOTÓN FILTER + DESPLEGABLE ⭐ */}
   <div className={styles.filterWrapper}>
  <button
    onClick={() => setOpen(!open)}
    className={styles.filterBtn}
  >
    Filtrar ▼
  </button>

  {open && (
    <div className={styles.filterMenu}>
      {categories.map((c) => (
        <button
          key={c.value}
          className={styles.filterOption}
          onClick={() => handleSelect(c.value)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )}
</div>


      <div className={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} className={styles.card}>
            <img src={p.image} alt={p.title} className={styles.image} />
            <h4 className={styles.productTitle}>{p.title}</h4>
            <p className={styles.price}>${p.price}</p>

            <button
              className={styles.button}
              onClick={() =>
                addToCart({
                  id: p.id,
                  title: p.title,
                  price: p.price,
                  image: p.image,
                })
              }
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

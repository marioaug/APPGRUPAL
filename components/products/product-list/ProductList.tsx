"use client";

import { useMemo, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useCart } from "@/hooks/useCarts";
import styles from "./ProductList.module.css";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import ProductsEmpty from "../products-empty/ProductsEmpty";
import ProductsLoading from "../products-loading/ProductsLoading";
import { FilterDropdown } from "@/components/filter-dropdown/FilterDropdown";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const CATEGORIES = [
  { label: "Todas", value: "all" },
  { label: "Hombre", value: "men's clothing" },
  { label: "Mujer", value: "women's clothing" },
  { label: "Joyas", value: "jewelery" },
  { label: "Electrónica", value: "electronics" },
];

export default function ProductList() {
  const { data: products, loading } = useFetch<Product[]>(
    "https://fakestoreapi.com/products?limit=15"
  );
  const { addToCart } = useCart();

  const [filter, setFilter] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  if (loading) return <ProductsLoading />;
  if (!products || filteredProducts.length === 0) return <ProductsEmpty />;

  return (
    <div className={styles.container}>
      <FilterDropdown
        options={CATEGORIES}
        value={filter}
        onChange={setFilter}
      />
      <div className={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} className={styles.card}>
            <Image
              src={p.image}
              width={300}
              height={300}
              alt={p.title}
              className={styles.image}
            />

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

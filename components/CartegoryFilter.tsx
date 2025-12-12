'use client';

import { useState } from 'react';

export default function CategoryFilter({ onProductsChange }: { onProductsChange: (p: any[]) => void }) {
  const [active, setActive] = useState('all');

  const handleClick = async (category: string) => {
    setActive(category);

    const url =
      category === 'all'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${category}`;

    const res = await fetch(url);
    const data = await res.json();

    onProductsChange(data);
  };

  return (
    <div className="flex gap-3 my-4">
      <button onClick={() => handleClick('all')}>Todo</button>
      <button onClick={() => handleClick('jewelery')}>Joyas</button>
      <button onClick={() => handleClick("men's clothing")}>Ropa</button>
      <button onClick={() => handleClick('electronics')}>Electrónica</button>
    </div>
  );
}

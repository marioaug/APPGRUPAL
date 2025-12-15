"use client";

import { useCart } from "@/hooks/useCarts";
import styles from "./CartIcon.module.css";
import { IoCartOutline } from "react-icons/io5";

export default function CartIcon() {
  const { cartItems, toggleCart } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className={styles.cartBtn} onClick={toggleCart}>
      <IoCartOutline className="w-10 h-10" />

      {totalQuantity > 0 && (
        <span className={styles.badge}>{totalQuantity}</span>
      )}
    </button>
  );
}

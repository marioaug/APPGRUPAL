'use client';

'use client';

import { useCart } from "@/hooks/useCarts";
import styles from "./CartModal.module.css";

export default function CartModal() {
  const { cartItems, isOpen, closeCart, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <div className={styles.modal}>
        <h2> Ticket de compra</h2>

        <button className={styles.closeBtn} onClick={closeCart}>✕</button>

        <div className={styles.list}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.row}>
              <div>
                <p className={styles.name}>{item.title}</p>
                <span>{item.quantity} x ${item.price.toFixed(2)}</span>
              </div>

              <button
                className={styles.remove}
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <hr />

        <div className={styles.total}>
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

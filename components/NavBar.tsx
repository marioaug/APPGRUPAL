import Link from "next/link";
import styles from "./Navbar.module.css";
import CartIcon from "./CartIcon";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            BASE MARKET
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/products">Procutos</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        <div className={styles.actions}>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}

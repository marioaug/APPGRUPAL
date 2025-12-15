"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>BASE MARKET</h2>
          <p>Tu tienda online de confianza</p>
        </div>

        <nav className={styles.links}>
          <Link href="/">Inicio</Link>
          <Link href="/products">Productos</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        <div className={styles.copy}>
          © {new Date().getFullYear()} BASEMARKET. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

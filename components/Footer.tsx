// creando el footer
'use client';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.brand}>
          <h2>APPGRUPAL</h2>
          <p>Tu tienda online de confianza</p>
        </div>

        <nav className={styles.links}>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </nav>

        <div className={styles.copy}>
          © {new Date().getFullYear()} APPGRUPAL. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
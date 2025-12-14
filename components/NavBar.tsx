import Link from 'next/link';
import styles from './Navbar.module.css';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          APPGRUPAL
        </Link>

        {/* Navegación */}
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/products">Productos</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        {/* Acciones */}
        <div className={styles.actions}>
          <CartIcon />
        </div>

      </div>
    </header>
  );
}
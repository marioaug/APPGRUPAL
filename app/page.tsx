// my-app/app/page.tsx
import ProductList from '../components/ProductList';
// import Cart from '../components/Cart';

export default function HomePage() {
  return (
    <main style={{ padding: '20px' }}>
      {/* <h1>Tienda Dinámica</h1> */}
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ flex: 3 }}>
            <ProductList /> {/* Muestra productos */}
        </div>
        {/* <div style={{ flex: 1 }}>
            <Cart /> {/* Muestra el carrito (estado global) */}
        {/* </div> */} */
      </div>
    </main>
  );
}
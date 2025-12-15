import ProductList from "../components/products/product-list/ProductList";

export default function HomePage() {
  return (
    <main className="max-w-5xl p-6 w-full">
      <div>
        <h1 className="m-5 text-4xl font-bold text-center uppercase">
          Productos destacados
        </h1>

        <div className="p-6 w-full">
          <ProductList />
        </div>
      </div>
    </main>
  );
}

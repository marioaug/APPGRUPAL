import ProductList from "@/components/products/product-list/ProductList";

export default function ProductsPage() {
  return (
    <section className="max-w-5xl p-6 w-full">
      <h1 className="m-5 text-4xl font-bold text-center uppercase">
        Productos
      </h1>
      <ProductList />
    </section>
  );
}

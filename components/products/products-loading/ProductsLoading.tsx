import { TbLoader2 } from "react-icons/tb";

const ProductsLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex items-center justify-center">
        <TbLoader2 className="h-32 w-32 animate-spin text-gray-400" />
      </div>
      <h2 className="text-3xl font-semibold text-gray-900">
        Cargando productos
      </h2>
      <p className="mt-3 max-w-sm text-md text-gray-500">
        Estamos buscando los mejores productos para vos.
      </p>
      <div className="mt-6 h-px w-24 bg-gray-200" />
    </div>
  );
};

export default ProductsLoading;

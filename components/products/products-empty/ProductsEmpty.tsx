import { TbFaceIdError } from "react-icons/tb";

const ProductsEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex items-center justify-center">
        <TbFaceIdError className="h-40 w-40" />
      </div>
      <h2 className="text-3xl font-semibold text-gray-900">
        No hay productos para mostrar
      </h2>
      <p className="mt-3 max-w-sm text-md text-gray-500">
        No encontramos productos con los filtros seleccionados. Probá cambiarlos
        o volvé más tarde.
      </p>
      <div className="mt-6 h-px w-24 bg-gray-200" />
    </div>
  );
};

export default ProductsEmpty;

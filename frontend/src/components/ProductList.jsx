
import "../styles/ProductList.scss";
import { ProductRow } from "./ProductRow";
import {useProducts} from '../hooks/useProducts.js'
import { useGlobalContext } from "../hooks/useGlobalContext.js";


export const ProductList = () => {
  const {refreshProducts} =useGlobalContext()
  const { products, loading, error } = useProducts(refreshProducts);
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <table className="ProductList">
      <thead>
        <tr>
          <th>Referencia</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Peso</th>
          <th>Categoría</th>
          <th>Stock</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow products={products}/>
      </tbody>
    </table>
  );
};

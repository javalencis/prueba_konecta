
import "../styles/ProductList.scss";
import { ProductRow } from "./ProductRow";
import {useProducts} from '../hooks/useProducts.js'


export const ProductList = () => {
  const { products, loading, error } = useProducts();
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

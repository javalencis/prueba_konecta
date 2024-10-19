import { useEffect, useState } from "react";
import api from "../api/api";
import "../styles/ProductList.scss";
import { ProductRow } from "./ProductRow";



export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getProducts = async () => {
    try {
      const res = await api.get("/products");

      if (res.status === 200) {
        setProducts(res.data);
        console.log(res.data);
      } else {
        setError("No se pudieron obtener los productos");
      }
    } catch (error) {
      setError("Se produjo un error al obtener los productos.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        </tr>
      </thead>
      <tbody>
        <ProductRow products={products}/>
      </tbody>
    </table>
  );
};

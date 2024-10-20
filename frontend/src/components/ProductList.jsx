import "../styles/ProductList.scss";
import { ProductRow } from "./ProductRow";
import { useProducts } from "../hooks/useProducts.js";
import { useGlobalContext } from "../hooks/useGlobalContext.js";
import { useState } from "react";
import { Pagination } from "./Pagination.jsx";

export const ProductList = () => {
  const { refreshProducts } = useGlobalContext();
  const { products, loading, error } = useProducts(refreshProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const salesPerPage = 10;


  const indexOfLastSale = currentPage * salesPerPage;
  const indexOfFirstSale = indexOfLastSale - salesPerPage;
  const currentProducts = products.slice(indexOfFirstSale, indexOfLastSale);

  const totalPages = Math.ceil(products.length / salesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
    <section className="ProductListContainer">
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
          <ProductRow products={currentProducts} />
        </tbody>
      </table>
    </section>
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

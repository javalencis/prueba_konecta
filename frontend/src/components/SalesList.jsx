import { useState } from "react";
import { useSales } from "../hooks/useSales";

import "../styles/SalesList.scss";
import { Pagination } from "./Pagination";
export const SalesList = () => {
  const { sales, loading, error } = useSales();
  const [currentPage, setCurrentPage] = useState(1);
  const salesPerPage = 10;

  const reversedSales = [...sales].reverse();
  const indexOfLastSale = currentPage * salesPerPage;
  const indexOfFirstSale = indexOfLastSale - salesPerPage;
  const currentSales = reversedSales.slice(indexOfFirstSale, indexOfLastSale);

  const totalPages = Math.ceil(reversedSales.length / salesPerPage);

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
      <section className="SalesListContainer">
        <table className="SalesList">
          <thead>
            <tr>
              <th>Fecha y Hora</th>
              <th>Referencia</th>
              <th>Nombre</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {currentSales.map((sale) => (
              <tr key={sale.id}>
                <td>
                  {new Date(sale.createdAt).toLocaleString([], {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true, // Para formato de 12 horas con AM/PM
                  })}
                </td>
                <td>{sale.product.reference}</td>
                <td>{sale.product.name}</td>
                <td>{sale.quantity}</td>
              </tr>
            ))}
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

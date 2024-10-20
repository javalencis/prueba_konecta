import PropTypes from "prop-types";
import { useSales } from "../hooks/useSales"

export const SalesList = ({refreshSales}) => {
  const {sales,loading,error} =  useSales(refreshSales)

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const reversedSales = [...sales].reverse();
  return (
    <table className="SalesList">
        <thead>
            <tr>
                <th>Referencia</th>
                <th>Nombre</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>

            {
                reversedSales.map(sale =>(
                    <tr key={sale.id}>
                        <td>{sale.product.reference}</td>
                        <td>{sale.product.name}</td>
                        <td>{sale.quantity}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
SalesList.propTypes = {
    refreshSales: PropTypes.bool.isRequired, // Asume que es un booleano que activa la actualización
  
  };
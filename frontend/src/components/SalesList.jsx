import { useSales } from "../hooks/useSales"
import '../styles/SalesList.scss'
export const SalesList = () => {
  const {sales,loading,error} =  useSales()

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

import { useState } from "react";
import { SalesForm } from "../components/SalesForm";
import { SalesList } from "../components/SalesList";
import "../styles/Sales.scss";
export const Sales = () => {
  const [refreshSales, setRefreshSales] = useState(false)
  return (
    <section className="Sales">
      <h2>Vender producto</h2>
      <SalesForm setRefreshSales={setRefreshSales}/>
      <SalesList refreshSales={refreshSales}/>
    </section>
  );
};

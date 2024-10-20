
import { SalesForm } from "../components/SalesForm";
import { SalesList } from "../components/SalesList";
import "../styles/Sales.scss";
export const Sales = () => {

  return (
    <section className="Sales">
      <h2>Vender producto</h2>
      <SalesForm />
      <SalesList />
    </section>
  );
};

import { ProductList } from "../components/ProductList";
import '../styles/Product.scss'
export const Products = () => {
  return (
    <section className="Products">
      <h2>Productos</h2>

      <button className="Products--BtAdd">Agregar Producto</button>

      <ProductList />
    </section>
  );
};

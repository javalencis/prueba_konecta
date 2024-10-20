import { ProductList } from "../components/ProductList";
import "../styles/Product.scss";
import { LayoutModal } from "../containers/LayoutModal";
import { AddProduct } from "./AddProduct";
import { useState } from "react";
export const Products = () => {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const handleOpenModalAddProduct = () => {
    setOpenModalAddProduct(open => !open)
  };
  return (
    <section className="Products">
      <h2>Productos</h2>

      <button
        className="Products--BtAdd"
        to="/"
        onClick={handleOpenModalAddProduct}
      >
        Agregar Producto
      </button>

      <ProductList />
      {openModalAddProduct && (
        <LayoutModal setOpenModalAddProduct={setOpenModalAddProduct}>
          <AddProduct setOpenModalAddProduct={setOpenModalAddProduct}/>
        </LayoutModal>
      )}
    </section>
  );
};

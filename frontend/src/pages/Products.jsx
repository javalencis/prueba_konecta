import { ProductList } from "../components/ProductList"

export const Products = () => {
  return (
    <>
      <h2>Productos</h2>
      <div>
        <button>Agregar Producto</button>
      </div>
      <ProductList/>
    </>
  )
}

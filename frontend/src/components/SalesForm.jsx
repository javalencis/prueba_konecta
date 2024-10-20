import { useForm } from "react-hook-form";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import api from "../api/api";
import PropTypes from "prop-types";

export const SalesForm = ({setRefreshSales}) => {
    const { products, loading, error } = useProducts();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const [message, setMessage] = useState("");
    const [loadingSale, setLoadingSale] = useState(false);
  
    const onSubmit = async (data) => {
      setMessage("");
      const { productId, quantity } = data;
      const selectedProduct = products.find((p) => p.id === parseInt(productId));
  
     
      if (quantity > selectedProduct.stock) {
        setMessage("No hay suficiente stock para la cantidad solicitada.");
        return;
      }
  
  
      try {
        setLoadingSale(true);
        await api.post(`/sales/`, {
            productId:selectedProduct.id,
            quantity
        });
        setMessage(`Venta exitosa.`);
        reset();
        setRefreshSales(value => !value)
        
      } catch (error) {
        console.error("Error al realizar la venta:", error);
        setMessage("Error al realizar la venta. Intente nuevamente.");
      } finally {
        setLoadingSale(false);
      }
    };
  
    if (loading) {
      return <p>Loading products...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="product">Producto:</label>
            <select
              id="product"
              {...register("productId", { required: "Selecciona un producto" })}
            >
              <option value=""> Selecciona un producto </option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            {errors.productId && (
              <p className="error">{errors.productId.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              min={1}
              {...register("quantity", {
                required: "Ingresa la cantidad",
                min: { value: 1, message: "La cantidad debe ser mayor a 0" },
              })}
            />
            {errors.quantity && (
              <p className="error">{errors.quantity.message}</p>
            )}
          </div>
        </div>
        <button type="submit" disabled={loadingSale}>
          {loadingSale ? "Procesando venta..." : "Vender"}
        </button>
      </form>
  )
}


SalesForm.propTypes = {
  setRefreshSales: PropTypes.func.isRequired,
};
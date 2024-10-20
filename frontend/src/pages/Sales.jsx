import { useForm } from "react-hook-form";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import api from "../api/api";
import "../styles/Sales.scss";
export const Sales = () => {
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

    // Verificar si hay suficiente stock
    if (quantity > selectedProduct.stock) {
      setMessage("No hay suficiente stock para la cantidad solicitada.");
      return;
    }

    // Actualizar el stock
    const updatedStock = selectedProduct.stock - quantity;

    try {
      setLoadingSale(true);
      await api.put(`/products/${selectedProduct.id}`, {
        ...selectedProduct, // Mantener los demás datos del producto
        stock: updatedStock, // Actualizar el stock
      });
      setMessage(`Venta exitosa. Stock actualizado: ${updatedStock}`);
      reset(); // Limpiar el formulario después de la venta
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
    <section className="Sales">
      <h2>Vender producto</h2>
      {message && <p>{message}</p>}

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
    </section>
  );
};

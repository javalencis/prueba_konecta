import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import api from "../api/api";
import "../styles/UpdateProduct.scss";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const UpdateProduct = ({ setOpenModalUpdateProduct, product }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      reference: product.reference,
      name: product.name,
      price: product.price,
      weight: product.weight,
      category: product.category,
      stock: product.stock,
    },
  });
  const {refreshProductsList} = useGlobalContext();

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status,setStatus] =useState(false)

  const handleUpdateProduct = async (data) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      await api.put(`/products/${product.id}`, data);
      setSuccessMessage("Producto actualizado exitosamente");
      reset(); 
      setStatus(true)
      refreshProductsList()
    } catch (error) {
      setErrorMessage("Error al actualizar el producto. Intente nuevamente.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModalUpdateProduct = () => {
    setOpenModalUpdateProduct(false);
    reset();
  };

  return (
    <section className="UpdateProduct">
      <h2>Actualizar Producto</h2>

      

      <form onSubmit={handleSubmit(handleUpdateProduct)}>
        <label htmlFor="reference">
          <span>Referencia</span>
          <input
            type="text"
            id="reference"
            {...register("reference", { required: "La referencia es obligatoria" })}
          />
          {errors.reference && <p className="error">{errors.reference.message}</p>}
        </label>

        <label htmlFor="name">
          <span>Nombre del producto</span>
          <input
            type="text"
            id="name"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>

        <div className="formPriceWeight">
          <label htmlFor="price">
            <span>Precio</span>
            <input
              type="number"
              id="price"
              {...register("price", { required: "Obligatorio", min: { value: 1, message: "Debe ser mayor a 0" } })}
            />
            {errors.price && <p className="error">{errors.price.message}</p>}
          </label>

          <label htmlFor="weight">
            <span>Peso</span>
            <input
              type="number"
              id="weight"
              {...register("weight", { required: "Obligatorio", min: { value: 1, message: "Debe ser mayor a 0" } })}
            />
            {errors.weight && <p className="error">{errors.weight.message}</p>}
          </label>
        </div>

        <label htmlFor="category">
          <span>Categoría</span>
          <input
            type="text"
            id="category"
            {...register("category", { required: "La categoría es obligatoria" })}
          />
          {errors.category && <p className="error">{errors.category.message}</p>}
        </label>

        <label htmlFor="stock">
          <span>Stock</span>
          <input
            type="number"
            id="stock"
            {...register("stock", { required: "Obligatorio", min: { value: 0, message: "Debe ser mayor o igual a 0" } })}
          />
          {errors.stock && <p className="error">{errors.stock.message}</p>}
        </label>
        {successMessage && <p className="successMessage">{successMessage}</p>}
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <div className="formButtons">
          <button type="submit" className="btUpdate" disabled={loading}>
            {loading ? "Actualizando..." : "Actualizar"}
          </button>
          <button type="button" className="btCancel" onClick={handleCloseModalUpdateProduct}>
            {status ? 'Cerrar' : 'Cancelar'}
          </button>
        </div>
      </form>
    </section>
  );
};

UpdateProduct.propTypes = {
  setOpenModalUpdateProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired, 
};

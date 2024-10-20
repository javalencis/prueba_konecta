import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../api/api";
import "../styles/AddProduct.scss";
import PropTypes from "prop-types";

export const AddProduct = ({setOpenModalAddProduct}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handeSaveProduct = async (data) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      await api.post("/products", data);
      setSuccessMessage("Producto agregado exitosamente");
      reset();
    } catch (error) {
      setErrorMessage("Error al agregar el producto. Intente nuevamente.");
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModalAddProduct = () => {
    setOpenModalAddProduct(false)
    reset();
  }

  return (
    <section className="AddProduct">
      <h2>Nuevo Producto</h2>

      <form onSubmit={handleSubmit(handeSaveProduct)}>
        <label htmlFor="reference">
          <span>Referencia</span>
          <input
            type="text"
            id="reference"
            {...register("reference", {
              required: "La referencia es obligatoria",
            })}
          />
          {errors.reference && (
            <p className="error">{errors.reference.message}</p>
          )}
        </label>
        <label htmlFor="name">
          <span>Nombre del producto</span>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>
        <div className="formPriceWeight">
          <label htmlFor="price">
            <span>Precio</span>
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "Obligatorio",
                min: { value: 1, message: "El precio debe ser mayor a 0" },
              })}
            />
            {errors.price && <p className="error">{errors.price.message}</p>}
          </label>
          <label htmlFor="weight">
            <span>Peso</span>
            <input
              type="number"
              id="weight"
              {...register("weight", {
                required: "Obligatorio",
                min: { value: 1, message: "Mayor a 0" },
              })}
            />
            {errors.weight && <p className="error">{errors.weight.message}</p>}
          </label>
        </div>
        <label htmlFor="category">
          <span>Categoría</span>
          <input
            type="text"
            id="category"
            {...register("category", {
              required: "La categoría es obligatoria",
            })}
          />
          {errors.category && (
            <p className="error">{errors.category.message}</p>
          )}
        </label>
        <label htmlFor="stock">
          <span>Stock</span>
          <input
            type="number"
            id="stock"
            {...register("stock", {
              required: "Obligatorio",
              min: { value: 0, message: "Debe ser mayor o igual a 0" },
            })}
          />
          {errors.stock && <p className="error">{errors.stock.message}</p>}
        </label>
        {successMessage && <p className="successMessage">{successMessage}</p>}
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <div className="formButtons">
          <button type="submit" className="btAdd" disabled={loading}>
            {loading ? "Agregando..." : "Agregar"}
          </button>
          <button type="button" className="btCancel" onClick={handleCloseModalAddProduct}>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};


AddProduct.propTypes = {
    setOpenModalAddProduct: PropTypes.func.isRequired, 
  };

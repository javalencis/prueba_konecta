import PropTypes from "prop-types";
import api from "../api/api";
import "../styles/DeleteProduct.scss";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
export const DeleteProduct = ({ setOpenModalDeleteProduct, productId }) => {
  const{refreshProductsList} = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const handleDeleteProduct = async () => {
    setLoading(true);
    try {
      await api.delete(`/products/${productId}`);
      console.log(`Producto con ID ${productId} eliminado.`);
      setStatus(true);
      refreshProductsList()
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    setOpenModalDeleteProduct(false); // Cerrar el modal sin eliminar el producto
  };
  return (
    <section className="DeleteProduct">
      {loading ? (
        <p>Eliminando...</p>
      ) : status ? (
        <p>Producto eliminado</p>
      ) : (
        <p>
          ¿Estas seguro que deseas <br /> eliminar el producto?
        </p>
      )}

      <div>
        {!status && (
          <button className="btDeleteProduct" onClick={handleDeleteProduct}>
            Eliminar
          </button>
        )}

        <button className="btCancel" onClick={handleCancel}>
          {status ? "Cerrar" : "Cancelar"}
        </button>
      </div>
    </section>
  );
};

DeleteProduct.propTypes = {
  setOpenModalDeleteProduct: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
};

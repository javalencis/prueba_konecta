import PropTypes from "prop-types";
import { LayoutModal } from "../containers/LayoutModal";
import { DeleteProduct } from "./DeleteProduct";
import { useState } from "react";
import { UpdateProduct } from "./UpdateProduct";
export const ProductRowData = ({ product }) => {
  const [openModalDeleteProduct, setOpenModalDeleteProduct] = useState(false);
  const [openModalUpdateProduct, setOpenModalUpdateProduct] = useState(false);
  const handleDeleteProduct = () => {
    setOpenModalDeleteProduct((value) => !value);
  };
  const handleUpdateProduct = () => {
    setOpenModalUpdateProduct((value) => !value);
  };
  return (
    <>
      <tr>
        <td>{product.reference}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.weight}</td>
        <td>{product.category}</td>
        <td>{product.stock}</td>
        <td>
          <button onClick={handleDeleteProduct}>X</button>
          <button onClick={handleUpdateProduct}>E</button>
        </td>
      </tr>
      {openModalDeleteProduct && (
        <LayoutModal setOpenModal={setOpenModalDeleteProduct}>
          <DeleteProduct
            setOpenModalDeleteProduct={setOpenModalDeleteProduct}
            productId={product.id}
          />
        </LayoutModal>
      )}
      {openModalUpdateProduct && (
        <LayoutModal setOpenModal={setOpenModalUpdateProduct}>
          <UpdateProduct
            setOpenModalUpdateProduct={setOpenModalUpdateProduct}
            product={product}
          />
        </LayoutModal>
      )}
    </>
  );
};
ProductRowData.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired, // `product` es obligatorio y debe tener esta estructura
};

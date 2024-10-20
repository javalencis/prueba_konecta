import PropTypes from "prop-types";
import "../styles/LayoutModal.scss";
export const LayoutModal = ({ children, setOpenModalAddProduct }) => {
  const handleCloseModalAddProduct = (event) => {
    if (event.target.className === "LayoutModal") {
      setOpenModalAddProduct(false);
    }
  };
  return (
    <div className="LayoutModal" onClick={handleCloseModalAddProduct}>
      {children}
    </div>
  );
};

LayoutModal.propTypes = {
  children: PropTypes.node.isRequired,
  setOpenModalAddProduct: PropTypes.func.isRequired,
};

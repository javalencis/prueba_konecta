import PropTypes from "prop-types";
import "../styles/LayoutModal.scss";
export const LayoutModal = ({ children, setOpenModal }) => {
  const handleCloseModalAddProduct = (event) => {
    if (event.target.className === "LayoutModal") {
      setOpenModal(false);
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
  setOpenModal: PropTypes.func.isRequired,
};

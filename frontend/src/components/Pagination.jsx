import PropTypes from "prop-types";
import iconBack from "../assets/back.png";
import iconNext from "../assets/next.png";
export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
  }) => {
  return (
    <div className="pagination">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <img src={iconBack} alt="" />
    </button>
    {currentPage}
    {" de "}
    {totalPages}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <img src={iconNext} alt="" />
    </button>
  </div>
  )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired, 
    totalPages: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired,  
  };
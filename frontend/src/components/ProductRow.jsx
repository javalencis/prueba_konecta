import PropTypes from "prop-types";

export const ProductRow = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <tr key={product.id}>
          <td>{product.reference}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.weight}</td>
          <td>{product.category}</td>
          <td>{product.stock}</td>
        </tr>
      ))}
    </>
  );
};

ProductRow.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        reference: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
      })
    ).isRequired,
};
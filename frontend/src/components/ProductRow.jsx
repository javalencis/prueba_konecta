import PropTypes from "prop-types";

import { ProductRowData } from "./ProductRowData";
import { Fragment } from "react";

export const ProductRow = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <Fragment key={product.id}>
          <ProductRowData product={product} />
        </Fragment>
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

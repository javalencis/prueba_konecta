import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [refreshSales, setRefreshSales] = useState(0);
  const [refreshProducts, setRefreshProducts] = useState(0);

  const refreshSalesList = () => {
    setRefreshSales((prev) => prev + 1);
  };

  const refreshProductsList = () => {
    setRefreshProducts((prev) => prev + 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        refreshSales,
        refreshProducts,
        refreshSalesList,
        refreshProductsList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegurarse de que `children` sea un elemento React válido
};
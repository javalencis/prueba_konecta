import { useEffect, useState } from "react";
import api from "../api/api";

export const useSales = (refreshSales) => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSales = async () => {
    try {
      const res = await api.get("/sales");
      if (res.status === 200) {
        setSales(res.data);
      } else {
        setError("No se pudieron obtener las ventas.");
      }
    } catch (error) {
      setError("Se produjo un error al obtener las ventas.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSales();
  }, [refreshSales]);

  return { sales, loading, error }; // Devolver los estados necesarios
};

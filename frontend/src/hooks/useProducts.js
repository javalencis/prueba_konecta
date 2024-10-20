import { useEffect, useState } from "react";
import api from "../api/api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const res = await api.get("/products");
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        setError("No se pudieron obtener los productos.");
      }
    } catch (error) {
      setError("Se produjo un error al obtener los productos.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error }; // Devolver los estados necesarios
};

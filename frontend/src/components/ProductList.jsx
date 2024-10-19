import { useEffect } from "react";
import api from "../api/api";
import "../styles/ProductList.scss";
export const ProductList = () => {
  const getProducts = async() => {
    const res = await api.get('/products')
    console.log(res)
  };
  
  useEffect(() => {
    getProducts()
  }, [])
  
  return <section className="ProductList"></section>;
};

import { useContext } from "react";
import { GlobalContext } from "../context/GlobaContext";

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

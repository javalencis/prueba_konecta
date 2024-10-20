import { NavLink } from "react-router-dom";
import "../styles/LateralMenu.scss";
export const LateralMenu = () => {
  return (
    <section className="LateralMenu">
      <h1>Cafetería</h1>
      <nav>
        <NavLink to="/">Productos</NavLink>
        <NavLink to="/ventas">Ventas</NavLink>
      </nav>
    </section>
  );
};

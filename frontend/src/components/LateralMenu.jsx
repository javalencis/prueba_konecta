import { NavLink } from "react-router-dom";
import "../styles/LateralMenu.scss";
import PropTypes from "prop-types";
export const LateralMenu = ({ openMenuLateral, setOpenMenuLateral }) => {
  const handleOpenMenuLateral = () => {
    if (openMenuLateral && setOpenMenuLateral) {
      setOpenMenuLateral(false);
    }
  };

  return (
    <section className={openMenuLateral ? "LateralMenu open" : "LateralMenu"}>
      <button className="btClose" onClick={handleOpenMenuLateral}>
        X
      </button>
      <h1>Cafetería</h1>
      <nav>
        <NavLink to="/" onClick={handleOpenMenuLateral}>
          Productos
        </NavLink>
        <NavLink to="/ventas" onClick={handleOpenMenuLateral}>
          Ventas
        </NavLink>
      </nav>
    </section>
  );
};

LateralMenu.propTypes = {
  openMenuLateral: PropTypes.bool,
  setOpenMenuLateral: PropTypes.func,
};

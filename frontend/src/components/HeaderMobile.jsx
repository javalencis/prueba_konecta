import { useState } from "react";
import { LateralMenu } from "./LateralMenu";
import iconMenu from "../assets/menu.png";
import "../styles/HeaderMobile.scss";
export const HeaderMobile = () => {
  const [openMenuLateral, setOpenMenuLateral] = useState(false);
  const handleOpenMenuLateral = () => {
    setOpenMenuLateral((e) => !e);
  };
  return (
    <header className="HeaderMobile">
      <div className="HeaderMobile--container">
        <div className="HeaderMobile--menu" onClick={handleOpenMenuLateral}>
          <img src={iconMenu} alt="" />
        </div>

        <p>Cafetería</p>
      </div>
      {openMenuLateral && <LateralMenu openMenuLateral={openMenuLateral} setOpenMenuLateral={setOpenMenuLateral} />}
    </header>
  );
};

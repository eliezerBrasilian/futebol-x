import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useCabecalhoContext } from "../../context/CabecalhoContext";
import { Rotas } from "../Rotas";
import logo from "../../assets/futebol.png";
import "./Header.css";
import { CustomNav } from "../CustomNav";

import "react-modern-drawer/dist/index.css";

export function Header() {
  const { updateCurrentNav, currentNav } = useCabecalhoContext();

  const location = useLocation();

  useEffect(() => {
    updateCurrentNav(location.pathname);
  }, [location, currentNav]);

  return (
    <nav className="app-header">
      <NavLink to={"/"}>
        <div className="left">
          <img src={logo} alt="logotipo" />
          <CustomNav titulo={"Futebol X"} isActive={currentNav == Rotas.HOME} />
        </div>
      </NavLink>

      <div className="right">
        <NavLink to={Rotas.TODAY}>
          <CustomNav
            titulo={"Jogos de Hoje"}
            isActive={currentNav == Rotas.TODAY}
          />
        </NavLink>

        <NavLink to={Rotas.TOMORROW}>
          <CustomNav
            titulo={"Jogos Amanhã"}
            isActive={currentNav == Rotas.TOMORROW}
          />
        </NavLink>
      </div>
    </nav>
  );
}

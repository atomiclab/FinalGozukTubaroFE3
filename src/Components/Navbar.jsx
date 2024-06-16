import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Utils/routes";
import Button from "./Button";
import { ThemeProvider, useTheme } from "../Reducers/Themereducer";
import { img } from "../Utils/constants";
import "../Styles/navbar.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  const { state, toggleDarkMode } = useTheme();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Button onClick={() => navigate(-1)}>
        <h4>⬅</h4>
      </Button>
      <div className="navbar-logo">
        <img src={img.logo} alt="Logo" />
      </div>
      <div className="navbar-icons">
        <Link to={routes.home} className="navbar-button">
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact} className="navbar-button">
          <h4>Contacto</h4>
        </Link>
        <Link to={routes.favs} className="navbar-button">
          <h4>Favs</h4>
        </Link>

        <button onClick={toggleDarkMode} className="navbar-buttonDM" ><h4>🌝</h4></button>
      </div>
    </nav>
  );
};

export default Navbar;

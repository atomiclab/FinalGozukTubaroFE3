import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Utils/routes";
import Button from "./Button";
import ThemeContext from "../Context/theme.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <nav  style={{ background: theme.background, color: theme.font }}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Button onClick={() => navigate(-1)}>
        <h4  style={{ background: theme.background, color: theme.font }}>⬅</h4>
      </Button>
      <Link to={routes.home}>
        <h4 style={{ background: theme.background, color: theme.font }}>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4  style={{ background: theme.background, color: theme.font }}>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4 style={{ background: theme.background, color: theme.font }}>Favs</h4>
      </Link>

      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Utils/routes";
import Button from "./Button";
import { ThemeProvider, useTheme } from "../Reducers/Themereducer";
import { img } from "../Utils/constants";
import "../Styles/navbar.css";


const Navbar = () => {
  const navigate = useNavigate();
  const { state, toggleDarkMode } = useTheme();

  return (
    <nav>
      <div className="left-nav">
        <Button onClick={() => navigate(-1)}>
        <h4>⬅</h4>
      </Button>
      <div className="navbar-logo">
        <img src={img.logo} alt="Logo" />
      </div>
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

  
        <button onClick={toggleDarkMode} className="navbar-buttonDM" ><h4>{state.darkMode ? "🌞":"🌝" }</h4></button>
      </div>
    </nav>
  );
};

export default Navbar;

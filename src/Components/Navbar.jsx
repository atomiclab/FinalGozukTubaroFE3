import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Utils/routes";
import Button from './Button';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Button onClick={() => navigate(-1)}>
        <h4>⬅Volver</h4>
      </Button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>

      <button>Change theme</button>
      <img src="../img/DH.png" alt="asd" />
    </nav>
  )
}

export default Navbar
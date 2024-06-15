import React from 'react';
import '../Styles/Alerta.css'; 
import { img } from '../Utils/constants';


const Alerta = ({cerrar,usr}) => {
    return (
    <div className="popup-container">
    <div className="popup">
      <div className="popup-content">
        <h2>Hola {usr.name}!</h2>
        <img src={img.doctor} alt="doctor" />
        <p>Tu mensaje fue enviado satisfactoriamente a nuestros especialistas, pronto recibiras una respueta.</p>
        <button onClick={cerrar}>Confirmar</button>
      </div>
    </div>
  </div>);
};

export default Alerta;

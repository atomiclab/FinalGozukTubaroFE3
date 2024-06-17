// import React from "react";

// const Card = ({ name, username, id }) => {
//   const addFav = () => {
//     // Aqui iria la logica para agregar la Card en el localStorage
//   };

//   return (
//     <div className="card">
//       {/* En cada card deberan mostrar en name - username y el id */}

//       {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

//       {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
//       <button onClick={addFav} className="favButton">
//         Add fav
//       </button>
//     </div>
//   );
// };

// export default Card;

//import CardStyles from "../Styles/Card.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// console.log(CardStyles);

const Card = ({ item, children }) => {
  console.log(item);
  const { image, name, username, id } = item;

  return (
    <div className="card">
      <Link to={"/dentista/" + id}>
        <img src="https://thispersondoesnotexist.com/" className="card-img" />
        <img src={image} alt="" />
        <h4>{name}</h4>
        <h4>{username}</h4>
      </Link>
      {children}
    </div>
  );
};

export default Card;

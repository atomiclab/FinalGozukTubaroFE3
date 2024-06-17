import React, { useEffect } from "react";
import Card from "../Components/Card";
import Button from "../Components/Button";
import { useRecipeStates } from "../Context/global.context";
import CardFav from "../Components/CardFav";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useRecipeStates();
  const handleRemoveFavorite = (doctor) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: doctor });
  };
  useEffect(() => {
    dispatch({ type: "INIT_FAVORITES" });
  }, []);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        <div className="favorites-container">
          <h2>Doctores Favoritos</h2>
          <div className="favorites-grid">
            {state.favorites.map((doctor) => (
              <CardFav key={doctor.id} doc={doctor}>
                <Button onClick={() => handleRemoveFavorite(doctor)}>🚫</Button>
              </CardFav>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favs;

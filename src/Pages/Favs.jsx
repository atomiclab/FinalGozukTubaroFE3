import React, { useEffect } from "react";
import Button from "../Components/Button";
import { useRecipeStates } from "../Context/global.context";
import CardFav from "../Components/CardFav";
import { routes } from "../Utils/routes";
import { Link } from "react-router-dom";

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
      <h1>Doctores Favoritos</h1>
      <div className="card-grid">
        <div className="favorites-container">
          <div className="favorites-grid">
            {state.favorites.length === 0 ? (
              <div>
                <p>No hay doctores favoritos!</p>
                <p>
                  Tenes que ir a <Link to={routes.home} > Home </Link>
                  y seleccionar uno con la estrella.
                </p>
              </div>
            ) : (
              state.favorites.map((doctor) => (
                <CardFav key={doctor.id} doc={doctor}>
                  <Button onClick={() => handleRemoveFavorite(doctor)}>
                    🚫
                  </Button>
                </CardFav>
              ))
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Favs;

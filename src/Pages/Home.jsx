import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import ThemeContext, { themes } from "../Context/theme.context";
import Button from "../Components/Button";
import { useRecipeStates } from "../Context/global.context";
import "../Styles/Cards.css";


const Home = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const { state, dispatch } = useRecipeStates();

  const handleFavoriteClick = (recipe) => {
    const isFavorite = state.favorites.some(fav => fav.id === recipe.id);
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: recipe });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: recipe });
    }
  };
  useEffect(() => {
    dispatch({ type: "INIT_FAVORITES" });
  }, []);

  return (
    <main className="">
      <h1>Lista de doctores</h1>
      <div className="card-grid">
        <div className="list-container">
          {state.recipes.map((recipe) => {
            const isFavorite = state.favorites.some(fav => fav.id === recipe.id);
            return (
              <Card item={recipe} key={recipe.id}>
                <Button onClick={() => handleFavoriteClick(recipe)}>
                  {isFavorite ? "🚫⭐️" : "⭐️"}
                </Button>
              </Card>
            );
          })}
        </div>
        
      </div>
    </main>
  );
};

export default Home;

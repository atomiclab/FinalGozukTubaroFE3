import React, { useContext } from "react";
import Card from "../Components/Card";
import ThemeContext, { themes } from "../Context/theme.context";
import Button from "../Components/Button";
import { useRecipeStates } from "../Context/global.context";
import "../Styles/Cards.css"

const Home = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const { state, dispatch } = useRecipeStates();

  return (
    <main className="">
      <h1>Home</h1>
      <h1>Lista de doctores</h1>
      <div className="card-grid">
  
        <div className="list-container">
         


           {state.recipes.map((recipe) => (
            <Card item={recipe} key={recipe.id}>
              <Button
                onClick={() => dispatch({ type: "ADD_CART", payload: recipe })} //(prevState) => [...prevState, recipe]
              >
                ✩
              </Button>
            </Card>
          ))} 
           
        </div>
      </div>
    </main>
  );
};
export default Home;

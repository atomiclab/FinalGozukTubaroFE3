import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/Reducer.js";

const RecipeStates = createContext();

const initialState = {
  recipes: [],
  cart: [],
  favorites: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => {
        // console.log("La API respondio:", res);
        dispatch({ type: "GET_RECIPES", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => {
  return useContext(RecipeStates);
};

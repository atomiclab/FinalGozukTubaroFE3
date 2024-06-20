import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/Reducer.js";

const initialState = {
  recipes: [],
  favorites: [],
  darkMode: false,
};

const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE"; //Bravo six, going dark

const RecipeStates = createContext();
const ThemeContext = createContext(themes.light);

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error(`Llego una accion que no esta asignada: ${action.type}`);
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  const toggleDarkMode = () => {
    themeDispatch({ type: TOGGLE_DARK_MODE });
  };

  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: "GET_RECIPES", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeContext.Provider value={{ themeState, toggleDarkMode }}>
      <RecipeStates.Provider value={{ state, dispatch }}>
        {children}
      </RecipeStates.Provider>
    </ThemeContext.Provider>
  );
};

export default Context;

export const useRecipeStates = () => {
  return useContext(RecipeStates);
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider, sino pinchamos');
  }
  return context;
};


import { createContext, useContext, useEffect, useReducer } from "react";
import { Axios } from "axios";
import { reducer } from "../Reducers/Reducer.js";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return <ContextGlobal.Provider value={{}}>{children}</ContextGlobal.Provider>;
};

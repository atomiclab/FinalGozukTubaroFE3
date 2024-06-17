import React, { createContext, useContext, useReducer } from 'react';
import '../Styles/index.css';

const ThemeContext = createContext();

const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};

const initialState = {
  darkMode: false,
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleDarkMode = () => {
    dispatch({ type: TOGGLE_DARK_MODE });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };

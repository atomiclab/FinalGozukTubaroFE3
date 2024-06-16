import React, { createContext, useContext, useReducer } from 'react';
import '../Styles/index.css';

// Definir el contexto para el tema
const ThemeContext = createContext();

// Definir las acciones del reducer
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

// Reducer para manejar el estado del tema
const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};

// Estado inicial
const initialState = {
  darkMode: false,
};

// Proveedor del contexto del tema
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

// Hook personalizado para usar el contexto del tema
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };

import React, { useContext } from 'react'
import Card from '../Components/Card'
import ThemeContext, { themes } from "../Context/theme.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home
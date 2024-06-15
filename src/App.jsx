import { Route, Routes } from "react-router-dom";
import { routes } from "./Utils/routes.js";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Favs from "./Pages/Favs.jsx";
import Detail from "./Pages/Detail.jsx";
import React, { useMemo, useState } from "react";
import ThemeContext, { themes } from "./Context/theme.context.jsx";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };
  const providerValue = useMemo(
    () => ({ theme, handleChangeTheme }),
    [theme, handleChangeTheme]
  );
  return (
    <ThemeContext.Provider value={providerValue}>
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
        </Routes>
        {/* <Footer/> */}
    </ThemeContext.Provider>
  );
}

export default App;

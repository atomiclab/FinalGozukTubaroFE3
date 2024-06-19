import { Route, Routes } from "react-router-dom";
import { routes } from "./Utils/routes.js";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Favs from "./Pages/Favs.jsx";
import Dentista from "./Pages/Detail.jsx";
//import { useTheme } from "./Reducers/Themereducer.jsx";
import { useTheme } from './Context/global.context';

function App() {
  const { themeState } = useTheme(); 
  
  return (
    <div className={themeState.darkMode ? "dark" : ""}>
      <div className="container">
        <div className="content">
          <Navbar />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.favs} element={<Favs />} />
            <Route path={routes.dentista} element={<Dentista />} />
            <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

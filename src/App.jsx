import { Route, Routes } from "react-router-dom";
import { routes } from "./Utils/routes.js";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Favs from "./Pages/Favs.jsx";
import Detail from "./Pages/Detail.jsx";
import { useTheme } from './Reducers/Themereducer.jsx';


function App() {
  const { state, toggleDarkMode } = useTheme();
  return (
  <div className={state.darkMode ? 'dark' : ''}>
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
        </Routes>
        {/* <Footer/> */}
        </div>
        
  );
}

export default App;

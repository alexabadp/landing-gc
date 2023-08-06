import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./Views/Inicio/Inicio";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import CicloPage from "./Views/NuestrosCiclos/NuestrosCiclos";
import Contactanos from "./Views/Contactanos/Contactanos";
import Sedes from "./Views/Sedes/Sedes";
import LibroReclamaciones from "./Views/LibroReclamaciones/LibroReclamaciones";
import PoliticaProteccion from "./Views/PolitticaProteccion/PoliticaProteccion";
import VideoClases from "./Views/VideoClases/VideoClases";
import LibraryHeader from "./Layouts/Header/LibraryHeader";
import Materiales from "./Views/Meteriales/Materiales";
import Escaneos from "./Views/Escaneos/Escaneos";
import Claves from "./Views/Claves/Claves";
import Solucionarios from "./Views/Solucionarios/Solucionarios";
import Prospectos from "./Views/Prospectos/Prospectos";
import Admision from "./Views/Admision/Admision";

function App() {
  return (
    <BrowserRouter>
      {location.pathname === "/" ||
      location.pathname.includes("/ciclos/") ||
      location.pathname.includes("/sedes") ||
      location.pathname.includes("/libroreclamaciones") ||
      location.pathname.includes("/politicaproteccion") ? (
        <Header />
      ) : (
        <LibraryHeader />
      )}
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/ciclos/:idCiclo" Component={CicloPage} />
        <Route exact path="/contactus" Component={Contactanos} />
        <Route exact path="/sedes" Component={Sedes} />
        <Route
          exact
          path="/libroreclamaciones"
          Component={LibroReclamaciones}
        />
        <Route
          exact
          path="/politicaproteccion"
          Component={PoliticaProteccion}
        />
        <Route exact path="/videoclases" Component={VideoClases} />
        <Route exact path="/materiales" Component={Materiales} />
        <Route exact path="/escaneos" Component={Escaneos} />
        <Route exact path="/claves" Component={Claves} />
        <Route exact path="/solucionarios" Component={Solucionarios} />
        <Route exact path="/prospectos" Component={Prospectos} />
        <Route exact path="/admision" Component={Admision} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

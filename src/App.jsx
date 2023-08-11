import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./Views/Inicio/Inicio";
import Footer from "./Layouts/Footer/Footer";
import CicloPage from "./Views/NuestrosCiclos/NuestrosCiclos";
import Contactanos from "./Views/Contactanos/Contactanos";
import Sedes from "./Views/Sedes/Sedes";
import LibroReclamaciones from "./Views/LibroReclamaciones/LibroReclamaciones";
import PoliticaProteccion from "./Views/PolitticaProteccion/PoliticaProteccion";
import VideoClases from "./Views/VideoClases/VideoClases";
import Materiales from "./Views/Meteriales/Materiales";
import Escaneos from "./Views/Escaneos/Escaneos";
import Claves from "./Views/Claves/Claves";
import Solucionarios from "./Views/Solucionarios/Solucionarios";
import Prospectos from "./Views/Prospectos/Prospectos";
import Admision from "./Views/Admision/Admision";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/ciclos/:idCiclo" element={<CicloPage />} />
        <Route exact path="/contactus" element={<Contactanos />} />
        <Route exact path="/sedes" element={<Sedes />} />
        <Route
          exact
          path="/libroreclamaciones"
          element={<LibroReclamaciones />}
        />
        <Route
          exact
          path="/politicaproteccion"
          element={<PoliticaProteccion />}
        />
        <Route exact path="/videoclases" element={<VideoClases />} />
        <Route exact path="/materiales" element={<Materiales />} />
        <Route exact path="/escaneos" element={<Escaneos />} />
        <Route exact path="/claves" element={<Claves />} />
        <Route exact path="/solucionarios" element={<Solucionarios />} />
        <Route exact path="/prospectos" element={<Prospectos />} />
        <Route exact path="/admision" element={<Admision />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

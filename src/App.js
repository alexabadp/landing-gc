import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import LibroReclamaciones from "./Components/LibroReclamaciones/LibroReclamaciones";
import PoliticaProteccion from "./Components/PoliticaProteccion/PoliticaProteccion";
import Sedes from "./Components/Sedes/Sedes";
import { createContext } from "react";
import PageContainer from "../src/Layouts/PageContainer/Page";
import LandingCiclo from "./Components/LandingCiclo/LandingCiclo";
import Home from "./Components/Home/Home";
import VideoClases from "./Components/VideoClases/VideoClases";
import VideoClasesDos from "./Components/VideoClases/VideoClasesDos";
import VideoClasesTres from "./Components/VideoClases/VideoClasesTres";
import CicloPage from "./Components/Ciclos/CicloPage";
import Admision from "./Components/Admision/Admision";

const LandingPage = () => {
  return (
    <PageContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/libroreclamaciones"
          component={LibroReclamaciones}
        />
        <Route
          exact
          path="/politicaproteccion"
          component={PoliticaProteccion}
        />
        <Route exact path="/videoclases-dos" component={VideoClasesDos} />
        <Route exact path="/videoclases-tres" component={VideoClasesTres} />
        <Route exact path="/videoclases" component={VideoClases} />
        <Route exact path="/sedes" component={Sedes} />
        <Route exact path="/explora" component={LandingCiclo} />
        <Route exact path="/admision" component={Admision} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/ciclos/:idCiclo" component={CicloPage} />
      </Switch>
    </PageContainer>
  );
};

export const HeaderContext = createContext();

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default withRouter(App);

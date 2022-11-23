import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import { Container } from "react-bootstrap";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Layouts/Footer/Footer";
import LibroReclamaciones from "./Components/LibroReclamaciones/LibroReclamaciones";
import PoliticaProteccion from "./Components/PoliticaProteccion/PoliticaProteccion";
import Sedes from "./Components/Sedes/Sedes";
import Explora from "./Components/Explora/Explora";
import { createContext } from "react";
import PageContainer from "../src/Layouts/PageContainer/Page";
import bilblioteca from "./Components/Biblioteca/Bilblioteca";
import LandingCiclo from "./Components/LandingCiclo/LandingCiclo";
import Home from "./Components/Home/Home";

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
        <Route exact path="/biblioteca" component={bilblioteca} />
        <Route exact path="/sedes" component={Sedes} />
        <Route exact path="/explora" component={LandingCiclo} />
        <Route exact path="/contactus" component={ContactUs} />
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

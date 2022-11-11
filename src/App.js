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

const LandingPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={ContactUs} />
      <Route exact path="/libroreclamaciones" component={LibroReclamaciones} />
      <Route exact path="/politicaproteccion" component={PoliticaProteccion} />
      <Route exact path="/sedes" component={Sedes} />
      <Route exact path="/explora" component={Explora} />
    </Switch>
  );
};

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}

export default withRouter(App);

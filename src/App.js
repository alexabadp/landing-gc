import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import { Container } from "react-bootstrap";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Layouts/Footer/Footer";

const LandingPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={ContactUs} />
    </Switch>
  );
};

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(App);

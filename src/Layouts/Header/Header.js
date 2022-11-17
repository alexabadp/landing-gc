import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Binoculars, Display } from "react-bootstrap-icons";
import { HeaderContext } from "../../App";
import logo from "../../Assets/Images/logo-small.png";
import { SECOND_HEADER } from "../../Components/Shared/Constants";
import "./Header.css";

function Header() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Image
        src={logo}
        className="navbar-logo"
        style={{
          marginLeft: "10px",
        }}
      />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link
            href="/explora"
            style={{ color: "#e70031", fontWeight: "bold" }}
          >
            Explora
          </Nav.Link>
          <Nav.Link href="/biblioteca">Biblioteca</Nav.Link>
          <Nav.Link href="/contactus">Contactanos</Nav.Link>
          <Nav.Link href="/sedes">Sedes</Nav.Link>
          <div
            className="intranet-button"
            onClick={() =>
              window.open("https://grupociencias.edu.pe/intranet/#/login")
            }
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "70px",
            }}
          >
            <Display color="white" size={22} className="align-top" />
            Intranet para alumnos
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

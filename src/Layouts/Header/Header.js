import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
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
      id="main-header-bar"
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
          <NavDropdown
            title={
              <span style={{ color: "#e70031", fontWeight: "bold" }}>
                Nuestros Ciclos
              </span>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="/ciclos/verano-san-marcos">
              Ciclo Verano San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Ciclo Verano UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Ciclo Repaso San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Ciclo Repaso UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Ciclo Semestral San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Ciclo Semestral UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Ciclo Anual San Marcos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/videoclases">Biblioteca</Nav.Link>
          <Nav.Link href="/contactus">Contáctanos</Nav.Link>
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
              width: "210px",
              textAlign: "center",
            }}
          >
            <Display color="white" size={22} className="align-top" />
            Intranet
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

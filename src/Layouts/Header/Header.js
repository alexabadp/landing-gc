import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Display } from "react-bootstrap-icons";
import logo from "../../Assets/Images/logo-small.png";
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
          <Nav.Link href="/" className="nav-links">
            Inicio
          </Nav.Link>
          <NavDropdown
            title={
              <span style={{ color: "#e70031", fontWeight: "bold" }}>
                Nuestros Ciclos
              </span>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="/ciclos/1">
              Ciclo Verano San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/2">
              Ciclo Verano UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/3">
              Ciclo Repaso San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/4">
              Ciclo Repaso UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/5">
              Ciclo Semestral San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/6">
              Ciclo Semestral Básico UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/7">
              Ciclo Semestral Intensivo UNI
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/8">
              Ciclo Anual San Marcos
            </NavDropdown.Item>
            <NavDropdown.Item href="/ciclos/9">
              Ciclo Semianual San Marcos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/videoclases" className="nav-links">
            Biblioteca
          </Nav.Link>
          <Nav.Link href="/contactus" className="nav-links">
            Contáctanos
          </Nav.Link>
          <Nav.Link href="/sedes" className="nav-links">
            Sedes
          </Nav.Link>
          <div
            className="intranet-button"
            onClick={() =>
              window.open("https://grupociencias.edu.pe/intranet/#/login")
            }
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "95px",
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

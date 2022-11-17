import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Binoculars, Display } from "react-bootstrap-icons";
import { HeaderContext } from "../../App";
import logo from "../../Assets/Images/logo-small.png";
import { SECOND_HEADER } from "../../Components/Shared/Constants";
import "./Header.css";

function LibraryHeader() {
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
      holaaa
    </Navbar>
  );
}

export default LibraryHeader;

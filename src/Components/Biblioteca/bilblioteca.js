import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import "./Biblioteca.css";
import image from "../../Assets/Images/course.png";
import { Button, Image } from "react-bootstrap";

function Biblioteca() {
  return (
    <>
      <div className="container container-biblioteca">
        <div className="row">
          <div className="col-lg-12 title-biblioteca">
            <BsArrowLeftShort
              style={{
                marginTop: "-5px",
                fontSize: "2rem",
              }}
            />
            Explora por cursos
          </div>
          <div className="col-lg-12 subtitle-biblioteca">
            Habilidades matemáticas
          </div>
          <div className="col-lg-12 detail-biblioteca">
            Contiene los siguientes temas
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-2">
            <Image
              src={image}
              className="navbar-logo"
              style={{ width: "219px" }}
            />
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row back-courses">
          <div className="col-lg-12">
            <Button variant="secondary">VOLVER A LOS CURSOS</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Biblioteca);

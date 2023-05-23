import { Button, Form, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import escaneos from "../../Assets/Images/escaneos.png";
import prospectos from "../../Assets/Images/prospectos.png";
import solucionarios from "../../Assets/Images/solucionarios.png";
import "./Admision.css";

function Admision() {
  return (
    <>
      <div className="container videoclases-container">
        <div className="main-videoclases-fblock">
          <div className="row videoclases-fblock mt-5">
            <div className="col-lg-4">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4">
              <Image
                src={prospectos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4">
              <Image
                src={solucionarios}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-5 mt-2">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Ciclo Verano San Marcos</option>
                <option value="2">Ciclo Verano UNI</option>
                <option value="3">Ciclo Repaso San Marcos</option>
                <option value="4">Ciclo Repaso UNI</option>
                <option value="5">Ciclo Semestral San Marcos</option>
                <option value="6">Ciclo Semestral Básico UNI</option>
                <option value="7">Ciclo Semestral Intensivo UNI</option>
                <option value="8">Ciclo Anual San Marcos</option>
                <option value="9">Ciclo Semianual San Marcos</option>
              </Form.Select>
            </div>
            <div className="col-lg-5 mt-2">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Ciclo Verano San Marcos</option>
                <option value="2">Ciclo Verano UNI</option>
                <option value="3">Ciclo Repaso San Marcos</option>
              </Form.Select>
            </div>
            <div className="col-lg-2   mt-2">
              <Button variant="danger" className="admision-button">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Admision);

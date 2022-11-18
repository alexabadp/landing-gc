import { Button, Form } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import "./Sedes.css";

function SedeInfo() {
  return (
    <>
      <div className="row sede-card">
        <div className="sede">Grupo Ciencias - Comas</div>
        <div className="row">
          <div className="col-lg-10 sede-content">
            Av. Universitaria 6403, Comas 15314
          </div>
          <div className="col-lg-1 icon-tag">
            <FaCopy
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "-6px",
                fontSize: "0.8rem",
              }}
            />
          </div>

          <div className="col-lg-1 copy-tag">copiar</div>
        </div>
        <div className="sede-content">Tel: 01 655 9088</div>
        <div className="sede-content">Whatsapp: 966381384</div>
        <div className="sede-button">
          <Button className="sede-look" variant="danger">
            Ver sede
          </Button>
        </div>
      </div>
    </>
  );
}

export default withRouter(SedeInfo);

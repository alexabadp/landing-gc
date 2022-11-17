import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Sedes.css";

function SedeInfo() {
  return (
    <>
      <div>Grupo Ciencias - Comas</div>
      <div>Tel: 01 655 9088</div>
      <div>Whatsapp: 966381384</div>
    </>
  );
}

export default withRouter(SedeInfo);

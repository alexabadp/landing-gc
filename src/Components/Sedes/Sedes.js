import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Sedeinfo from "./Sedeinfo";
import "./Sedes.css";

function Sedes() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sedes-title">Sedes</div>
            <div className="col-lg-8">
              <Form.Select aria-label="Default select example">
                <option value="1">DNI</option>
                <option value="2">Pasaporte</option>
                <option value="3">Carne Extranjeria</option>
              </Form.Select>
            </div>
            <div className="col-lg-8"></div>
          </div>
          <div className="col-lg-6">
            <Sedeinfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Sedes);

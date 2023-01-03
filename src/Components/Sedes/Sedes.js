import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Sedeinfo from "./Sedeinfo";
import SedeMap from "./SedeMap";
import "./Sedes.css";

function Sedes() {
  return (
    <>
      <div className="container sede-container">
        <div className="row sede-row">
          <div className="col-lg-5">
            <div className="sedes-title">Sedes</div>

            <div className="col-lg-8">
              <Sedeinfo />
              <Sedeinfo />
            </div>
          </div>
          <div className="col-lg-7">
            <SedeMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Sedes);

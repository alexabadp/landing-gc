import { withRouter } from "react-router-dom";
import "./Sedes.css";

function Sedes() {
  return (
    <>
      <div className="container">
        <div className="col-lg-6 col-xl-6">
          <h1>Sedes</h1>
        </div>
      </div>
      <div className="col-lg-6 col-xl-6"></div>
    </>
  );
}

export default withRouter(Sedes);

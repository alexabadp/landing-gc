import * as React from "react";
import { withRouter } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import verano from "../../Assets/Images/verano.png";
import semestral from "../../Assets/Images/semestral.png";
import repaso from "../../Assets/Images/repaso.png";
import "./Explora.css";

function Explora() {
  return (
    <>
      <div className="container container-explora">
        <div className="explora">
          <div className="header-explora">
            <h1 className="explora-title">Explora</h1>
            <h4>Conoce todos nuestros ciclos disponibles</h4>
          </div>
        </div>

        <div className="explora-images">
          <div className="verano-image col-lg-12">
            <CardMedia
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              image={verano}
              title="lorem ipsum"
            />
            <h2>Verano</h2>
          </div>
          <div className="semestral-image col-lg-12">
            <CardMedia
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              image={semestral}
              title="lorem ipsum"
            />
            <h2>Semestral</h2>
          </div>
          <div className="repaso-image col-lg-12">
            <CardMedia
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              image={repaso}
              title="lorem ipsum"
            />
            <h2>Repaso</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Explora);

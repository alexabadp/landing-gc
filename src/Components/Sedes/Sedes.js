import { useState } from "react";
import { withRouter } from "react-router-dom";
import Sede from "./Sede";
import { SedeInfo } from "./Sedeinfo";
import SedeMap from "./SedeMap";
import "./Sedes.css";

function Sedes() {
  const [position, setPosition] = useState({
    lat: -11.940829826159977,
    lng: -77.05933774548336,
  });
  return (
    <>
      <div className="container sede-container">
        <div className="row sede-row">
          <div className="col-lg-5">
            <div className="sedes-title">Sedes</div>

            <div className="col-lg-8">
              {SedeInfo.map((sedeinfo) => (
                <Sede
                  key={sedeinfo.id}
                  sedeinfo={sedeinfo}
                  position={position}
                  setPosition={setPosition}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <SedeMap position={position} />
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Sedes);

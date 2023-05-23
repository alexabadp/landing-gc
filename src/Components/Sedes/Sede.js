import { useState } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import "./Sedes.css";

function Sede({ sedeinfo, position, setPosition }) {
  const [hideImage, setHideImage] = useState(false);
  const ShowSede = (currentlat, currentlng) => {
    setHideImage(!hideImage);
    setPosition({ ...position, lat: currentlat, lng: currentlng });
  };

  return (
    <>
      <div className="row sede-card">
        <div className="sede">{sedeinfo.title}</div>
        <CopyToClipboard>
          <div className="row">
            <div className="col-lg-10 col-10 sede-content">
              {sedeinfo.address}
            </div>
            <div className="col-lg-1 col-1 icon-tag">
              <FaCopy
                style={{
                  marginTop: "-6px",
                  fontSize: "0.8rem",
                }}
              />
            </div>
            <div className="col-lg-1 col-1 copy-tag">copiar</div>
          </div>
        </CopyToClipboard>
        <div className="sede-content">Tel: {sedeinfo.phone}</div>
        <div className="sede-content">Whatsapp: {sedeinfo.mobile}</div>
        {hideImage && (
          <div className="image-sede">
            <img
              src={require(`../Sedes/Images/${sedeinfo.img}.png`)}
              className="navbar-logo"
              style={{
                marginLeft: "90px",
                marginTop: "42px",
              }}
            />
          </div>
        )}

        <div className="sede-button">
          <Button
            className="sede-look"
            variant="danger"
            onClick={() => ShowSede(sedeinfo.lat, sedeinfo.lng)}
          >
            Ver sede
          </Button>
        </div>
      </div>
    </>
  );
}

export default withRouter(Sede);

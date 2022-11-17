import "./Footer.css";
import logo from "../../Assets/Images/footer-logo.png";
import { Image } from "react-bootstrap";
import {
  FaBookOpen,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

function FooterMin() {
  const style = { fontSize: "1.5em", marginRight: "20px" };
  return (
    <footer className="c-footer footer clearfix footer-min">
      <div className="float-xs-left footer-content">
        <div className="row">
          <ul className="sidebar-nav">
            <li>
              <a>Acerca del Ciclo</a>
            </li>
            <li>
              <a>Universidades</a>
            </li>
            <li>
              <a>Ciclo</a>
            </li>
            <li>
              <a>Cuenta con nosotros</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sx-12">
            <Image
              src={logo}
              className="navbar-logo"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                width: "120px",
                height: "50px",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sx-12 min-icon">
            <div>
              <FaWhatsapp style={style} />
              <FaYoutube style={style} />
              <FaInstagram style={style} />
              <FaFacebook style={style} color="#E70031" />
              <FaTiktok style={style} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sx-12 min-icon">
            <h4>
              <FaBookOpen
                color="white"
                size={"1.5em"}
                style={{ marginRight: "10px" }}
              />
              Libro de reclamos
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sx-12 min-icon">
            <h4>Proteccion de Datos Personales</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sx-12 min-icon">
            <h5>Copyright © 2022. ROSETT COMPANY S.A ® Marca registrada.</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMin;

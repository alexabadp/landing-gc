import "./Footer.css";
import logo from "../../Assets/Images/footer-logo.png";
import { Image } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

function Footer() {
  const style = { fontSize: "1em", marginRight: "20px" };
  return (
    <div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <Image
                src={logo}
                className="navbar-logo"
                style={{
                  marginLeft: "15px",
                }}
              />
              <h1 className="list-unstyled">
                <li>Nuestras redes socials:</li>
                <FaWhatsapp style={style} />
                <FaYoutube style={style} />
                <FaInstagram style={style} />
                <FaFacebook style={style} color="#E70031" size={"1.5em"} />
                <FaTiktok />
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Universidades</h4>
              <ul className="list-unstyled">
                <li>Universidad Nacional de Ingeniería (UNI)</li>
                <li>Universidad Nacional Mayor de San Marcos (UNMSM)</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Biblioteca</h4>
              <ul className="list-unstyled">
                <li>Videoclase</li>
                <li>Materiales</li>
                <li>Admisión</li>
                <li>Estadisticas</li>
              </ul>
            </div>
            {/* Column4 */}
            <div className="col">
              <h4>Cuenta con nosotros</h4>
              <ul className="list-unstyled">
                <li>Contáctanos</li>
                <li>
                  <AiFillMail style={{ marginRight: "10px" }} />
                  informes@grupociencias.edu.pe
                </li>
                <li>
                  <FaTelegramPlane style={{ marginRight: "10px" }} />
                  Centro Preuniversitario ubicado en Lima, Perú
                </li>
                <li>
                  <AiFillPhone style={{ marginRight: "10px" }} />
                  970949361
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              Copyright © 2022. ROSETT COMPANY S.A ® Marca registrada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

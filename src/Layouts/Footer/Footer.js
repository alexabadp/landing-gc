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

function Footer() {
  const style = { fontSize: "0.5em", marginRight: "20px" };
  return (
    <footer className="c-footer footer clearfix">
      <div className="float-xs-left footer-content">
        <div className="row">
          <div className="col">
            <Image
              src={logo}
              className="navbar-logo"
              style={{
                marginLeft: "15px",
              }}
            />
            <h1 className="icons list-unstyled">
              <li>Nuestras redes socials:</li>
              <FaWhatsapp style={style} />
              <FaYoutube style={style} />
              <FaInstagram style={style} />
              <FaFacebook style={style} color="#E70031" size={"2.5em"} />
              <FaTiktok style={style} />
            </h1>
          </div>

          <div className="col">
            <h4>Universidades</h4>
            <ul className="uni-list list-unstyled">
              <li>Universidad Nacional de Ingeniería (UNI)</li>
              <li>Universidad Nacional Mayor de San Marcos (UNMSM)</li>
            </ul>
          </div>

          <div className="col">
            <h4>Biblioteca</h4>
            <ul className="library list-unstyled">
              <li>Videoclase</li>
              <li>Materiales</li>
              <li>
                <a className="footer-link" href="/libroreclamaciones">
                  Admisión
                </a>
              </li>
              <li>
                <a className="footer-link" href="/politicaproteccion">
                  Estadisticas
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>Cuenta con nosotros</h4>
            <ul className="count list-unstyled">
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

        <div className="row">
          <div className="copy col-xl-6 col-sx-12 ">
            Copyright © 2022. EXAFRAME S.A ® Marca registrada.
          </div>
          <div className="claim col-xl-6 col-sx-12">
            <FaBookOpen
              color="white"
              size={"1.5em"}
              style={{ marginRight: "20px" }}
            />
            Libro de reclamos
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

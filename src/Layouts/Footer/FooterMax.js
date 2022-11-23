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

function FooterMax() {
  const style = { fontSize: "0.5em", marginRight: "20px" };
  return (
    <footer className="c-footer footer clearfix footer-max">
      <div className="float-xs-left footer-content">
        <div className="row">
          <div className="col-xl-3">
            <Image
              src={logo}
              className="navbar-logo"
              style={{
                marginLeft: "0px",
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

          <div className="col-xl-3">
            <h4>Universidades</h4>
            <ul className="uni-list list-unstyled">
              <li>Universidad Nacional de Ingeniería (UNI)</li>
              <li>Universidad Nacional Mayor de San Marcos (UNMSM)</li>
            </ul>
          </div>

          <div className="col-xl-3 d-flex justify-content-center">
            <ul className="library list-unstyled">
              <h4>Biblioteca</h4>
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

          <div className="col-xl-3">
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
          <div className="copy col-lg-6">
            Copyright © 2022. EXAFRAME S.A ® Marca registrada.
          </div>
          <div className="claim col-lg-3 claim-book">
            <FaBookOpen
              color="white"
              size={"1.5em"}
              style={{ marginRight: "20px" }}
            />
            <a href="/libroreclamaciones">Libro de reclamos</a>
          </div>
          <div className="claim col-lg-3 data-protect">
            <a href="/politicaproteccion">Proteccion de Datos Personales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMax;

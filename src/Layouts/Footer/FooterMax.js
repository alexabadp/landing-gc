import { Image } from "react-bootstrap";
import { AiFillMail, AiFillSchedule } from "react-icons/ai";
import {
  FaBookOpen,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../Assets/Images/footer-logo.png";
import "./Footer.css";

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
              <div style={{ paddingLeft: "25px" }}>
                <li>Educación sin límites:</li>
              </div>

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
            </ul>
          </div>

          <div className="col-xl-3">
            <h4 className="mb-4">Contáctanos</h4>
            <ul className="count list-unstyled">
              <li>
                <AiFillMail style={{ marginRight: "10px" }} />
                informes@grupociencias.edu.pe
              </li>
              <li>
                <FaTelegramPlane style={{ marginRight: "10px" }} />
                Sede San Juan de Lurigancho (01) 6221103
              </li>
              <li>
                <FaTelegramPlane style={{ marginRight: "10px" }} />
                Sede Comas (01) 6330205
              </li>
              <li>
                <AiFillSchedule style={{ marginRight: "10px" }} />
                Horario de atención:
                <ul className="mt-4">
                  <li>lunes a viernes de 8am a 5pm</li>
                  <li>sábados de 9am a 12m</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="copy col-lg-6" style={{ marginTop: "0px" }}>
            Copyright © 2022. EXAFRAME S.A ® Marca registrada.
          </div>
          <div
            className="claim col-lg-3 claim-book"
            style={{ marginTop: "0px" }}
          >
            <FaBookOpen
              color="white"
              size={"1.5em"}
              style={{ marginRight: "20px" }}
            />
            <a href="/libroreclamaciones">Libro de reclamos</a>
          </div>
          <div
            className="claim col-lg-3 data-protect"
            style={{ marginTop: "0px" }}
          >
            <a href="/politicaproteccion">Proteccion de Datos Personales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMax;

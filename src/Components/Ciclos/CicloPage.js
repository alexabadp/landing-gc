import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsDownload, BsFillStopwatchFill } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";
import { useParams } from "react-router-dom";
import bbva from "../../Assets/Images/bbva.png";
import bcp from "../../Assets/Images/bcp.png";
import scotia from "../../Assets/Images/scotia.png";
import yape from "../../Assets/Images/yape.png";
import ContactForm from "../ContactUs/ContactForm";
import { CicloInfo } from "./CicloInfo";
import "./CicloPage.css";
import Horario from "./Horario";

function CicloPage() {
  const { idCiclo } = useParams();
  const [show, setShow] = useState(false);

  function showHorario() {
    setShow(true);
  }

  const ciclo = CicloInfo.find((obj) => {
    return obj.id == idCiclo;
  });

  return (
    <>
      <div className="container landing-container">
        <div className="row">
          <div className="row first-block">
            <div className="col-lg-4">
              <div className="ciclo">{ciclo.subtitle}</div>
              <div className="verano">{ciclo.title}</div>
              <p>{ciclo.titleresume}</p>
              <div className="enroll-div">
                <Button
                  variant="danger"
                  className="enroll"
                  style={{ borderRadius: "50px" }}
                >
                  Matricúlate ahora
                </Button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row image-ciclo">
                <div className="col-lg-6">
                  <img src={ciclo.Image} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row second-block">
            <div className="col-lg-7">
              <div className="row resume-info">
                <div className="resume">Resumen</div>
                <p>{ciclo.resumen}</p>
              </div>
              <div className="about">Acerca del ciclo</div>
              <div className="ciclo-detail">
                <div className="row">
                  <div className="col-lg-5 col-xl-12 subtitle">
                    Fecha de inicio:
                  </div>
                  <div className="col-lg-7 col-xl-12 values">
                    {ciclo.inicio}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-xl-12 subtitle">Fecha fin:</div>
                  <div className="col-lg-7 col-xl-12 values">{ciclo.fin}</div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-xl-12 subtitle">Horario: </div>
                  <div className="col-lg-7 col-xl-12 values">
                    {ciclo.horario}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 info">
              <div className="duration-detail">
                <div className="row duration">
                  <div className="col-lg-8 col-7 subtitle">
                    <BsFillStopwatchFill
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    Duración :
                  </div>
                  <div className="col-lg-4 col-5 value">{ciclo.duracion}</div>
                </div>
                <div className="row duration">
                  <div className="col-lg-8 col-7 subtitle">
                    <AiFillThunderbolt
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    Modalidad :
                  </div>
                  <div className="col-lg-4 col-5 value">
                    Presencial / virtual
                  </div>
                </div>
                <div className="row duration">
                  <div className="col-lg-12 subtitle">
                    <BsDownload
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    <a href={ciclo.temario} target="_blank">
                      Descargar temario
                    </a>
                  </div>
                </div>
                <div
                  className="row duration"
                  onClick={() => showHorario()}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-lg-12 subtitle">
                    <FaChrome
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    Mostrar horario
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row third-block">
            <div className="col-lg-2 payment-method">Medios de Pago</div>
            <div className="col-lg-4 payment-type">
              Paga con tarjeta en un agente o tu aplicativo
            </div>
            <div className="col-lg-2">
              <Image
                src={bcp}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-lg-1">
              <Image
                src={bbva}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-lg-1">
              <Image
                src={yape}
                className="navbar-logo"
                style={{
                  marginLeft: "30px",
                }}
              />
            </div>
            <div className="col-lg-2">
              <Image
                src={scotia}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>

          <div className="row fourth-block">
            <div className="col-lg-5">
              <div className="title-enjoy">Disfruta del formato virtual</div>
              <div className="subtitle-enjoy">
                Prepárate con nosotros desde la comodidad de tu hogar
              </div>
              <div className="list-enjoy">
                <ul>
                  <li>Clases en vivo en HD con todos nuestros docentes.</li>
                  <li>Los profesores usan pizarras y tizas.</li>
                  <li>Grabación de las clases para repasar contenidos.</li>
                  <li>Simulacros tipo examen de admisión</li>
                  <li>Materiales prácticos en PDF para descargar.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 notebook-div">
              <Image
                src={ciclo.imageBottom}
                className="navbar-logo"
                style={{ marginTop: "-20px", marginLeft: "40px" }}
              />
            </div>
          </div>

          <div className="row fourth-block">
            <div className="title-signnow">Inscríbete ahora</div>
            <br />
            <br />
            <ContactForm />
          </div>
        </div>
      </div>
      <Horario show={show} close={() => setShow(false)} ciclo={ciclo} />
    </>
  );
}

export default CicloPage;

import { Button, Form, Image } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import { Algebra } from "../../Assets/Courses-Slide/Algebra";
import { Biologia } from "../../Assets/Courses-Slide/Biologia";
import { HistoriaU } from "../../Assets/Courses-Slide/Historia-u";
import { Lenguaje } from "../../Assets/Courses-Slide/Lenguaje";
import { Quimica } from "../../Assets/Courses-Slide/Quimica";
import { RazonamientoMat } from "../../Assets/Courses-Slide/Razonamiento-mat";
import escaneos from "../../Assets/Images/escaneos.png";
import Slider from "../../Layouts/NetflixSlider";
import "./VideoClases.css";

function VideoClases() {
  return (
    <>
      <div className="container videoclases-container">
        <div className="main-videoclases-fblock">
          <div className="row videoclases-fblock">
            <div className="col-lg-12 mt-4 videoclases-fblock">
              <ReactPlayer
                url="https://youtu.be/UZ1xi5HJP6c"
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
                muted={true}
              />
            </div>
            <div className="col-lg-12 mt-1 courses-explore">
              Explora por cursos
            </div>
            <div className="col-lg-4 mt-5">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Universidad</option>
                <option value="2">Universidad Mayor de San Marcos</option>
                <option value="3">Universidad Nacional de Ingenieria</option>
              </Form.Select>
            </div>
            <div className="col-lg-3 mt-5">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Ciclo Verano San Marcos</option>
                <option value="2">Ciclo Verano UNI</option>
                <option value="3">Ciclo Repaso San Marcos</option>
                <option value="4">Ciclo Repaso UNI</option>
                <option value="5">Ciclo Semestral San Marcos</option>
                <option value="6">Ciclo Semestral Básico UNI</option>
                <option value="7">Ciclo Semestral Intensivo UNI</option>
                <option value="8">Ciclo Anual San Marcos</option>
                <option value="9">Ciclo Semianual San Marcos</option>
              </Form.Select>
            </div>
            <div className="col-lg-3 mt-5">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Ciclo Verano San Marcos</option>
                <option value="2">Ciclo Verano UNI</option>
                <option value="3">Ciclo Repaso San Marcos</option>
                <option value="4">Ciclo Repaso UNI</option>
                <option value="5">Ciclo Semestral San Marcos</option>
                <option value="6">Ciclo Semestral Básico UNI</option>
                <option value="7">Ciclo Semestral Intensivo UNI</option>
                <option value="8">Ciclo Anual San Marcos</option>
                <option value="9">Ciclo Semianual San Marcos</option>
              </Form.Select>
            </div>
            <div className="col-lg-2 mt-5">
              <Button variant="danger" className="admision-button">
                Buscar
              </Button>
            </div>

            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-lg-12 col-12 mt-5">
              <div className="courses-explore">Razonamiento Matemático</div>
              <div className="div-slider">
                <Slider>
                  {RazonamientoMat.map((razonamientoMat) => (
                    <Slider.Item
                      movie={razonamientoMat}
                      key={razonamientoMat.id}
                    >
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Lenguaje</div>
              <div className="div-slider">
                <Slider>
                  {Lenguaje.map((lenguaje) => (
                    <Slider.Item movie={lenguaje} key={lenguaje.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Historia Universal</div>
              <div className="div-slider">
                <Slider>
                  {HistoriaU.map((historiaU) => (
                    <Slider.Item movie={historiaU} key={historiaU.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Química</div>
              <div className="div-slider">
                <Slider>
                  {Quimica.map((quimica) => (
                    <Slider.Item movie={quimica} key={quimica.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Biología</div>
              <div className="div-slider">
                <Slider>
                  {Biologia.map((biologia) => (
                    <Slider.Item movie={biologia} key={biologia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Álgebra</div>
              <div className="div-slider">
                <Slider>
                  {Algebra.map((algebra) => (
                    <Slider.Item movie={algebra} key={algebra.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12 down-bar">
              <div className="arrow-right">
                <a style={{ color: "red" }} href="/videoclases-dos">
                  Siguiente
                  <FaArrowAltCircleRight
                    color="#E70031"
                    size="2.5rem"
                    style={{ marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(VideoClases);

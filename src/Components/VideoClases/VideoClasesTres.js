import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import { Anatomia } from "../../Assets/Courses-Slide/Anatomia";
import { Civica } from "../../Assets/Courses-Slide/Civica";
import { Ingles } from "../../Assets/Courses-Slide/Ingles";
import { Psicologia } from "../../Assets/Courses-Slide/Psicologia";
import { RazonamientoVerbal } from "../../Assets/Courses-Slide/Razonamiento-verbal";
import { Trigonometria } from "../../Assets/Courses-Slide/trigonometria";
import Slider from "../../Layouts/NetflixSlider";
import "./VideoClases.css";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function VideoClasesTres() {
  return (
    <>
      <div className="container videoclases-container">
        <div className="main-videoclases-fblock">
          <div className="row videoclases-fblock">
            <div className="col-lg-12 videoclases-fblock">
              <ReactPlayer
                url="https://youtu.be/UZ1xi5HJP6c"
                className="react-player"
                playing
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Anatomía</div>
              <div className="div-slider">
                <Slider>
                  {Anatomia.map((anatomia) => (
                    <Slider.Item movie={anatomia} key={anatomia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Psicología</div>
              <div className="div-slider">
                <Slider>
                  {Psicologia.map((psicologia) => (
                    <Slider.Item movie={psicologia} key={psicologia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Cívica</div>
              <div className="div-slider">
                <Slider>
                  {Civica.map((civica) => (
                    <Slider.Item movie={civica} key={civica.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Inglés</div>
              <div className="div-slider">
                <Slider>
                  {Ingles.map((Ingles) => (
                    <Slider.Item movie={Ingles} key={Ingles.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Razonamiento verbal</div>
              <div className="div-slider">
                <Slider>
                  {RazonamientoVerbal.map((rverbal) => (
                    <Slider.Item movie={rverbal} key={rverbal.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Trigonometría</div>
              <div className="div-slider">
                <Slider>
                  {Trigonometria.map((trigonometria) => (
                    <Slider.Item movie={trigonometria} key={trigonometria.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="row down-bar">
              <div className="col-lg-6 arrow-left">
                <a style={{ color: "red" }} href="/videoclases-dos">
                  <FaArrowAltCircleLeft
                    color="#E70031"
                    size="2.5rem"
                    style={{ marginRight: "10px" }}
                  />
                  Anterior
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(VideoClasesTres);

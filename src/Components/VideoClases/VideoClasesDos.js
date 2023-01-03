import { withRouter } from "react-router-dom";
import "./VideoClases.css";
import Slider from "../../Layouts/NetflixSlider";
import ReactPlayer from "react-player";
import { HistoriaP } from "../../Assets/Courses-Slide/Historia-p";
import { Literatura } from "../../Assets/Courses-Slide/Literatura";
import { Fisica } from "../../Assets/Courses-Slide/Fisica";
import { Economia } from "../../Assets/Courses-Slide/Economia";
import { Aritmetica } from "../../Assets/Courses-Slide/Aritmetica";
import { Geografia } from "../../Assets/Courses-Slide/Geografia";
import { Filosofia } from "../../Assets/Courses-Slide/Filosofia";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function VideoClasesDos() {
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
              <div className="courses-explore">Historia del Perú</div>
              <div className="div-slider">
                <Slider>
                  {HistoriaP.map((historiaP) => (
                    <Slider.Item movie={historiaP} key={historiaP.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Literatura</div>
              <div className="div-slider">
                <Slider>
                  {Literatura.map((literatura) => (
                    <Slider.Item movie={literatura} key={literatura.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Física</div>
              <div className="div-slider">
                <Slider>
                  {Fisica.map((fisica) => (
                    <Slider.Item movie={fisica} key={fisica.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Economía</div>
              <div className="div-slider">
                <Slider>
                  {Economia.map((economia) => (
                    <Slider.Item movie={economia} key={economia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Aritmética</div>
              <div className="div-slider">
                <Slider>
                  {Aritmetica.map((aritmetica) => (
                    <Slider.Item movie={aritmetica} key={aritmetica.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Geografía</div>
              <div className="div-slider">
                <Slider>
                  {Geografia.map((geografia) => (
                    <Slider.Item movie={geografia} key={geografia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="courses-explore">Filosofía</div>
              <div className="div-slider">
                <Slider>
                  {Filosofia.map((filosofia) => (
                    <Slider.Item movie={filosofia} key={filosofia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="row down-bar">
                <div className="col-lg-6 arrow-left">
                  <a style={{ color: "white" }} href="/videoclases">
                    <FaArrowAltCircleLeft
                      color="white"
                      size="2.5rem"
                      style={{ marginRight: "10px" }}
                    />
                    Anterior
                  </a>
                </div>
                <div className="col-lg-6 arrow-right">
                  <a style={{ color: "red" }} href="/videoclases-tres">
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
      </div>
    </>
  );
}

export default withRouter(VideoClasesDos);

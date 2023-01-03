import { withRouter } from "react-router-dom";
import "./VideoClases.css";
import Slider from "../../Layouts/NetflixSlider";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import { RazonamientoMat } from "../../Assets/Courses-Slide/Razonamiento-mat";
import { Lenguaje } from "../../Assets/Courses-Slide/Lenguaje";
import { HistoriaU } from "../../Assets/Courses-Slide/Historia-u";
import { Quimica } from "../../Assets/Courses-Slide/Quimica";
import { Biologia } from "../../Assets/Courses-Slide/Biologia";
import { Algebra } from "../../Assets/Courses-Slide/Algebra";
import { Courses } from "../../Assets/Courses-Slide/Courses";
import { FaArrowAltCircleRight } from "react-icons/fa";

const movies = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    image: "/images/slide5.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
  {
    id: 7,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
];

function VideoClases() {
  console.log(Lenguaje);
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
              <div className="courses-explore">Explora por cursos</div>
              <div className="div-slider">
                <Slider>
                  {Courses.map((Courses) => (
                    <Slider.Item movie={Courses} key={Courses.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-12 col-12">
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

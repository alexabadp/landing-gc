import { Button, Image } from "react-bootstrap";
import yape from "../../Assets/Images/yape.png";
import bcp from "../../Assets/Images/bcp.png";
import home from "../../Assets/Images/home-image.png";
import girlNotes from "../../Assets/Images/girl-notes.png";
import brain from "../../Assets/Images/brain.png";
import cicloVerano from "../../Assets/Images/ciclo-verano.png";
import repasoVerano from "../../Assets/Images/repaso-verano.png";
import repasoVeranoUni from "../../Assets/Images/repaso-verano-uni.png";
import "./Home.css";
import { BsDownload, BsFillStopwatchFill } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import Homeview from "./Homeview";
function Home() {
  return (
    <>
      <div className="container-fluid container-home">
        <div className="main-home-fblock">
          <div className="row home-fblock">
            <div className="col-lg-4 home-fblock-title">
              <div className="access-university">
                ¡Ingresa a la universidad que quieres!
              </div>
              <p>
                Matricúlate en nuestros programas y ciclos preuniversitarios
                ahora mismo y logra tus metas
              </p>
              <div className="enroll-div">
                <Button variant="danger" className="explore-button">
                  Explora nuestros ciclos
                </Button>
              </div>
            </div>
            <div className="col-lg-8 image-container">
              <div className="row">
                <div className="col-lg-12">
                  <Image
                    src={home}
                    className="navbar-logo"
                    style={{
                      marginLeft: "90px",
                      marginTop: "42px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-home-sblock">
          <div className="row home-sblock">
            <div className="col-lg-4 image-container">
              <div className="row">
                <div className="col-lg-12">
                  <Image
                    src={girlNotes}
                    className="navbar-logo"
                    style={{
                      marginLeft: "90px",
                      marginTop: "42px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 home-sblock-title">
              <div className="who-we-are">¿Quiénes somos?</div>
              <p>
                Somos una institución educativa consolidada en el mundo
                preuniversitario con el objetivo de formar estudiantes con un
                alto nivel académico y acorde al mundo actual, cultivando
                habilidades que les permitan afrontar con éxito los retos de su
                vida profesional y personal
              </p>
              <div className="home-sblock-video">
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="main-home-tblock">
          <div className="row home-tblock">
            <div className="col-lg-6 home-tblock-title">
              <div className="free-classes">
                Videoclases gratuitas en nuestra plataforma
              </div>
              <p>
                Nuestra plataforma con todos los recursos disponibles de las
                universidades mas prestigiosas del paìs esperan a que le eches
                un ojo! No esperes màs
              </p>
              <Button variant="danger" className="free-button">
                Ir a Biblioteca FREE
              </Button>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12 brain-image">
                  <Image
                    src={brain}
                    className="navbar-logo"
                    style={{
                      marginLeft: "90px",
                      marginTop: "42px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-home-foblock">
          <div className="row home-foblock">
            <div className="col-lg-12 home-foblock-title">
              <div className="all-cicles">Todos nuestros ciclos</div>
              <div className="row">
                <div className="col-lg-4">
                  <Image src={cicloVerano} className="navbar-logo" style={{}} />
                </div>
                <div className="col-lg-4">
                  <Image
                    src={repasoVerano}
                    className="navbar-logo"
                    style={{}}
                  />
                </div>
                <div className="col-lg-4">
                  <Image
                    src={repasoVeranoUni}
                    className="navbar-logo"
                    style={{}}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <Image src={cicloVerano} className="navbar-logo" style={{}} />
                </div>
                <div className="col-lg-4">
                  <Image
                    src={repasoVeranoUni}
                    className="navbar-logo"
                    style={{}}
                  />
                </div>
                <div className="col-lg-4">
                  <Image
                    src={repasoVeranoUni}
                    className="navbar-logo"
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Homeview />
    </>
  );
}

export default Home;

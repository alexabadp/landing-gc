import { Button, Image } from "react-bootstrap";
import yape from "../../Assets/Images/yape.png";
import bcp from "../../Assets/Images/bcp.png";
import home from "../../Assets/Images/home-image.png";
import girlNotes from "../../Assets/Images/girl-notes.png";
import brain from "../../Assets/Images/brain.png";
import cicloVerano from "../../Assets/Images/ciclo-verano.png";
import repasoVerano from "../../Assets/Images/repaso-verano.png";
import repasoVeranoUni from "../../Assets/Images/repaso-verano-uni.png";
import "./Homeview.css";
import { BsDownload, BsFillStopwatchFill } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import Heroslider from "./Heroslider";
function Homeview() {
  return (
    <>
      <div className="container-fluid container-shome">
        <div className="main-shome-fblock">
          <div className="row">
            <div className="col-lg-12">
              <Heroslider />
              {/* <div className="access-suniversity">
                ¡Ingresa a la universidad que quieres!
              </div>
              <p>
                Matricúlate en nuestros programas y ciclos preuniversitarios
                ahora mismo y logra tus metas
              </p>
              <div className="shome-fblock-image">
                <Image
                  src={home}
                  className="navbar-logo"
                  style={{ width: "400px", height: "500px" }}
                />
              </div>
              <div className="shome-fblock-button">
                <Button variant="danger" className="explore-button">
                  Explora nuestros ciclos
                </Button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="main-shome-sblock">
          <div className="main-shome-sblock">
            <div className="swho-we-are">¿Quiénes somos?</div>
            <p>
              Somos una institución educativa consolidada en el mundo
              preuniversitario
            </p>
            <div className="shome-sblock-video">
              <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
            </div>
          </div>
        </div>
        <div className="main-shome-tblock">
          <div className="main-shome-tblock">
            <div className="shome-tblock-image">
              <Image
                src={brain}
                className="navbar-logo"
                style={{ maxWidth: "50%", maxHeight: "50%", marginTop: "20px" }}
              />
            </div>
            <div className="shome-tblock-title">
              Videoclases gratuitas en nuestra plataforma
            </div>
            <p>
              Nuestra plataforma con todos los recursos disponibles de las
              universidades mas prestigiosas del paìs esperan a que le eches un
              ojo! No esperes màs
            </p>
            <div className="shome-tblock-button">
              <Button variant="danger" className="free-button">
                Ir a Biblioteca FREE
              </Button>
            </div>
          </div>
        </div>
        <div className="main-shome-foblock">
          <div className="main-shome-foblock">
            <div className="shome-foblock-title">Todos nuestros ciclos</div>
            <Image
              src={repasoVerano}
              className="navbar-logo"
              style={{ width: "350px", height: "170px" }}
            />
            <Image
              src={repasoVerano}
              className="navbar-logo"
              style={{ width: "350px", height: "170px" }}
            />
            <Image
              src={repasoVerano}
              className="navbar-logo"
              style={{ width: "350px", height: "170px" }}
            />
          </div>
        </div>
        <div className="main-shome-fiblock">
          <div className="main-shome-fiblock">
            <div className="shome-fiblock-title">
              Conoce a nuestros ingresantes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeview;

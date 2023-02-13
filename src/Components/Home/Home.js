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
import Comunicado from "../Comunicado/Comunicado";
import { useState } from "react";
import ReactPlayer from "react-player";
import ContactForm from "../ContactUs/ContactForm";
import ImageSlider from "./Imageslider";
import Heroslider from "./Heroslider";
const slides = [
  { url: "http://localhost:3000/slides/image-1.png", title: "beach" },
  { url: "http://localhost:3000/slides/image-2.png", title: "boat" },
  { url: "http://localhost:3000//slides/image-3.png", title: "forest" },
  { url: "http://localhost:3000/slides/image-4.png", title: "city" },
  { url: "http://localhost:3000/slides/image-5.png", title: "italy" },
];
const containerStyles = {
  width: "1440px",
  height: "712px",
  margin: "0 auto",
};
function Home() {
  return (
    <>
      <div className="container-fluid container-home">
        <div className="main-home-fblock">
          <div className="row home-fblock">
            <Heroslider />
            {/* <div style={containerStyles}>
              <ImageSlider slides={slides} />
            </div> */}
            {/* <div className="col-lg-4 home-fblock-title">
              <div className="access-university">
                ¡Ingresa a la universidad que quieres!
              </div>
              <p>
                Matricúlate en nuestros programas y ciclos preuniversitarios
                ahora mismo y logra tus metas
              </p>
              <div className="enroll-div">
                <Button
                  variant="danger"
                  className="explore-button"
                  style={{ borderRadius: "50px" }}
                >
                  Conoce nuestros ciclos
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
            </div> */}
          </div>
        </div>

        <div className="main-home-sblock">
          <div className="row home-sblock">
            <div className="col-lg-4 image-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="home-sblock-video">
                    <ReactPlayer
                      url="https://youtu.be/84Ab2z-MUWw"
                      className="react-player"
                      playing
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 home-sblock-title">
              <div className="who-we-are">¿Quiénes somos?</div>
              <p>
                Somos una academia consolidada en el mundo preuniversitario que
                tiene por objetivo formar estudiantes de alto nivel y cultivar
                habilidades que les permitan afrontar con éxito el examen de
                admisión de San Marcos y UNI.
              </p>
            </div>
          </div>
        </div>

        <div className="main-home-tblock">
          <div className="row home-tblock">
            <div className="col-lg-6 home-tblock-title">
              <div className="free-classes">
                La academia peruana más grande de YouTube
              </div>
              <p>
                Clases en vivo, materiales en PDF, repasos, maratones,
                solucionarios, exámenes de admisión escaneados y mucho más; Todo
                esto gratis y a un sólo click
              </p>
              <Button
                variant="danger"
                className="free-button"
                style={{ borderRadius: "50px" }}
              >
                Biblioteca FREE
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
              <div className="all-cicles">Nuestros ciclos</div>
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

        <div className="main-home-fiblock">
          <div className="row home-fiblock">
            <div className="col-lg-12">
              <div className="title-signnow">Inscríbete ahora</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Homeview />
      <Comunicado />
    </>
  );
}

export default Home;

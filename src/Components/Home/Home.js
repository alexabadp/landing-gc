import { Button, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import "../../../node_modules/video-react/dist/video-react.css";
import anualSM from "../../Assets/Images/ANUAL UNMSM.png";
import repasoSM from "../../Assets/Images/REPASO UNMSM.png";
import semestralSM from "../../Assets/Images/SEMESTRAL ABC.png";
import semestralUNI from "../../Assets/Images/SEMESTRAL BASICO UNI.png";
import semestralSM2 from "../../Assets/Images/SEMESTRAL DE.png";
import semestralIUNI from "../../Assets/Images/SEMESTRAL INTENSIVO UNI.png";
import brain from "../../Assets/Images/brain2.png";
import Comunicado from "../Comunicado/Comunicado";
import ContactForm from "../ContactUs/ContactForm";
import Heroslider from "./Heroslider";
import "./Home.css";
import Homeview from "./Homeview";
import { Box, Container, Grid, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Heroslider />
      <Container maxWidth="xl">
        <Grid container margin="auto" alignItems="center">
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              marginBottom: "30px",
              paddingRight: { xs: "5px", sm: "15px", lg: "50px" },
            }}
          >
            <Box maxWidth="600px" maxHeight="500px" margin="auto">
              <ReactPlayer
                url="https://youtu.be/84Ab2z-MUWw"
                className="react-player"
                playing
                width="100%"
                // height="100%"
                controls={true}
                muted={true}
              />
            </Box>
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              marginBottom: "30px",
              paddingLeft: { xs: "5px", sm: "15px", lg: "50px" },
            }}
          >
            <Typography
              component="h2"
              fontWeight="700"
              sx={{
                paddingBottom: { xs: "10px", lg: "30px" },
                fontSize: { xs: "28px", lg: "38px" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              ¿Quiénes somos?
            </Typography>
            <Typography
              component="p"
              fontWeight="300"
              maxWidth="500px"
              sx={{
                margin: { xs: "auto", lg: "0" },
                fontSize: { xs: "18px", lg: "24px" },
                // textAlign: { xs: "center", lg: "left" },
                textAlign: { xs: "justify", lg: "justify" },
              }}
            >
              Somos una academia consolidada en el mundo preuniversitario que
              tiene por objetivo formar estudiantes de alto nivel y cultivar
              habilidades que les permitan afrontar con éxito el examen de
              admisión de San Marcos y UNI.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <div className="container-fluid container-home">
        <div className="main-home-fblock">
          <div className="row home-fblock">{/* <Heroslider /> */}</div>
        </div>

        {/* <div className="main-home-sblock">
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
                      muted={true}
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
        </div> */}

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
                  <img
                    src={brain}
                    className="navbar-logo"
                    style={{
                      marginLeft: "90px",
                      marginTop: "42px",
                    }}
                    alt="logo"
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
                  <a href="/ciclos/8">
                    <Image src={anualSM} className="navbar-logo" style={{}} />
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="/ciclos/3">
                    <Image src={repasoSM} className="navbar-logo" style={{}} />
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="/ciclos/5">
                    <Image
                      src={semestralSM}
                      className="navbar-logo"
                      style={{}}
                    />
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <a href="/ciclos/6">
                    <Image
                      src={semestralUNI}
                      className="navbar-logo"
                      style={{}}
                    />
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="/ciclos/1">
                    <Image
                      src={semestralSM2}
                      className="navbar-logo"
                      style={{}}
                    />
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="/ciclos/7">
                    <Image
                      src={semestralIUNI}
                      className="navbar-logo"
                      style={{}}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-home-siblock">
          <div className="row home-siblock">
            <div className="col-lg-12 home-foblock-title">
              <div className="new-students">Nuestros Cachimbos</div>
              <div className="row">
                <div className="col-lg-6 new-video">
                  <div className="home-sblock-video">
                    <ReactPlayer
                      url="https://youtu.be/4uZyWhs6nz0"
                      className="react-player"
                      width="100%"
                      height="100%"
                      controls={true}
                      muted={true}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home-sblock-video">
                    <ReactPlayer
                      url="https://youtu.be/sG9XBStT_AU"
                      className="react-player"
                      width="100%"
                      height="100%"
                      controls={true}
                      muted={true}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-6">
                  <div className="home-sblock-video">
                    <ReactPlayer
                      url="https://youtu.be/VC5txt6vYfc"
                      className="react-player"
                      width="100%"
                      height="100%"
                      controls={true}
                      muted={true}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home-sblock-video">
                    <ReactPlayer
                      url="https://youtu.be/e55FLh9b74M"
                      className="react-player"
                      width="100%"
                      height="100%"
                      controls={true}
                      muted={true}
                    />
                  </div>
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
      {/* <Homeview /> */}
      <Comunicado />
    </>
  );
}

export default Home;

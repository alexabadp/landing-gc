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
import SeccionCiclos from "./Secciones/SeccionCiclos";
import SeccionCachimbos from "./Secciones/SeccionCachimbos";
import SeccionContactanos from "./Secciones/SeccionContactanos";
import SeccionFooter from "./Secciones/SeccionFooter";

function Home() {
  return (
    <>
      <Heroslider />

      {/* //Quienes somos */}
      <Container
        maxWidth="xl"
        sx={{
          paddingBottom: { xs: "10px", lg: "50px" },
          paddingTop: { xs: "10px", lg: "50px" },
        }}
      >
        <Grid container margin="auto" alignItems="center">
          <Grid item xs={12} lg={6} paddingBottom="20px">
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
            <Box maxWidth="600px" margin="auto">
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
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* //Presencia en Yuotube */}
      <Box
        sx={{
          background: "rgba(231, 0, 49, 0.08)",
          paddingBottom: { xs: "20px", lg: "50px" },
          paddingTop: { xs: "20px", lg: "50px" },
        }}
      >
        <Container maxWidth="xl">
          <Grid container margin="auto" alignItems="center">
            <Grid
              xs={12}
              lg={6}
              sx={{
                marginBottom: "30px",
                paddingRight: { xs: "5px", sm: "15px", lg: "50px" },
              }}
            >
              <Box maxWidth="600px" margin="auto">
                <Typography
                  component="h2"
                  fontWeight="700"
                  sx={{
                    paddingBottom: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "28px", lg: "38px" },
                    textAlign: { xs: "center", lg: "left" },
                  }}
                >
                  La academia peruana más grande de YouTube
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
                  Clases en vivo, materiales en PDF, repasos, maratones,
                  solucionarios, exámenes de admisión escaneados y mucho más.
                  Todo esto gratis y a un sólo click
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                marginBottom: "30px",
                paddingLeft: { xs: "5px", sm: "15px", lg: "50px" },
              }}
            >
              <Box maxWidth="600px" margin="auto">
                <img src={brain} width="100%" alt="logo" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <SeccionCiclos />

      <SeccionCachimbos />

      <SeccionContactanos />

      <Comunicado />
    </>
  );
}

export default Home;

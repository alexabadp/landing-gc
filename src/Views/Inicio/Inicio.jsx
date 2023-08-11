// import ReactPlayer from "react-player";
// import "../../../node_modules/video-react/dist/video-react.css";
// import { Link } from "react-router-dom";

import { useEffect } from "react";
import AcademiaYoutube from "../../Components/AcademiaYoutube/AcademiaYoutube";
import Comunicado from "../../Components/Comunicado/Comunicado";
import FormularioInscripcion from "../../Components/FormularioInscripcion/FormularioInscripcion";
import Heroslider from "../../Components/HeroSlider/HeroSlider";
import QuienesSomos from "../../Components/QuienesSomos/QuienesSomos";
import SeccionCachimbos from "../../Components/SeccionCachimbos/SeccionCachimbos";
import SeccionCiclos from "../../Components/SeccionCiclos/SeccionCiclos";
import Header from "../../Layouts/Header/Header";

// import Comunicado from "../Comunicado/Comunicado";
// import Heroslider from "./Heroslider";
// import "./Home.css";
// import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import SeccionCiclos from "./Secciones/SeccionCiclos";
// import SeccionCachimbos from "./Secciones/SeccionCachimbos";
// import SeccionContactanos from "./Secciones/SeccionContactanos";
// import { useEffect } from "react";

function Inicio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <p>Hola</p> */}
      <Header />
      <Heroslider />
      <QuienesSomos />
      <AcademiaYoutube />
      <SeccionCiclos />
      <SeccionCachimbos />
      <FormularioInscripcion />
      <Comunicado />

      {/* <Container
        maxWidth="xl"
        sx={{
          paddingBottom: { xs: "20px", lg: "50px" },
          paddingTop: { xs: "20px", lg: "50px" },
        }}
      >
        <Grid container margin="auto" alignItems="center">
          <Grid item xs={12} lg={6} paddingBottom="20px">
            <Box
              sx={{ height: { xs: "280px", sm: "400px" } }}
              maxWidth="600px"
              margin="auto"
            >
              <ReactPlayer
                url="https://youtu.be/84Ab2z-MUWw"
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls={true}
                muted={true}
              />
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
            <Box maxWidth="600px" margin="auto" sx={{ padding: "0px 15px" }}>
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
                  textAlign: { xs: "left", lg: "left" },
                  padding: { xs: "0px 5px" },
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
              item
              xs={12}
              lg={6}
              sx={{
                marginBottom: "30px",
                paddingRight: { xs: "5px", sm: "15px", lg: "50px" },
              }}
            >
              <Box maxWidth="600px" margin="auto" sx={{ padding: "0 15px" }}>
                <Typography
                  component="h2"
                  fontWeight="700"
                  sx={{
                    paddingBottom: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "24px", lg: "38px" },
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
                    textAlign: { xs: "left", lg: "left" },
                    padding: { xs: "0 5px" },
                  }}
                >
                  Clases en vivo, materiales en PDF, repasos, maratones,
                  solucionarios, exámenes de admisión escaneados y mucho más.
                  Todo esto gratis y a un sólo click
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", lg: "flex-start" },
                  }}
                >
                  <Typography component={Link} to="/">
                    <Button
                      variant="contained"
                      sx={{
                        margin: "20px 0 0 0",
                        padding: "10px",
                        borderRadius: "20px",
                        backgroundColor: "rgba(255,0,0,0.85)",
                        color: "rgba(255,255,255,0.85)",
                        "&:hover": {
                          backgroundColor: "red",
                          color: "white",
                        },
                      }}
                    >
                      Ir a Biblioteca FREE
                    </Button>
                  </Typography>
                </Box>
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FDescripcion%2Fwebp%2Fbrain2.webp?alt=media&token=f091facd-959b-47ba-a65f-3e5e59627f72"
                  width="100%"
                  alt="logo"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      {/* <SeccionCiclos />

      <SeccionCachimbos />

      <SeccionContactanos />

      <Comunicado /> */}
    </>
  );
}

export default Inicio;

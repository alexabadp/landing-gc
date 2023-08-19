import { Box, Container, Grid, Typography } from "@mui/material";
import style from "./QuienesSomos.module.css";
import ReactPlayer from "react-player";
import { borders } from "@mui/system";

const QuienesSomos = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          paddingBottom: { xs: "20px", lg: "50px" },
          paddingTop: { xs: "20px", lg: "50px" },
        }}
      >
        <Grid container margin="auto" alignItems="center">
          <Grid item xs={12} lg={6} paddingBottom="20px">
            <Box
              sx={{
                height: { xs: "280px", sm: "400px" },
              }}
              maxWidth="600px"
              margin="auto"
              className={style.videoContainer}
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
    </>
  );
};

export default QuienesSomos;

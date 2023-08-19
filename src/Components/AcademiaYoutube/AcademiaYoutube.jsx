import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AcademiaYoutube = () => {
  return (
    <>
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
                  <Typography component={Link} to="/videoClases">
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
                  style={{ borderRadius: "10px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AcademiaYoutube;

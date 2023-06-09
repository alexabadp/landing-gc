import { useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import "./Sedes.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CopyTextButton from "./CopyTextButton";
import SedeMap from "./SedeMap";

function Sede({
  sedeinfo,
  position,
  setPosition,
  imagen,
  botonClick,
  imagenVisible,
}) {
  const [hideImage, setHideImage] = useState(false);

  const ShowSede = (currentlat, currentlng) => {
    setHideImage(!hideImage);
    setPosition({ ...position, lat: currentlat, lng: currentlng });
    handleClick();
  };

  const [verSede, setVerSede] = useState(false);

  const elementRef = useRef(null);

  useEffect(() => {
    if (imagenVisible === imagen) {
      setHideImage(true);
      setVerSede(true);

      const yOffset = -50; // Ajuste de 20 píxeles hacia arriba
      const element = elementRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y });
    } else {
      setHideImage(false);
      setVerSede(false);
    }
  }, [imagenVisible, imagen]);

  const handleClick = () => {
    !hideImage ? botonClick(imagen) : botonClick("");
    if (hideImage) {
      window.scrollTo({ top: 100 });
    }
  };

  return (
    <>
      <Container maxWidth="xl" ref={elementRef}>
        <Box padding="20px 0px">
          <div className="sede">{sedeinfo.title}</div>
          <CopyTextButton text={sedeinfo.address}>
            <Grid container sx={{ color: "#000", padding: "0px 0 10px 0" }}>
              <Grid item xs={9} textAlign="left">
                {sedeinfo.address}
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ margin: "auto" }}>
                <FaCopy
                  style={{
                    marginRight: "5px",
                    fontSize: "0.8rem",
                  }}
                />
              </Grid>
              <Grid item xs={2} sx={{ margin: "auto" }}>
                <Typography textTransform="none" textAlign="left">
                  copiar
                </Typography>
              </Grid>
            </Grid>
          </CopyTextButton>

          <Typography>Tel: {sedeinfo.phone}</Typography>
          <Typography>Whatsapp: {sedeinfo.mobile}</Typography>

          <div className="sede-button">
            <Button
              className="sede-look"
              variant="contained"
              sx={{
                backgroundColor: "rgba(255,0,0,0.85)",
                color: "rgba(255,255,255,0.85)",
                "&:hover": {
                  backgroundColor: "red",
                  color: "white",
                },
              }}
              onClick={() => {
                ShowSede(sedeinfo.lat, sedeinfo.lng);
              }}
            >
              <Box> {verSede ? "Ocultar" : "Ver Sede"}</Box>
            </Button>

            {/* SOLO PARA MOBILE */}

            {imagenVisible === imagen ? (
              <Box padding="10px 0px">
                <img
                  src={sedeinfo.img}
                  className="navbar-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="navbar-logo"
                />
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    minHeight="500px"
                    sx={{
                      padding: { xs: "20px 0 15px 0", md: "50px 0 15px 0" },
                      display: { xs: "inline-block", md: "none" },
                    }}
                  >
                    <SedeMap position={position} />
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box></Box>
            )}
          </div>
        </Box>
      </Container>
    </>
  );
}

export default withRouter(Sede);

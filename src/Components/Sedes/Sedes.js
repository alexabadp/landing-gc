import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Sede from "./Sede";
import { Sedeinfo } from "./Sedeinfo";
import SedeMap from "./SedeMap";
import "./Sedes.css";
import { Container, Grid, Typography } from "@mui/material";

function Sedes() {
  const [position, setPosition] = useState({
    lat: -11.940829826159977,
    lng: -77.05933774548336,
  });

  const [imagenVisible, setImagenVisible] = useState(null);

  const handleBotonClick = (imagen) => {
    setImagenVisible(imagen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{ margin: { xs: "60px 0 0px 0", sm: "60px 0 20px 0" } }}
        >
          <Grid item xs={12} md={6}>
            <Grid container sx={{ justifyContent: "space-around" }}>
              <Grid item xs={12} padding="20px">
                <Typography fontSize="44px" fontWeight="700" textAlign="center">
                  Sedes
                </Typography>
              </Grid>
              <Grid item>
                <Sede
                  key={Sedeinfo[0].id}
                  sedeinfo={Sedeinfo[0]}
                  position={position}
                  setPosition={setPosition}
                  imagen="imagen1" //comentario
                  botonClick={handleBotonClick} //comentario
                  imagenVisible={imagenVisible}
                  // valorBoton={imagenVisible === "imagen1" ? true : false}
                />

                <Sede
                  key={Sedeinfo[1].id}
                  sedeinfo={Sedeinfo[1]}
                  position={position}
                  setPosition={setPosition}
                  imagen="imagen2" //comentario
                  botonClick={handleBotonClick} //comentario
                  imagenVisible={imagenVisible}
                  // valorBoton={imagenVisible === "imagen2" ? true : false}
                />

                <Sede
                  key={Sedeinfo[2].id}
                  sedeinfo={Sedeinfo[2]}
                  position={position}
                  setPosition={setPosition}
                  imagen="imagen3" //comentario
                  botonClick={handleBotonClick} //comentario
                  imagenVisible={imagenVisible}
                  // valorBoton={imagenVisible === "imagen3" ? true : false}
                />

                {/* {console.log(Sedeinfo)}
                {Sedeinfo.map((sedeinfo) => (
                  <>
                    <Sede
                      key={sedeinfo.id}
                      sedeinfo={sedeinfo}
                      position={position}
                      setPosition={setPosition}
                    />
                  </>
                ))} */}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            minHeight="500px"
            sx={{
              padding: { xs: "20px 0 15px 0", md: "50px 0 15px 0" },
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <SedeMap position={position} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default withRouter(Sedes);

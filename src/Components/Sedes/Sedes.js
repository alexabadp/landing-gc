import { useState } from "react";
import { withRouter } from "react-router-dom";
import Sede from "./Sede";
import { Sedeinfo } from "./Sedeinfo";
import SedeMap from "./SedeMap";
import "./Sedes.css";
import { Box, Container, Grid, Typography } from "@mui/material";

function Sedes() {
  const [position, setPosition] = useState({
    lat: -11.940829826159977,
    lng: -77.05933774548336,
  });
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          // marginTop="60px"
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
                {Sedeinfo.map((sedeinfo) => (
                  <Sede
                    key={sedeinfo.id}
                    sedeinfo={sedeinfo}
                    position={position}
                    setPosition={setPosition}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            // padding="50px 0"
            minHeight="500px"
            sx={{ padding: { xs: "20px 0 15px 0", md: "50px 0 15px 0" } }}
            // maxHeight="800px"
          >
            <SedeMap position={position} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default withRouter(Sedes);

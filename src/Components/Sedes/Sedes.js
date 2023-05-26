// import { useState } from "react";
// import { withRouter } from "react-router-dom";
// import Sede from "./Sede";
// import { Sedeinfo } from "./Sedeinfo";
// import SedeMap from "./SedeMap";
// import "./Sedes.css";
// import { Container, Grid, Typography } from "@mui/material";

// function Sedes() {
//   const [position, setPosition] = useState({
//     lat: -11.940829826159977,
//     lng: -77.05933774548336,
//   });
//   return (
//     <>
//       <div className="container sede-container">
//         <div className="row sede-row">
//           <div className="col-lg-5">
//             <div className="sedes-title">Sedes</div>

//             <div className="col-lg-8">
//               {Sedeinfo.map((sedeinfo) => (
//                 <Sede
//                   key={sedeinfo.id}
//                   sedeinfo={sedeinfo}
//                   position={position}
//                   setPosition={setPosition}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="col-lg-7">
//             <SedeMap position={position} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default withRouter(Sedes);

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
        <Grid container marginTop="60px">
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

// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { FaCopy } from "react-icons/fa";
// import { withRouter } from "react-router-dom";
// import "./Sedes.css";

// function Sede({ sedeinfo, position, setPosition }) {
//   const [hideImage, setHideImage] = useState(false);
//   const ShowSede = (currentlat, currentlng) => {
//     setHideImage(!hideImage);
//     setPosition({ ...position, lat: currentlat, lng: currentlng });
//   };

//   return (
//     <>
//       <div className="row sede-card">
//         <div className="sede">{sedeinfo.title}</div>
//         <CopyToClipboard>
//           <div className="row">
//             <div className="col-lg-10 col-10 sede-content">
//               {sedeinfo.address}
//             </div>
//             <div className="col-lg-1 col-1 icon-tag">
//               <FaCopy
//                 style={{
//                   marginTop: "-6px",
//                   fontSize: "0.8rem",
//                 }}
//               />
//             </div>
//             <div className="col-lg-1 col-1 copy-tag">copiar</div>
//           </div>
//         </CopyToClipboard>
//         <div className="sede-content">Tel: {sedeinfo.phone}</div>
//         <div className="sede-content">Whatsapp: {sedeinfo.mobile}</div>
//         {hideImage && (
//           <div className="image-sede">
//             <img
//               src={sedeinfo.img}
//               className="navbar-logo"
//               style={{
//                 marginLeft: "90px",
//                 marginTop: "42px",
//               }}
//               alt="navbar-logo"
//             />
//           </div>
//         )}

//         <div className="sede-button">
//           <Button
//             className="sede-look"
//             variant="danger"
//             onClick={() => ShowSede(sedeinfo.lat, sedeinfo.lng)}
//           >
//             Ver sede
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default withRouter(Sede);

import { useState } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import "./Sedes.css";
import { Box, Container, Grid, Typography } from "@mui/material";

function Sede({ sedeinfo, position, setPosition }) {
  const [hideImage, setHideImage] = useState(false);
  const ShowSede = (currentlat, currentlng) => {
    setHideImage(!hideImage);
    setPosition({ ...position, lat: currentlat, lng: currentlng });
  };

  return (
    <>
      {/* <div className="row sede-card"> */}
      <Container maxWidth="xl">
        <Box padding="20px">
          <div className="sede">{sedeinfo.title}</div>
          <CopyToClipboard>
            <Grid container>
              <Grid item xs={8}>
                {sedeinfo.address}
              </Grid>
              <Grid item xs={2} textAlign="right">
                <FaCopy
                  style={{
                    marginRight: "5px",
                    fontSize: "0.8rem",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography textAlign="left">copiar</Typography>
              </Grid>
            </Grid>
          </CopyToClipboard>
          <div className="sede-content">Tel: {sedeinfo.phone}</div>
          <div className="sede-content">Whatsapp: {sedeinfo.mobile}</div>
          {hideImage && (
            // <div className="image-sede">
            <img
              src={sedeinfo.img}
              className="navbar-logo"
              style={{
                // marginLeft: "90px",
                // marginTop: "42px",

                width: "100%",
                height: "100%",
              }}
              alt="navbar-logo"
            />
            // </div>
          )}

          <div className="sede-button">
            <Button
              className="sede-look"
              variant="danger"
              onClick={() => ShowSede(sedeinfo.lat, sedeinfo.lng)}
            >
              Ver sede
            </Button>
          </div>
        </Box>
      </Container>
      {/* </div> */}
    </>
  );
}

export default withRouter(Sede);

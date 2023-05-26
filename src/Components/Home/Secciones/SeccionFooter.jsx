//MaterialUI
import { Box, Container, Grid, Typography } from "@mui/material";

//React
import {
  FaBookOpen,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../../Assets/Images/footer-logo.png";

const SeccionFooter = () => {
  const style = { fontSize: "0.5em", marginRight: "20px" };
  <Box
    sx={{
      background: "rgba(231, 0, 49, 0.08)",
    }}
  >
    <Container
      maxWidth="xl"
      sx={{
        paddingBottom: { xs: "10px", lg: "50px" },
        paddingTop: { xs: "10px", lg: "50px" },
      }}
    >
      <Grid container>
        <Grid item>
          <img src={logo} alt="" />
          <Typography>Educación sin límites</Typography>
          <FaWhatsapp style={style} />
          <FaYoutube style={style} />
          <FaInstagram style={style} />
          <FaFacebook style={style} color="#E70031" size={"2.5em"} />
          <FaTiktok style={style} />
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  </Box>;
};

export default SeccionFooter;

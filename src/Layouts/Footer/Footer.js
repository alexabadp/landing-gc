// import FooterMax from "./FooterMax";
// import FooterMin from "./FooterMin";

// function Footer() {
//   return (
//     <>
//       <FooterMax />
//       <FooterMin />
//     </>
//   );
// }

// export default Footer;

//MaterialUI
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { AiFillMail, AiFillSchedule } from "react-icons/ai";

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
import { Link } from "react-router-dom";
import ListaDesplegable from "./ListaDesplegable";

function Footer() {
  const style = { fontSize: "0.5em", marginRight: "20px" };
  return (
    <Box
      sx={{
        background: "#2D2A26",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="xl"
        margin="auto"
        paddin="0 50px"
        sx={{
          paddingBottom: { xs: "10px", lg: "30px" },
          paddingTop: { xs: "20px", lg: "50px" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            justifyContent: "space-around",
          }}
        >
          <Grid item lg={3} md={6}>
            <Box maxWidth="200px" maxHeight="80px">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FFooter%2Ffooter-logo.png?alt=media&token=66cbfcae-a162-42da-953c-3b3b9e0b7097"
                alt=""
              />
            </Box>
            <Typography component="h6" sx={{ paddingTop: { xs: "25px" } }}>
              Educación sin límites
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: { xs: "10px", md: "30px" },
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: { xs: "24px", md: "30px" } }}>
                <FaWhatsapp />
              </Typography>
              <Typography sx={{ fontSize: { xs: "24px", md: "30px" } }}>
                <FaYoutube />
              </Typography>
              <Typography sx={{ fontSize: { xs: "24px", md: "30px" } }}>
                <FaInstagram />
              </Typography>
              <Typography sx={{ fontSize: { xs: "35px", md: "45px" } }}>
                <FaFacebook color="#E70031" />
              </Typography>
              <Typography sx={{ fontSize: { xs: "24px", md: "24px" } }}>
                <FaTiktok />
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sx={{ display: { xs: "none", lg: "inline-flex" } }}>
            <Box maxWidth="260px">
              <Typography fontSize="24px">Universidades</Typography>
              <Typography fontSize="17px" sx={{ paddingTop: { xs: "25px" } }}>
                Universidad Nacional de Ingeniería (UNI)
              </Typography>
              <Typography fontSize="17px" sx={{ paddingTop: { xs: "25px" } }}>
                Universidad Nacional Mayor de San Marcos (UNMSM)
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xl={3}
            lg={2}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <Typography sx={{ fontSize: { xs: "24px" } }}>
              Biblioteca
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "17px" }, paddingTop: { xs: "25px" } }}
            >
              Videoclases
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "17px" }, padding: { xs: "15px 0" } }}
            >
              Materiales
            </Typography>
            <Typography
              component={Link}
              to="/libroreclamaciones"
              sx={{ fontSize: { xs: "17px" } }}
            >
              Admisión
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "17px" }, padding: { xs: "15px 0" } }}
            >
              Estadísticas
            </Typography>
          </Grid>
          <Grid item xl={3} lg={4} md={6}>
            <Typography sx={{ fontSize: { xs: "24px" } }}>
              Contáctanos
            </Typography>
            <ul className="count list-unstyled">
              <li>
                <AiFillMail style={{ marginRight: "10px" }} />
                informes@grupociencias.edu.pe
              </li>
              <li>
                <FaTelegramPlane style={{ marginRight: "10px" }} />
                Sede San Juan de Lurigancho (01) 6221103
              </li>
              <li>
                <FaTelegramPlane style={{ marginRight: "10px" }} />
                Sede Comas (01) 6330205
              </li>
              <li>
                <AiFillSchedule style={{ marginRight: "10px" }} />
                Horario de atención:
                <ul className="mt-4">
                  <li>lunes a viernes de 8am a 5pm</li>
                  <li>sábados de 9am a 12m</li>
                </ul>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-around",
              }}
            >
              <div className="copy col-lg-6" style={{ marginTop: "0px" }}>
                Copyright © 2022. EXAFRAME S.A ® Marca registrada.
              </div>
              <div
                className="claim col-lg-3 claim-book"
                style={{ marginTop: "0px" }}
              >
                <a href="/libroreclamaciones">Libro de reclamos</a>
                <FaBookOpen
                  color="white"
                  size={"1.5em"}
                  style={{ marginLeft: "20px" }}
                />
              </div>
              <div
                className="claim col-lg-3 data-protect"
                style={{ marginTop: "0px" }}
              >
                <a href="/politicaproteccion">Proteccion de Datos Personales</a>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ display: { xs: "block", sm: "none" } }}>
        <ListaDesplegable
          elemento={"Acerca del ciclo"}
          opciones={["opcion1", "opcion2"]}
        />
        <ListaDesplegable
          elemento={"Universidades"}
          opciones={["opcion1", "opcion2"]}
        />
        <ListaDesplegable
          elemento={"Biblioteca"}
          opciones={["opcion1", "opcion2"]}
        />
        <ListaDesplegable
          elemento={"Cuenta con nosotros"}
          opciones={["opcion1", "opcion2"]}
        />

        <Box maxWidth="200px" maxHeight="80px" margin="30px auto 10px auto">
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FFooter%2Ffooter-logo.png?alt=media&token=66cbfcae-a162-42da-953c-3b3b9e0b7097"
            alt=""
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: "30px" } }}>
            <FaWhatsapp />
          </Typography>
          <Typography sx={{ fontSize: { xs: "30px" } }}>
            <FaYoutube />
          </Typography>
          <Typography sx={{ fontSize: { xs: "30px" } }}>
            <FaInstagram />
          </Typography>
          <Typography sx={{ fontSize: { xs: "50px" } }}>
            <FaFacebook color="#E70031" />
          </Typography>
          <Typography sx={{ fontSize: { xs: "30px" } }}>
            <FaTiktok />
          </Typography>
        </Box>

        <Box padding="30px" textAlign="center">
          <FaBookOpen
            color="white"
            size={"1.5em"}
            style={{ marginRight: "20px" }}
          />
          <Typography
            component={Link}
            to="/libroreclamaciones"
            sx={{
              color: "#fff",
              fontSize: "20px",
              "&:hover": { color: "red" },
            }}
          >
            Libro de reclamos
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography
            component={Link}
            to="/politicaproteccion"
            sx={{
              color: "#fff",
              fontSize: "20px",
              "&:hover": { color: "red" },
            }}
          >
            Proteccion de Datos Personales
          </Typography>
        </Box>
        <Typography textAlign="center" fontSize="20px" padding="30px">
          Copyright © 2022. EXAFRAME S.A ® Marca registrada.
        </Typography>
      </Grid>
    </Box>
  );
}

export default Footer;

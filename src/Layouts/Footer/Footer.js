//MaterialUI
import {
  Box,
  Button,
  Container,
  Grid,
  Popover,
  Typography,
} from "@mui/material";

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
import { AiFillMail, AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
import ListaDesplegable from "./ListaDesplegable";
import { useState } from "react";

import uni from "./img/UNI.png";
import unmsm from "./img/UNMSM.png";

function Footer() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
                src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FFooter%2Fwebp%2Ffooter-logo.webp?alt=media&token=1f9de167-138a-4b84-92ea-3ff2260d538a"
                alt=""
              />
            </Box>
            <Typography
              component="h6"
              sx={{ padding: { xs: "25px 0 10px 0" } }}
            >
              Educación sin límites
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: { xs: "10px", md: "20px" },
                alignItems: "center",
              }}
            >
              <a
                target="_blanck"
                href="https://api.whatsapp.com/send?phone=+51 933 883 733&amp;text=Hola&nbsp;vengo&nbsp;de&nbsp;la&nbsp;web&nbsp;y&nbsp;tengo&nbsp;una&nbsp;consulta&nbsp;"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "30px" },

                    background: "rgb(37, 211, 102)",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaWhatsapp color="rgba(255, 255, 255, 1)" />
                </Typography>
              </a>
              <Typography
                type="button"
                onClick={handleClick}
                // href="https://www.youtube.com/@GrupoCiencias"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "30px" },
                    background: "#E70031",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaYoutube color="rgba(255, 255, 255, 1)" />
                </Typography>
              </Typography>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                margin="10px"
              >
                <Typography sx={{ p: 1, display: "flex", gap: "10px" }}>
                  <a
                    href="https://www.youtube.com/@GrupoCienciasUNI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "rgba(5, 42, 38,1)",
                        color: "rgba(255,255,255,1)",
                        "&:hover": {
                          backgroundColor: "red",
                          color: "white",
                        },
                      }}
                    >
                      UNI
                    </Button>
                    {/* <img width="50px" height="50px" src={uni} alt="uni" /> */}
                  </a>
                  <a
                    href="https://www.youtube.com/@GrupoCiencias"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      sx={{
                        backgroundColor: "rgba(5, 42, 38,1)",
                        color: "rgba(255,255,255,0.85)",
                        "&:hover": {
                          backgroundColor: "red",
                          color: "white",
                        },
                      }}
                    >
                      UNMSM
                    </Button>
                    {/* <img width="50px" height="50px" src={unmsm} alt="unmsm" /> */}
                  </a>
                </Typography>
              </Popover>
              <a
                href="https://www.instagram.com/cienciasgrupo/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "30px" },
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaInstagram color="rgba(255, 255, 255, 1)" />
                </Typography>
              </a>
              <Typography
                sx={{
                  fontSize: { xs: "44px", sm: "60px" },
                  position: "relative",
                  maxWidth: "44px",
                  width: "100%",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#fff",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://www.facebook.com/GCiencias"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "48px", sm: "60px" },
                      position: "absoluta",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaFacebook color="rgba(59, 89, 152, 1)" />
                  </Typography>
                </a>
              </Typography>
              <a
                href="https://www.tiktok.com/@grupociencias"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "30px" },
                    background: "#000",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaTiktok color="rgba(255, 255, 255, 1)" />
                </Typography>
              </a>
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
            <Typography sx={{ fontSize: { xs: "17px" } }}>Admisión</Typography>
            {/* <Typography
              sx={{ fontSize: { xs: "17px" }, padding: { xs: "15px 0" } }}
            >
              Estadísticas
            </Typography> */}
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
              <li style={{ marginTop: "20px" }}>
                <AiFillSchedule style={{ marginRight: "10px" }} />
                Horario de atención:
                <ul>
                  <li>Lunes a viernes de 8am a 5pm</li>
                  <li>Sábados de 9am a 12m</li>
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

      {/* DISEÑO MOBIL */}
      <Grid container sx={{ display: { xs: "block", sm: "none" } }}>
        {/* <ListaDesplegable
          elemento={"Acerca del ciclo"}
          opciones={["opcion1", "opcion2"]}
        /> */}
        <ListaDesplegable
          elemento={"Universidades"}
          opciones={[
            "Universidad Nacional de Ingeniería (UNI)",
            "Universidad Nacional Mayor de San Marcos (UNMSM)",
          ]}
        />
        <ListaDesplegable
          elemento={"Biblioteca"}
          opciones={["Videoclases", "Materiales", "Admisión"]}
        />
        <ListaDesplegable
          elemento={"Contacta con nosotros"}
          opciones={[
            "informes@grupociencias.edu.pe",
            "Sede San Juan de Lurigancho (01) 6221103",
            "Sede Comas (01) 6330205",
          ]}
        />
        <ListaDesplegable
          elemento={"Horarios de atención"}
          opciones={["Lunes a viernes de 8am a 5pm", "Sábados de 9am a 12pm"]}
        />

        <Box maxWidth="200px" maxHeight="80px" margin="30px auto 10px auto">
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FFooter%2Fwebp%2Ffooter-logo.webp?alt=media&token=1f9de167-138a-4b84-92ea-3ff2260d538a"
            alt=""
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <a
            target="_blanck"
            href="https://api.whatsapp.com/send?phone=+51 933 883 733&amp;text=Hola&nbsp;vengo&nbsp;de&nbsp;la&nbsp;web&nbsp;y&nbsp;tengo&nbsp;una&nbsp;consulta&nbsp;"
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "30px" },

                background: "rgb(37, 211, 102)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaWhatsapp color="rgba(255, 255, 255, 1)" />
            </Typography>
          </a>
          <Typography
            type="button"
            onClick={handleClick}
            // href="https://www.youtube.com/@GrupoCiencias"
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                background: "#E70031",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaYoutube color="rgba(255, 255, 255, 1)" />
            </Typography>
          </Typography>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            margin="10px"
          >
            <Typography sx={{ p: 1, display: "flex", gap: "10px" }}>
              <a
                href="https://www.youtube.com/@GrupoCienciasUNI"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(5, 42, 38,1)",
                    color: "rgba(255,255,255,1)",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "white",
                    },
                  }}
                >
                  UNI
                </Button>
                {/* <img width="50px" height="50px" src={uni} alt="uni" /> */}
              </a>
              <a
                href="https://www.youtube.com/@GrupoCiencias"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  sx={{
                    backgroundColor: "rgba(5, 42, 38,1)",
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "white",
                    },
                  }}
                >
                  UNMSM
                </Button>
                {/* <img width="50px" height="50px" src={unmsm} alt="unmsm" /> */}
              </a>
            </Typography>
          </Popover>
          <a
            href="https://www.instagram.com/cienciasgrupo/"
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaInstagram color="rgba(255, 255, 255, 1)" />
            </Typography>
          </a>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "60px" },
              position: "relative",

              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#fff",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.facebook.com/GCiencias"
              target="_blank"
              rel="noreferrer"
            >
              <Typography
                sx={{
                  fontSize: { xs: "44px", sm: "60px" },
                  position: "absoluta",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaFacebook color="rgba(59, 89, 152, 1)" />
              </Typography>
            </a>
          </Typography>
          <a
            href="https://www.tiktok.com/@grupociencias"
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                background: "#000",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaTiktok color="rgba(255, 255, 255, 1)" />
            </Typography>
          </a>
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
              color: "rgba(0, 128, 255, 1)",
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
              color: "rgba(0, 128, 255, 1)",
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

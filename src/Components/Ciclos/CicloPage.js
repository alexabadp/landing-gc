import { useState } from "react";
import { Image } from "react-bootstrap";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsDownload, BsFillStopwatchFill } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";
import { useParams } from "react-router-dom";
import bbva from "../../Assets/Images/bbva.png";
import bcp from "../../Assets/Images/bcp.png";
import scotia from "../../Assets/Images/scotia.png";
import yape from "../../Assets/Images/yape.png";
import ContactForm from "../ContactUs/ContactForm";
import { CicloInfo } from "./CicloInfo";
import "./CicloPage.css";
import Horario from "./Horario";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

function CicloPage() {
  const { idCiclo } = useParams();
  const [show, setShow] = useState(false);

  function showHorario() {
    setShow(true);
  }

  const ciclo = CicloInfo.find((obj) => {
    return obj.id == idCiclo;
  });

  return (
    <>
      <Box sx={{ margin: { xs: "30px 0", md: "50px 0" } }}>
        <Container maxWidth="xl" margin="auto">
          <Box padding="20px">
            <Grid container justifyContent="center">
              <Grid
                item
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    minHeight: {
                      xs: "300px",
                      md: "400px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "22px" },
                      paddingTop: "20px",
                      fontWeight: "700",
                      color: "#e70031",
                    }}
                  >
                    {ciclo.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "32px", lg: "48px" },
                      fontWeight: "700",
                    }}
                  >
                    {ciclo.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "16px", md: "22px" } }}>
                    {ciclo.titleresume}
                  </Typography>
                  <Button
                    // variant="danger"
                    // className="enroll"
                    sx={{
                      borderRadius: "50px",
                      color: "#fff",
                      width: "200px",
                      background: "red",
                      padding: "15px 0",
                      margin: { xs: "20px auto ", md: "20px 0" },
                      "&:hover": { background: " #E70031" },
                    }}
                  >
                    Matricúlate ahora
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{ display: { xs: "none", md: "inline-block" } }}
              >
                <img width="100%" height="100%" src={ciclo.Image} alt="" />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: { xs: "0px", md: "50px" } }}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    padding: {
                      xs: "0 10px 20px 10px",
                      md: "0 50px 20px 50px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      paddingBottom: "10px",
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "24px" },
                      fontWeight: "700",
                      lineHeight: "31px",
                    }}
                  >
                    Resumen
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "justify", md: "left" },
                      lineHeight: "36px",
                      fontSize: { xs: "20px" },
                    }}
                  >
                    {ciclo.resumen}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "46px" },
                      fontSize: { xs: "24px", md: "36px" },
                      fontWeight: "800",
                      padding: { xs: "40px 0 20px 0", md: "20px 0" },
                    }}
                  >
                    Acerca del ciclo
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "700",
                    }}
                  >
                    Fecha de inicio:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "400",
                    }}
                  >
                    {ciclo.inicio}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "700",
                    }}
                  >
                    Fecha fin:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "400",
                    }}
                  >
                    {ciclo.fin}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "700",
                    }}
                  >
                    Horario:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "400",
                    }}
                  >
                    {ciclo.horario}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    height: "100%",
                    minHeight: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <BsFillStopwatchFill
                          style={{
                            marginRight: "10px",
                            color: "#E70031",
                          }}
                        />
                        Duración :
                      </Typography>
                      <Typography fontSize="20px">{ciclo.duracion}</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <AiFillThunderbolt
                          style={{
                            marginRight: "10px",
                            color: "#E70031",
                          }}
                        />
                        Modalidad :
                      </Typography>
                      <Typography textAlign="center" fontSize="20px">
                        Presencial / virtual
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <BsDownload
                          style={{
                            marginRight: "10px",
                            color: "#E70031",
                          }}
                        />
                        <a href={ciclo.temario} target="_blank">
                          Descargar temario
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                    onClick={() => showHorario()}
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <FaChrome
                          style={{
                            marginRight: "10px",
                            color: "#E70031",
                          }}
                        />
                        Mostrar horario
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <div className="row third-block">
            <div className="col-lg-2 payment-method">Medios de Pago</div>
            <div className="col-lg-4 payment-type">
              Paga con tarjeta en un agente o tu aplicativo
            </div>
            <div className="col-lg-2">
              <Image
                src={bcp}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-lg-1">
              <Image
                src={bbva}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-lg-1">
              <Image
                src={yape}
                className="navbar-logo"
                style={{
                  marginLeft: "30px",
                }}
              />
            </div>
            <div className="col-lg-2">
              <Image
                src={scotia}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>
          <Box sx={{ padding: { xs: "0px", md: "50px" } }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: {
                      xs: "0 10px 20px 10px",
                      md: "0 50px 20px 50px",
                    },
                  }}
                >
                  <div className="title-enjoy">
                    Disfruta del formato virtual
                  </div>
                  <div className="subtitle-enjoy">
                    Prepárate con nosotros desde la comodidad de tu hogar
                  </div>
                  <div className="list-enjoy">
                    <ul>
                      <li>Clases en vivo en HD con todos nuestros docentes.</li>
                      <li>Los profesores usan pizarras y tizas.</li>
                      <li>Grabación de las clases para repasar contenidos.</li>
                      <li>Simulacros tipo examen de admisión</li>
                      <li>Materiales prácticos en PDF para descargar.</li>
                    </ul>
                  </div>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    width="100%"
                    height="100%"
                    src={ciclo.imageBottom}
                    alt="imagen virtual"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <ContactForm />
        </Container>
      </Box>
      <div className="container landing-container">
        <div className="row">
          {/* <div className="row first-block">
            <div className="col-lg-4">
              <div className="ciclo">{ciclo.subtitle}</div>
              <div className="verano">{ciclo.title}</div>
              <p>{ciclo.titleresume}</p>
              <div className="enroll-div">
                <Button
                  variant="danger"
                  className="enroll"
                  style={{ borderRadius: "50px" }}
                >
                  Matricúlate ahora
                </Button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row image-ciclo">
                <div className="col-lg-6">
                  <img src={ciclo.Image} alt="" />
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="row second-block">
            <div className="col-lg-7">
              <div className="row resume-info">
                <div className="resume">Resumen</div>
                <p>{ciclo.resumen}</p>
              </div>
              <div className="about">Acerca del ciclo</div>
              <div className="ciclo-detail">
                <div className="row">
                  <div className="col-lg-5 col-xl-12 subtitle">
                    Fecha de inicio:
                  </div>
                  <div className="col-lg-7 col-xl-12 values">
                    {ciclo.inicio}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-xl-12 subtitle">Fecha fin:</div>
                  <div className="col-lg-7 col-xl-12 values">{ciclo.fin}</div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-xl-12 subtitle">Horario: </div>
                  <div className="col-lg-7 col-xl-12 values">
                    {ciclo.horario}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 info">
              <div className="duration-detail">
                <div className="row duration">
                  <div className="col-lg-8 col-7 subtitle">
                    <BsFillStopwatchFill
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    Duración :
                  </div>
                  <div className="col-lg-4 col-5 value">{ciclo.duracion}</div>
                </div>
                <div className="row duration">
                  <div className="col-lg-8 col-7 subtitle">
                    <AiFillThunderbolt
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    Modalidad :
                  </div>
                  <div className="col-lg-4 col-5 value">
                    Presencial / virtual
                  </div>
                </div>
                <div className="row duration">
                  <div className="col-lg-12 subtitle">
                    <BsDownload
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    <a href={ciclo.temario} target="_blank">
                      Descargar temario
                    </a>
                  </div>
                </div>
                <div
                  className="row duration"
                  onClick={() => showHorario()}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-lg-12 subtitle">
                    <FaChrome
                      style={{
                        marginRight: "10px",
                        color: "#E70031",
                      }}
                    />
                    Mostrar horario
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="row third-block">
            <div className="col-lg-2 payment-method">Medios de Pago</div>
            <div className="col-lg-4 payment-type">
              Paga con tarjeta en un agente o tu aplicativo
            </div>
            <div className="col-lg-2">
              <Image
                src={bcp}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-lg-1">
              <Image
                src={bbva}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-lg-1">
              <Image
                src={yape}
                className="navbar-logo"
                style={{
                  marginLeft: "30px",
                }}
              />
            </div>
            <div className="col-lg-2">
              <Image
                src={scotia}
                className="navbar-logo"
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
          </div> */}

          {/* <div className="row fourth-block">
            <div className="col-lg-5">
              <div className="title-enjoy">Disfruta del formato virtual</div>
              <div className="subtitle-enjoy">
                Prepárate con nosotros desde la comodidad de tu hogar
              </div>
              <div className="list-enjoy">
                <ul>
                  <li>Clases en vivo en HD con todos nuestros docentes.</li>
                  <li>Los profesores usan pizarras y tizas.</li>
                  <li>Grabación de las clases para repasar contenidos.</li>
                  <li>Simulacros tipo examen de admisión</li>
                  <li>Materiales prácticos en PDF para descargar.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 notebook-div">
              <Image
                src={ciclo.imageBottom}
                className="navbar-logo"
                style={{ marginTop: "-20px", marginLeft: "40px" }}
              />
            </div>
          </div> */}

          {/* <div className="row fourth-block">
            <div className="title-signnow">Inscríbete ahora</div>
            <br />
            <br />
            <ContactForm />
          </div> */}
        </div>
      </div>
      <Horario show={show} close={() => setShow(false)} ciclo={ciclo} />
    </>
  );
}

export default CicloPage;

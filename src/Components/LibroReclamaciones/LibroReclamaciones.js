import { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { BsChevronDown, BsQuestionOctagonFill } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import "./LibroReclamaciones.css";
import {
  Box,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

function LibroReclamaciones() {
  const bottomRef = useRef();
  const onClick = () => {
    bottomRef.current.scrollIntoView();
  };
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          maxWidth: "1300px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "50px 0 50px 0",
            background: "rgba(231, 0, 49, 0.85)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "30px", md: "48px" },
              fontWeight: "700",
              textAlign: "center",
              padding: "20px 10px",
            }}
          >
            Libro de Reclamaciones
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "23px" },
              fontWeight: "500",
              textAlign: "center",
              padding: "0 10px",
              color: "#fff",
            }}
          >
            Completa el formulario para hacernos llegar tus quejas y/o
            sugerencias
          </Typography>
          <BsChevronDown
            style={{
              color: "#FFFFFF",
              fontSize: "1.5em",
              marginTop: "40px",
              strokeWidth: "2",
            }}
            onClick={onClick}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box sx={{ flex: "1" }}>
            <Typography sx={{ fontSize: { xs: "14px", md: "24px" } }}>
              Grupo de estudio Ciencias E.I.R.L.
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "20px" } }}>
              RUC 20607260169
            </Typography>
          </Box>
          <Box sx={{ flex: "1" }}>
            <Typography
              sx={{ fontSize: { xs: "14px", md: "24px" }, textAlign: "right" }}
            >
              Hoja de reclamación: 000000326-2022
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", md: "20px" }, textAlign: "right" }}
            >
              29-10-2022 15:38:21
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: "0px 30px", md: "30px 100px" },
            background: "#f9faff",
          }}
        >
          <form>
            <Box ref={bottomRef}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "20px 0",
                  fontWeight: "700",
                  fontSize: { xs: "16px", sm: "24px" },
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    background: "rgba(231, 0, 49, 0.85)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "40px",
                    fontSize: "18px",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </Typography>
                <Box>Datos de la persona que presenta el reclamo</Box>
              </Typography>
            </Box>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  select
                  label="DNI"
                  fullWidth
                  margin="normal"
                  name="universidad"
                  defaultValue="opcion1"
                  value="opcion1"
                  // defaultValue={values.universidad}
                  // value={values.universidad}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={
                  //   (showErrors || touched.universidad) && Boolean(errors.universidad)
                  // }
                  // helperText={
                  //   (showErrors || touched.universidad) && errors.universidad
                  // }
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona un documento
                  </MenuItem>
                  <MenuItem value="opcion2">Dni</MenuItem>
                  <MenuItem value="opcion3">Pasaporte</MenuItem>
                  <MenuItem value="opcion4">Carné de Extranjeria</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Ingresa tu identificador"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tus nombres completos"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tus apellidos completos"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tu correo electrónico"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tu número de telefono"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={7} md={7}>
                <TextField
                  select
                  label="Departamento, Provincia, Distrito"
                  fullWidth
                  margin="normal"
                  name="universidad"
                  defaultValue="opcion1"
                  value="opcion1"
                  // defaultValue={values.universidad}
                  // value={values.universidad}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={
                  //   (showErrors || touched.universidad) && Boolean(errors.universidad)
                  // }
                  // helperText={
                  //   (showErrors || touched.universidad) && errors.universidad
                  // }
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona una opcion
                  </MenuItem>
                  <MenuItem value="opcion2">Lima</MenuItem>
                  <MenuItem value="opcion3">Callao</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  label="Ingresa tu direccion"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
            </Grid>
            <hr />
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "20px 0",
                  fontWeight: "700",
                  fontSize: { xs: "16px", sm: "24px" },
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    background: "rgba(231, 0, 49, 0.85)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "40px",
                    fontSize: "18px",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  2
                </Typography>
                <Box>Datos del reclamo</Box>
              </Typography>
            </Box>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Selecciona la Sede"
                  fullWidth
                  margin="normal"
                  name="universidad"
                  defaultValue="opcion1"
                  value="opcion1"
                  // defaultValue={values.universidad}
                  // value={values.universidad}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={
                  //   (showErrors || touched.universidad) && Boolean(errors.universidad)
                  // }
                  // helperText={
                  //   (showErrors || touched.universidad) && errors.universidad
                  // }
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona la Sede
                  </MenuItem>
                  <MenuItem value="opcion2">Sede Comas</MenuItem>
                  <MenuItem value="opcion3">Sede SJL</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Selecciona el ciclo que deseas reportar"
                  fullWidth
                  margin="normal"
                  name="universidad"
                  defaultValue="opcion1"
                  value="opcion1"
                  // defaultValue={values.universidad}
                  // value={values.universidad}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={
                  //   (showErrors || touched.universidad) && Boolean(errors.universidad)
                  // }
                  // helperText={
                  //   (showErrors || touched.universidad) && errors.universidad
                  // }
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona el ciclo que deseas reportar
                  </MenuItem>
                  <MenuItem value="opcion2">Ciclo Verano San Marcos</MenuItem>
                  <MenuItem value="opcion3">Ciclo Verano UNI</MenuItem>
                  <MenuItem value="opcion4">Ciclo Repaso San Marcos</MenuItem>
                  <MenuItem value="opcion4">Ciclo Repaso UNI</MenuItem>
                  <MenuItem value="opcion4">
                    Ciclo Semestral San Marcos
                  </MenuItem>
                  <MenuItem value="opcion4">
                    Ciclo Semestral Báscio UNI
                  </MenuItem>
                  <MenuItem value="opcion4">
                    Ciclo Semestral Intensivo UNI
                  </MenuItem>
                  <MenuItem value="opcion4">Ciclo Anual San Marcos</MenuItem>
                  <MenuItem value="opcion4">
                    Ciclo Semianual San Marcos
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  multiline
                  rows={4}
                  label="Cuentanos que ha sucedido"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  multiline
                  rows={4}
                  label="Cual es tu solicitud para Solucionar el problema"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  // value={values.nombre}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                  // helperText={(showErrors || touched.nombre) && errors.nombre}
                ></TextField>
              </Grid>
            </Grid>
            <FormControlLabel
              sx={{ padding: "10px 0" }}
              control={<Checkbox defaultChecked />}
              label="Al enviar este formulario acepto el flujo transfronterizo de mis datos personales, según la Ley de Protección de Datos Personales."
            />

            <FormControlLabel
              control={<Checkbox />}
              label="He leído y estoy de acuerdo con toda la información descrita en estre reclamo *"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Button
                sx={{
                  margin: "20px 0",
                  fontSize: "20px",
                  backgroundColor: "rgba(255,0,0,0.85)",
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
                variant="contained"
                type="submit"
                // disabled={isSubmitting}
              >
                {/* {isSubmitting ? "Enviando" : "Enviar"} */}
                Generar reclamo
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px 0",
                }}
              >
                <BsQuestionOctagonFill
                  style={{
                    fontSize: "2.5em",
                    // marginLeft: "10px",
                    // marginTop: "20px",
                    color: "red",
                  }}
                />

                <Typography sx={{ maxWidth: " 500px" }}>
                  Tu reclamo o queja será asignado a un asesor y te brindaremos
                  una respuesta en el plazo que estipula la (Ley de Protección
                  de Consumidor), el cual es improrrogable. Te pedimos estar
                  atento a tu correo.
                </Typography>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <div className="container container-claim">
        {/* <div className="col-lg-12 header-content">
          <div className="header-claim">
            <h1 className="header-title">Libro de Reclamaciones</h1>
            <h4>
              Completa el formulario para hacernos llegar tus quejas y/o
              sugerencias
            </h4>
            <div className="cursor">
              <BsChevronDown
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.5em",
                  marginTop: "40px",
                  strokeWidth: "2",
                }}
                onClick={onClick}
              />
            </div>
          </div>
        </div> */}

        {/* <div className="col-lg-12 header-one">
          <div className="row cia-info">
            <div className="block-one col-lg-6 col-12">
              <div className="block-title">
                Grupo de Estudio Ciencias E.I.R.L.
              </div>
              <div className="block-ruc">RUC 20607260169</div>
            </div>
            <div className="block-two col-lg-6 col-12">
              <div className="block-claim">
                Hoja de reclamación: 000000326-2022
              </div>
              <div className="block-date">29-10-2022 15:38:21</div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-lg-12 form-claim">
          <div className="content-claim">
            <div className="row">
              <Form>
                <h2 className="claim-subtitle">
                  <span className="circle">1</span>
                  Datos de la persona que presenta el reclamo
                </h2>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>Documento de Identidad</Form.Label>
                    <Col sm="2">
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
                        <option value="1">DNI</option>
                        <option value="2">Pasaporte</option>
                        <option value="3">Carne Extranjeria</option>
                      </Form.Select>
                    </Col>
                    <Col sm="3">
                      <Form.Control type="documentId" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Nombres completos</Form.Label>
                      <Form.Control type="name" size="lg" />
                    </Col>
                    <Col sm="6">
                      <Form.Label>Apellidos completos</Form.Label>
                      <Form.Control type="lastName" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control type="name" size="lg" />
                    </Col>
                    <Col sm="6">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="lastName" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Departamento, Provicia, Distrito</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
                        <option value="1">Lima</option>
                        <option value="2">Callao</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="12">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="lastName" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <h2 className="claim-subtitle">
                  <span className="circle">2</span>
                  Datos del reclamo
                </h2>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Selecciona la sede</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
                        <option value="1">Sede Comas</option>
                        <option value="2">Sede SJL</option>
                      </Form.Select>
                    </Col>
                    <Col sm="6">
                      <Form.Label>
                        Selecciona el ciclo que desea reportar
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
                        <option value="1">Ciclo Verano San Marcos</option>
                        <option value="2">Ciclo Verano UNI</option>
                        <option value="1">Ciclo Repaso San Marcos</option>
                        <option value="2">Ciclo Repaso UNI</option>
                        <option value="1">Ciclo Semestral San Marcos</option>
                        <option value="2">Ciclo Semestral UNI</option>
                        <option value="1">Ciclo Anual San Marcos</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>Cuéntanos qué ha sucedido</Form.Label>
                    <Form.Control as="textarea" rows={3} size="lg" />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>
                      Cuál es su solicitud para solucionar el problema
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} size="lg" />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="12">
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input
                          type={"checkbox"}
                          isValid
                          size="lg"
                          className="mr-4"
                        />
                        <Form.Check.Label
                          className="check-text"
                          style={{
                            color: "rgba(45, 42, 38, 0.75)",
                            marginLeft: "20px",
                          }}
                        >
                          Al enviar este formulario acepto el flujo
                          transfronterizo de mis datos personales, según la Ley
                          de Protección de Datos Personales.
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input
                          type={"checkbox"}
                          isValid
                          style={{ color: "black" }}
                        />
                        <Form.Check.Label
                          className="check-text"
                          style={{
                            color: "rgba(45, 42, 38, 0.75)",
                            marginLeft: "20px",
                          }}
                        >
                          He leído y estoy de acuerdo con toda la información
                          descrita en estre reclamo
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div> */}

        {/* <div className="col-lg-12 claim-process" ref={bottomRef}>
          <div className="row process-info">
            <div className="col-lg-1 ">
              <BsQuestionOctagonFill
                style={{
                  fontSize: "2.5em",
                  marginLeft: "10px",
                  marginTop: "20px",
                  color: "red",
                }}
              />
            </div>
            <div className="col-lg-5">
              <p>
                Tu reclamo o queja será asignado a un asesor y te brindaremos
                una respuesta en el plazo que estipula la (Ley de Protección de
                Consumidor), el cual es improrrogable. Te pedimos estar atento a
                tu correo.
              </p>
            </div>
            <div className="col-lg-6 options">
              <Button variant="light" className="cancel">
                Cancelar
              </Button>
              <Button variant="danger" className="save">
                Generar reclamo
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default withRouter(LibroReclamaciones);

// import { Box, Container } from "@mui/material";

// const LibroReclamaciones = () => {
//   <>
//     <Container>
//       <Box sx={{ background: "red" }}></Box>
//     </Container>
//   </>;
// };

// export default LibroReclamaciones;

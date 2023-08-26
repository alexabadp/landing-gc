import { useEffect, useRef, useState } from "react";
import { BsChevronDown, BsQuestionOctagonFill } from "react-icons/bs";
import {
  Box,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Snackbar,
  Alert,
  FormGroup,
  FormHelperText,
  Link,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import moment from "moment/moment";
import Header from "../../Layouts/Header/Header";

import emailjs from "emailjs-com";

function LibroReclamaciones() {
  const [numeroLibro, setNumeroLibro] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const currentYear = new Date().getFullYear();
  const currentDate = moment().format("YYYY-MM-DD");

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(
        "https://grupociencias.edu.pe/exaframe-ms/api/Landing/UltimoRegistro"
      )
      .then((response) => {
        setNumeroLibro(response.data.Data);
      })
      .catch((error) => {
        console.error(error);
      });

    const interval = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, [numeroLibro]);

  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [snackbar, setSnackbar] = useState(false);

  const {
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    validateForm,
    isValid,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      tipoDocumento: "",
      numerodocumento: "",
      nombres: "",
      apellidos: "",
      email: "",
      telefono: "",
      provincia: "",
      direccion: "",
      sede: "",
      ciclo: "",
      comentario: "",
      solicitud: "",
      aceptoTerminos: false,
      confirmacionReclamo: false,
    },
    validationSchema: Yup.object().shape({
      tipoDocumento: Yup.string().required("Selecciona el tipo de documento"),
      numerodocumento: Yup.string().required("Ingresa tu número de documento"),
      nombres: Yup.string().required("Ingresa tus nombres"),
      apellidos: Yup.string().required("Ingresa tus apellidos"),
      email: Yup.string()
        .email("Debes ingresar un correo electrónico válido")
        .required("Ingresa tu correo electrónico"),
      telefono: Yup.string().required("Ingresa tu teléfono"),
      provincia: Yup.string().required("Seleccion una opción"),
      direccion: Yup.string().required("Ingresa tu dirección"),
      sede: Yup.string().required("Selecciona la sede"),
      ciclo: Yup.string().required("Selecciona el ciclo"),
      comentario: Yup.string().required("Ingresa un comentario de lo sucedido"),
      solicitud: Yup.string().required("Ingresa tu solicitud"),
      aceptoTerminos: Yup.boolean()
        .oneOf([true], "Debes aceptar los términos y condiciones")
        .required("Debes aceptar los términos y condiciones"),
      confirmacionReclamo: Yup.boolean()
        .oneOf([true], "Debes confirmar tu reclamo")
        .required("Debes confirmar tu reclamo"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      axios
        .post(
          "https://grupociencias.edu.pe/exaframe-ms/api/Landing/ComplaintUser",
          data
        )
        .then((response) => {
          handleSendEmail(data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setTimeout(() => {
        setIsSubmitting(false);
        resetForm();
        setSnackbar(true);
      }, 2000);
    },
  });

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);

    validateForm().then(() => {
      if (isValid) {
        handleSubmit();
      }
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  const handleSendEmail = (data) => {
    let templateParams = {
      idreclamo: numeroLibro,
      tipoDocumento: data.tipoDocumento,
      numerodocumento: data.numerodocumento,
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      provincia: data.provincia,
      direccion: data.direccion,
      sede: data.sede,
      ciclo: data.ciclo,
      comentario: data.comentario,
      solicitud: data.solicitud,
    };

    emailjs
      .send(
        "service_42isdsd",
        "template_09zvz3j",
        templateParams,
        "PiilxYrt1ccsrUNrm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (showErrors) {
      validateForm();
    }
  }, [showErrors, validateForm]);

  // Desplazamiento
  const bottomRef = useRef();
  const onClick = () => {
    bottomRef.current.scrollIntoView();
  };
  /////////////////////////////////

  return (
    <>
      <Header />
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          maxWidth: "1300px",
          margin: "auto",
          paddingTop: "50px",
          textAlign: "left",
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
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "24px" },
                padding: "0 0 5px 5px",
              }}
            >
              Grupo de estudio Ciencias E.I.R.L.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "20px" },
                padding: "5px 0 5px 5px",
              }}
            >
              RUC 20607260169
            </Typography>
          </Box>
          <Box sx={{ flex: "1" }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "24px" },
                textAlign: "right",
                padding: "0 5px 5px 0",
              }}
            >
              Hoja de reclamación: 000000{numeroLibro + 1}-{currentYear}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "20px" },
                textAlign: "right",
                padding: "5px 5px 5px 0px",
              }}
            >
              {currentDate} {currentTime}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: "0px 30px", md: "30px 100px" },
            background: "#f9faff",
          }}
        >
          <form onSubmit={handleInputSubmit}>
            <Box ref={bottomRef}>
              <Box
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
              </Box>
            </Box>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  select
                  label="Tipo de Documento"
                  fullWidth
                  margin="normal"
                  name="tipoDocumento"
                  defaultValue={values.tipoDocumento}
                  value={values.tipoDocumento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.tipoDocumento) &&
                    Boolean(errors.tipoDocumento)
                  }
                  helperText={
                    (showErrors || touched.tipoDocumento) &&
                    errors.tipoDocumento
                  }
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona un numerodocumento
                  </MenuItem>
                  <MenuItem value="dni">Dni</MenuItem>
                  <MenuItem value="pasaporte">Pasaporte</MenuItem>
                  <MenuItem value="carné de extranjería">
                    Carné de Extranjería
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  type="number"
                  label="Ingresa tu número de documento"
                  fullWidth
                  margin="normal"
                  name="numerodocumento"
                  value={values.numerodocumento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.numerodocumento) &&
                    Boolean(errors.numerodocumento)
                  }
                  helperText={
                    (showErrors || touched.numerodocumento) &&
                    errors.numerodocumento
                  }
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tus nombres completos"
                  fullWidth
                  margin="normal"
                  name="nombres"
                  value={values.nombres}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.nombres) && Boolean(errors.nombres)
                  }
                  helperText={(showErrors || touched.nombres) && errors.nombres}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tus apellidos completos"
                  fullWidth
                  margin="normal"
                  name="apellidos"
                  value={values.apellidos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.apellidos) &&
                    Boolean(errors.apellidos)
                  }
                  helperText={
                    (showErrors || touched.apellidos) && errors.apellidos
                  }
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ingresa tu correo electrónico"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={(showErrors || touched.email) && Boolean(errors.email)}
                  helperText={(showErrors || touched.email) && errors.email}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  label="Ingresa tu número de telefono"
                  fullWidth
                  margin="normal"
                  name="telefono"
                  value={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.telefono) && Boolean(errors.telefono)
                  }
                  helperText={
                    (showErrors || touched.telefono) && errors.telefono
                  }
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={7} md={7}>
                <TextField
                  select
                  label="Departamento, Provincia, Distrito"
                  fullWidth
                  margin="normal"
                  name="provincia"
                  defaultValue={values.provincia}
                  value={values.provincia}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.provincia) &&
                    Boolean(errors.provincia)
                  }
                  helperText={
                    (showErrors || touched.provincia) && errors.provincia
                  }
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona una opcion
                  </MenuItem>
                  <MenuItem value="Lima">Lima</MenuItem>
                  <MenuItem value="Callao">Callao</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  label="Ingresa tu direccion"
                  fullWidth
                  margin="normal"
                  name="direccion"
                  value={values.direccion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.direccion) &&
                    Boolean(errors.direccion)
                  }
                  helperText={
                    (showErrors || touched.direccion) && errors.direccion
                  }
                ></TextField>
              </Grid>
            </Grid>
            <hr />
            <Box>
              <Box
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
              </Box>
            </Box>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Selecciona la Sede"
                  fullWidth
                  margin="normal"
                  name="sede"
                  defaultValue={values.sede}
                  value={values.sede}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={(showErrors || touched.sede) && Boolean(errors.sede)}
                  helperText={(showErrors || touched.sede) && errors.sede}
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona la Sede
                  </MenuItem>
                  <MenuItem value="Sede Comas">Sede Comas</MenuItem>
                  <MenuItem value=">Sede SJL">Sede SJL</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Selecciona el ciclo que deseas reportar"
                  fullWidth
                  margin="normal"
                  name="ciclo"
                  defaultValue={values.ciclo}
                  value={values.ciclo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={(showErrors || touched.ciclo) && Boolean(errors.ciclo)}
                  helperText={(showErrors || touched.ciclo) && errors.ciclo}
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona el ciclo que deseas reportar
                  </MenuItem>
                  <MenuItem value="Ciclo Verano San Marcos">
                    Ciclo Verano San Marcos
                  </MenuItem>
                  <MenuItem value="Ciclo Verano UNI">Ciclo Verano UNI</MenuItem>
                  <MenuItem value="Ciclo Repaso San Marcos">
                    Ciclo Repaso San Marcos
                  </MenuItem>
                  <MenuItem value="Ciclo Repaso UNI">Ciclo Repaso UNI</MenuItem>
                  <MenuItem value="Ciclo Semestral San Marcos">
                    Ciclo Semestral San Marcos
                  </MenuItem>
                  <MenuItem value="Ciclo Semestral Báscio UNI">
                    Ciclo Semestral Báscio UNI
                  </MenuItem>
                  <MenuItem value="Ciclo Semestral Intensivo UNI">
                    Ciclo Semestral Intensivo UNI
                  </MenuItem>
                  <MenuItem value="Ciclo Anual San Marcos">
                    Ciclo Anual San Marcos
                  </MenuItem>
                  <MenuItem value="Ciclo Semianual San Marcos">
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
                  name="comentario"
                  value={values.comentario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.comentario) &&
                    Boolean(errors.comentario)
                  }
                  helperText={
                    (showErrors || touched.comentario) && errors.comentario
                  }
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  multiline
                  rows={4}
                  label="Cual es tu solicitud para Solucionar el problema"
                  fullWidth
                  margin="normal"
                  name="solicitud"
                  value={values.solicitud}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    (showErrors || touched.solicitud) &&
                    Boolean(errors.solicitud)
                  }
                  helperText={
                    (showErrors || touched.solicitud) && errors.solicitud
                  }
                ></TextField>
              </Grid>
            </Grid>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: "10px 0" }}
                label={
                  <Typography>
                    Al enviar este formulario acepto el flujo transfronterizo de
                    mis datos personales, según la
                    <Link
                      href="/politicaproteccion"
                      sx={{
                        color: "red",
                        paddingLeft: "5px",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Ley de Protección de Datos Personales.
                    </Link>
                  </Typography>
                }
                control={
                  <Checkbox
                    name="aceptoTerminos"
                    checked={values.aceptoTerminos}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                onClick={(event) => event.stopPropagation()}
              />
              {touched.aceptoTerminos && errors.aceptoTerminos && (
                <FormHelperText error>{errors.aceptoTerminos}</FormHelperText>
              )}

              <FormControlLabel
                sx={{ padding: "10px 0" }}
                label="He leído y estoy de acuerdo con toda la información descrita en este reclamo *"
                control={
                  <Checkbox
                    name="confirmacionReclamo"
                    checked={values.confirmacionReclamo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
              />
              {touched.confirmacionReclamo && errors.confirmacionReclamo && (
                <FormHelperText error>
                  {errors.confirmacionReclamo}
                </FormHelperText>
              )}
            </FormGroup>

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
                disabled={
                  isSubmitting ||
                  !values.aceptoTerminos ||
                  !values.confirmacionReclamo
                }
              >
                {isSubmitting ? "Enviando" : "Generar reclamo"}
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

        <Snackbar
          open={snackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
          >
            Reclamo Enviado
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default LibroReclamaciones;

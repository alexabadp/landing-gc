import {
  Alert,
  Button,
  Container,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const opcionesUniversidades = [
  {
    value: "San Marcos",
    label: "San Marcos",
  },
  { value: "UNI", label: "UNI" },
];

const opcionesCiclos = [
  {
    value: "Ciclo Verano San Marcos",
    label: "Ciclo Verano San Marcos",
  },
  { value: "Ciclo Verano UNI", label: "Ciclo Verano UNI" },
  { value: "Ciclo Repaso San Marcos", label: "Ciclo Repaso San Marcos" },
  { value: "Ciclo Repaso UNI", label: "Ciclo Repaso UNI" },
  { value: "Ciclo Semestral San Marcos", label: "Ciclo Semestral San Marcos" },
  { value: "Ciclo Semestral Básico UNI", label: "Ciclo Semestral Básico UNI" },
  {
    value: "Ciclo Semestral Intensivo UNI",
    label: "Ciclo Semestral Intensivo UNI",
  },
  { value: "Ciclo Anual San Marcos", label: "Ciclo Anual San Marcos" },
  { value: "Ciclo Semianual San Marcos", label: "Ciclo Semianual San Marcos" },
];

const SeccionContactanos = () => {
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
  } = useFormik({
    initialValues: {
      universidad: "",
      ciclo: "",
      nombre: "",
      dni: "",
      email: "",
      celular: "",
    },
    validationSchema: Yup.object().shape({
      universidad: Yup.string().required("Selecciona una universidad"),
      ciclo: Yup.string().required("Selecciona un ciclo"),
      nombre: Yup.string().required("Ingresa tu nombre"),
      dni: Yup.string()
        .test("is-nine-digits", "Ingresa un número de 8 dígitos", (value) =>
          /^\d{8}$/.test(value)
        )
        .required("Ingresa tu dni"),
      celular: Yup.string()
        .test("is-nine-digits", "Ingresa un número de 9 dígitos", (value) =>
          /^\d{9}$/.test(value)
        )
        .required("Ingresa tu numero de celular"),
      email: Yup.string()
        .email("Debes ingresar un correo electrónico válido")
        .required("Ingresa tu email"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      console.log(data);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);

      setSnackbar(true);
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

  useEffect(() => {
    if (showErrors) {
      // eslint-disable-next-line no-unused-expressions
      validateForm;
    }
  }, [showErrors, validateForm]);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          paddingBottom: { xs: "10px", lg: "50px" },
          paddingTop: { xs: "10px", lg: "50px" },
        }}
      >
        <Typography
          component="h1"
          fontSize="38px"
          fontWeight="700"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          Inscríbete ahora
        </Typography>
        <form onSubmit={handleInputSubmit}>
          <TextField
            select
            label="A que universidad deseas postular"
            fullWidth
            margin="normal"
            name="universidad"
            defaultValue={values.universidad}
            value={values.universidad}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              (showErrors || touched.universidad) && Boolean(errors.universidad)
            }
            helperText={
              (showErrors || touched.universidad) && errors.universidad
            }
          >
            <MenuItem value="opcion1" disabled>
              Selecciona una universidad
            </MenuItem>
            {opcionesUniversidades.map((e) => (
              <MenuItem key={e.value} value={e.value}>
                {e.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Elije el ciclo que te interesa"
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
              Selecciona un Ciclo
            </MenuItem>
            {opcionesCiclos.map((e) => (
              <MenuItem key={e.value} value={e.value}>
                {e.label}
              </MenuItem>
            ))}
          </TextField>

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                label="Ingresa tu nombre y apellido"
                fullWidth
                margin="normal"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(showErrors || touched.nombre) && Boolean(errors.nombre)}
                helperText={(showErrors || touched.nombre) && errors.nombre}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                label="DNI"
                fullWidth
                margin="normal"
                name="dni"
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(showErrors || touched.dni) && Boolean(errors.dni)}
                helperText={(showErrors || touched.dni) && errors.dni}
              />
            </Grid>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={8}>
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
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                label="Celular"
                fullWidth
                margin="normal"
                name="celular"
                value={values.celular}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  (showErrors || touched.celular) && Boolean(errors.celular)
                }
                helperText={(showErrors || touched.celular) && errors.celular}
              />
            </Grid>
          </Grid>

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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando" : "Enviar"}
          </Button>
        </form>

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
            Mensaje enviado correctamente
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default SeccionContactanos;

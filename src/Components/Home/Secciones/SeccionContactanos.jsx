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

const options = [
  { value: "", label: "Seleccione una opción", disabled: true },
  {
    value: "San Marcos",
    label: "San Marcos",
  },
  { value: "UNI", label: "UNI" },
  { value: "VILLA REAL", label: "VILLA REAL" },
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
      universidad: Yup.string()
        .min(3, "Debe tener mas de 3 caracteres")
        .required("Debes ingresar un Título"),
      ciclo: Yup.string().required("Debes ingresa un link de video"),
      nombre: Yup.string().required("Debes elegir una nombre"),
      dni: Yup.string().required("Debes ingresar una dni"),
      celular: Yup.string().required("Debes ingresar una dni"),
      email: Yup.string()
        .min(3, "Debe tener mas de 3 caracteres")
        .required("Debes ingresar un código"),
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
        <Typography component="h1" fontSize="38px" fontWeight="700">
          Inscríbete ahora
        </Typography>
        <form onSubmit={handleInputSubmit}>
          <TextField
            select
            label="Universidad a la que deseas postular"
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
            {options.map((e) => (
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
            {options.map((e) => (
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

          {/* Aplicar grid a los botones */}
          <Button
            sx={{ background: "red", margin: "20px 0", fontSize: "20px" }}
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

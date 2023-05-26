// import { Button, Col, Form, Row } from "react-bootstrap";
// import { withRouter } from "react-router-dom";
// import "./ContactForm.css";

// function ContactForm() {
//   return (
//     <>
//       <Form>
//         <Form.Group className="mb-3">
//           <Row className="g-2">
//             <Form.Label>Universidad que deseas postular</Form.Label>
//             <Col sm="12">
//               <Form.Select aria-label="Default select example" size="lg">
//                 <option value="1">San Marcos</option>
//                 <option value="2">UNI</option>
//               </Form.Select>
//             </Col>
//           </Row>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Row className="g-2">
//             <Form.Label>Elije el ciclo que te interesa</Form.Label>
//             <Col sm="12">
//               <Form.Select aria-label="Default select example" size="lg">
//                 <option value="1">Ciclo Verano San Marcos</option>
//                 <option value="2">Ciclo Verano UNI</option>
//                 <option value="3">Ciclo Repaso San Marcos</option>
//                 <option value="4">Ciclo Repaso UNI</option>
//                 <option value="5">Ciclo Semestral San Marcos</option>
//                 <option value="6">Ciclo Semestral Básico UNI</option>
//                 <option value="7">Ciclo Semestral Intensivo UNI</option>
//                 <option value="8">Ciclo Anual San Marcos</option>
//                 <option value="9">Ciclo Semianual San Marcos</option>
//               </Form.Select>
//             </Col>
//           </Row>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Row className="g-2">
//             <Col sm="7">
//               <Form.Label>Nombres y apellidos</Form.Label>
//               <Form.Control type="name" size="lg" />
//             </Col>
//             <Col sm="5">
//               <Form.Label>DNI</Form.Label>
//               <Form.Control type="lastName" size="lg" />
//             </Col>
//           </Row>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Row className="g-2">
//             <Col sm="7">
//               <Form.Label>Correo electrónico</Form.Label>
//               <Form.Control type="name" size="lg" />
//             </Col>
//             <Col sm="5">
//               <Form.Label>Celular</Form.Label>
//               <Form.Control type="lastName" size="lg" />
//             </Col>
//           </Row>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Row className="g-2">
//             <Col sm="7">
//               <Button variant="danger" className="contact-button">
//                 Enviar
//               </Button>
//             </Col>
//           </Row>
//         </Form.Group>
//       </Form>
//     </>
//   );
// }

// export default withRouter(ContactForm);

//IMPORTACIONES REACT
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

//IMPORTACIONES MATERIALUI
import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

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
const ContactForm = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    if (showErrors) {
      // eslint-disable-next-line no-unused-expressions
      validateForm;
    }
  }, [showErrors, validateForm]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingBottom: { xs: "10px", md: "50px" },
        paddingTop: { xs: "10px", sm: "50px" },
      }}
    >
      <Typography component="h1" fontSize="38px" fontWeight="700">
        Inscríbete ahora
      </Typography>
      <form onSubmit={handleInputSubmit}>
        <TextField
          sx={{ backgroundColor: "#fff" }}
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
          helperText={(showErrors || touched.universidad) && errors.universidad}
        >
          {options.map((e) => (
            <MenuItem key={e.value} value={e.value}>
              {e.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ backgroundColor: "#fff" }}
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
              sx={{ backgroundColor: "#fff" }}
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
              sx={{ backgroundColor: "#fff" }}
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
              sx={{ backgroundColor: "#fff" }}
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
              sx={{ backgroundColor: "#fff" }}
              label="Celular"
              fullWidth
              margin="normal"
              name="celular"
              value={values.celular}
              onChange={handleChange}
              onBlur={handleBlur}
              error={(showErrors || touched.celular) && Boolean(errors.celular)}
              helperText={(showErrors || touched.celular) && errors.celular}
            />
          </Grid>
        </Grid>

        <Button
          sx={{
            background: "red",
            margin: "20px 0",
            fontSize: "20px",
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
    </Container>
  );
};

export default withRouter(ContactForm);

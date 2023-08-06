import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import FormularioInscripcion from "../../Components/FormularioInscripcion/FormularioInscripcion";

function Contactanos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box sx={{ background: "#f9faff" }}>
        <Container maxWidth="lg">
          <Grid container marginTop="60px">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormularioInscripcion />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                width="100%"
                height="100%"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FContactanos%2Fcontactanos.png?alt=media&token=ea3be39a-9ecf-4975-89ae-dceba7870cb1"
                }
                alt="alternative"
                style={{ marginRight: "0px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contactanos;

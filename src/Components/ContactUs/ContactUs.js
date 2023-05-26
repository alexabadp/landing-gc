import { withRouter } from "react-router-dom";
import ContactForm from "./ContactForm";
import "./ContactUs.css";
import { Box, Container, Grid } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Box sx={{ background: "#f9faff" }}>
        <Container maxWidth="lg">
          <Grid container marginTop="60px">
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                width="100%"
                height="100%"
                // className="img-fluid"
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
      {/* <div className="container container-contact">
        <div className="main-contact-block">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <br />
              <h1 className="form-title">Contáctanos</h1>
              <ContactForm />
            </div>

            <div className="col-sx-12 col-md-6 col-lg-6 col-xl-6">
              <div className="image-container" width="500px" height="400px">
                <img
                  width="100%"
                  height="100%"
                  className="img-fluid"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FContactanos%2Fcontactanos.png?alt=media&token=ea3be39a-9ecf-4975-89ae-dceba7870cb1"
                  }
                  alt="alternative"
                  style={{ marginRight: "0px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default withRouter(ContactUs);

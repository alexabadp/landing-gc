import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { withRouter } from "react-router-dom";
import logo from "../../Assets/Images/girl-making-notes.png";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <header id="header" className="header">
        <Container>
          <div className="col-lg-6 col-xl-6">
            <h1>Contáctanos</h1>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </div>
        </Container>
        <div className="col-lg-6 col-xl-6">
          <div className="image-container">
            <img className="img-fluid" src={logo} alt="alternative" />
          </div>
        </div>
      </header>
    </>
  );
}

export default withRouter(ContactUs);

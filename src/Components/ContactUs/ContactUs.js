import { withRouter } from "react-router-dom";
import logo from "../../Assets/Images/contactanos.png";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="container container-contact">
        <div className="main-contact-block">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <br />
              <h1 className="form-title">Contáctanos</h1>
              <ContactForm />
            </div>

            <div className="col-sx-12 col-md-6 col-lg-6 col-xl-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src={logo}
                  alt="alternative"
                  style={{ marginRight: "0px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ContactUs);

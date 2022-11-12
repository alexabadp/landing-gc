import { withRouter } from "react-router-dom";
import logo from "../../Assets/Images/girl-making-notes.png";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="container container-contact">
        <div className="col-lg-6 col-xl-6">
          <ContactForm />
        </div>

        <div className="col-lg-6 col-xl-6">
          {/* <div className="image-container">
            <img className="img-fluid" src={logo} alt="alternative" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(ContactUs);

import { Button, Form, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import logo from "../../Assets/Images/girl-making-notes.png";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <header id="header" class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-5">
              <div class="text-container">
                <h1 class="h1-large">Find influencers for your products</h1>
                <p class="p-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  dignissim, neque ut ultrices sollicitudin
                </p>
                <a class="btn-solid-lg" href="#services">
                  Offered services
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-xl-7">
              <div class="image-container">
                <img class="img-fluid" src={logo} alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default withRouter(ContactUs);

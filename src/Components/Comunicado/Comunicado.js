import { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import "./Comunicado.css";
import comunicado from "../../Assets/Images/comunicado.png";

function Comunicado() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShow(true)}
        style={{ display: "none" }}
      >
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={comunicado}
            className="navbar-logo"
            style={{ width: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Comunicado;

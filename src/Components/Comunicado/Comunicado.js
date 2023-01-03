import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Display } from "react-bootstrap-icons";
import "./Comunicado.css";

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
          <h4>Estudie desde cualquier parte del mundo</h4>
          <p>
            En nuestros 12 campus a nivel nacional y tambien de manera virtual
          </p>
          <div className="center">
            <Button variant="outline-danger" size="lg" id="modal-button">
              Explora nuestros ciclos
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Comunicado;

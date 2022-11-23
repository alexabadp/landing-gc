import { Button, Col, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row className="g-2">
            <Form.Label>Universidad que deseas postular</Form.Label>
            <Col sm="12">
              <Form.Select aria-label="Default select example" size="lg">
                <option value="1">Universidad1</option>
                <option value="2">Universidad2</option>
                <option value="3">Universidad3</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="g-2">
            <Form.Label>Elije el ciclo que te interesa</Form.Label>
            <Col sm="12">
              <Form.Select aria-label="Default select example" size="lg">
                <option value="1">Ciclo1</option>
                <option value="2">Ciclo2</option>
                <option value="3">Ciclo3</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="g-2">
            <Col sm="7">
              <Form.Label>Nombres y apellidos</Form.Label>
              <Form.Control type="name" size="lg" />
            </Col>
            <Col sm="5">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="lastName" size="lg" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="g-2">
            <Col sm="7">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="name" size="lg" />
            </Col>
            <Col sm="5">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="lastName" size="lg" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="g-2">
            <Col sm="7">
              <Button variant="danger" className="contact-button">
                Enviar
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
}

export default withRouter(ContactForm);

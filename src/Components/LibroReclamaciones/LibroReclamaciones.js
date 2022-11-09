import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import "./LibroReclamaciones.css";

function LibroReclamaciones() {
  return (
    <>
      <div id="claims" className="cards-1 bg-gray">
        <div className="container">
          <div className="header-content col-lg-12">
            <h1 className="header-title">Libro de Reclamaciones</h1>
          </div>
          <div className="claim-details">
            <h2 className="cia-title">Grupo de Estudio Ciencias E.I.R.L.</h2>
          </div>

          <div className="form-claim col-lg-12">
            <div className="content-claim">
              <h2 className="claim-subtitle">
                <span className="circle">1</span>
                Datos de la persona que presenta el reclamo
              </h2>
              <Form>
                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>Documento de Identidad</Form.Label>
                    <Col sm="1">
                      <Form.Select aria-label="Default select example">
                        <option value="1">DNI</option>
                        <option value="2">Pasaporte</option>
                        <option value="3">Carne Extranjeria</option>
                      </Form.Select>
                    </Col>
                    <Col sm="3">
                      <Form.Control type="documentId" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Nombres completos</Form.Label>
                      <Form.Control type="name" />
                    </Col>
                    <Col sm="6">
                      <Form.Label>Apellidos completos</Form.Label>
                      <Form.Control type="lastName" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control type="name" />
                    </Col>
                    <Col sm="6">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="lastName" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Departamento, Provicia, Distrito</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Lima</option>
                        <option value="2">Callao</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="12">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="lastName" />
                    </Col>
                  </Row>
                </Form.Group>

                <h2 className="claim-subtitle">
                  <span className="circle">2</span>
                  Datos del reclamo
                </h2>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="12">
                      <Form.Label>
                        Selecciona el tipo de reclamo que deseas realizar
                      </Form.Label>

                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>Reclamo</Form.Check.Label>
                      </Form.Check>
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>Queja</Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Selecciona la sede</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Sede 1</option>
                        <option value="2">Sede 2</option>
                      </Form.Select>
                    </Col>
                    <Col sm="6">
                      <Form.Label>
                        Selecciona el ciclo que desea reportar
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Ciclo 1</option>
                        <option value="2">Ciclo 2</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>
                      Reclamo (¿Cuéntanos qué ha sucedido?)
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>
                      Resolución del reclamo (¿Cómo te gustaría que solucionemos
                      este problema?)
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="12">
                      <Form.Label>
                        Selecciona el tipo de reclamo que deseas realizar
                      </Form.Label>

                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>
                          Al enviar este formulario acepto el flujo
                          transfronterizo de mis datos personales, según la Ley
                          de Protección de Datos Personales.
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>
                          He leído y estoy de acuerdo con toda la información
                          descrita en estre reclamo
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="claim-process">
            <p>
              Tu reclamo o queja será asignado a un asesor y te brindaremos una
              respuesta en el plazo que estipula la (Ley de Protección de
              Consumidor), el cual es improrrogable. Te pedimos estar atento a
              tu correo.
            </p>
            <Button variant="light">Cancelar</Button>
            <Button variant="danger">Generar reclamo</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(LibroReclamaciones);

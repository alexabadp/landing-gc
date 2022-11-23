import { useRef } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsChevronDown, BsQuestionOctagonFill } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import "./LibroReclamaciones.css";

function LibroReclamaciones() {
  const bottomRef = useRef();
  const onClick = () => {
    bottomRef.current.scrollIntoView();
  };
  return (
    <>
      <div className="container container-claim">
        <div className="col-lg-12 header-content">
          <div className="header-claim">
            <h1 className="header-title">Libro de Reclamaciones</h1>
            <h4>
              Completa el formulario para hacernos llegar tus quejas y/o
              sugerencias
            </h4>
            <div className="cursor">
              <BsChevronDown
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.5em",
                  marginTop: "40px",
                  strokeWidth: "2",
                }}
                onClick={onClick}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-12 header-one">
          <div className="row cia-info">
            <div className="block-one col-lg-6 col-12">
              <div className="block-title">
                Grupo de Estudio Ciencias E.I.R.L.
              </div>
              <div className="block-ruc">RUC 20607260169</div>
            </div>
            <div className="block-two col-lg-6 col-12">
              <div className="block-claim">
                Hoja de reclamación: 000000326-2022
              </div>
              <div className="block-date">29-10-2022 15:38:21</div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 form-claim">
          <div className="content-claim">
            <div className="row">
              <Form>
                <h2 className="claim-subtitle">
                  <span className="circle">1</span>
                  Datos de la persona que presenta el reclamo
                </h2>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>Documento de Identidad</Form.Label>
                    <Col sm="2">
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
                        <option value="1">DNI</option>
                        <option value="2">Pasaporte</option>
                        <option value="3">Carne Extranjeria</option>
                      </Form.Select>
                    </Col>
                    <Col sm="3">
                      <Form.Control type="documentId" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Nombres completos</Form.Label>
                      <Form.Control type="name" size="lg" />
                    </Col>
                    <Col sm="6">
                      <Form.Label>Apellidos completos</Form.Label>
                      <Form.Control type="lastName" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control type="name" size="lg" />
                    </Col>
                    <Col sm="6">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="lastName" size="lg" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Departamento, Provicia, Distrito</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
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
                      <Form.Control type="lastName" size="lg" />
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

                      <Form.Check type={"checkbox"} size="lg">
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>Reclamo</Form.Check.Label>
                      </Form.Check>
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input type={"checkbox"} isValid size="lg" />
                        <Form.Check.Label>Queja</Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="6">
                      <Form.Label>Selecciona la sede</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
                        <option value="1">Sede 1</option>
                        <option value="2">Sede 2</option>
                      </Form.Select>
                    </Col>
                    <Col sm="6">
                      <Form.Label>
                        Selecciona el ciclo que desea reportar
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="lg"
                      >
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
                    <Form.Control as="textarea" rows={3} size="lg" />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Form.Label>
                      Resolución del reclamo (¿Cómo te gustaría que solucionemos
                      este problema?)
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} size="lg" />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row className="g-2">
                    <Col sm="12">
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input
                          type={"checkbox"}
                          isValid
                          size="lg"
                          className="mr-4"
                        />
                        <Form.Check.Label
                          className="check-text"
                          style={{
                            color: "rgba(45, 42, 38, 0.75)",
                            marginLeft: "20px",
                          }}
                        >
                          Al enviar este formulario acepto el flujo
                          transfronterizo de mis datos personales, según la Ley
                          de Protección de Datos Personales.
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type={"checkbox"}>
                        <Form.Check.Input
                          type={"checkbox"}
                          isValid
                          style={{ color: "black" }}
                        />
                        <Form.Check.Label
                          className="check-text"
                          style={{
                            color: "rgba(45, 42, 38, 0.75)",
                            marginLeft: "20px",
                          }}
                        >
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
        </div>

        <div className="col-lg-12 claim-process" ref={bottomRef}>
          <div className="row process-info">
            <div className="col-lg-1 ">
              <BsQuestionOctagonFill
                style={{
                  fontSize: "2.5em",
                  marginLeft: "10px",
                  marginTop: "20px",
                  color: "red",
                }}
              />
            </div>
            <div className="col-lg-5">
              <p>
                Tu reclamo o queja será asignado a un asesor y te brindaremos
                una respuesta en el plazo que estipula la (Ley de Protección de
                Consumidor), el cual es improrrogable. Te pedimos estar atento a
                tu correo.
              </p>
            </div>
            <div className="col-lg-6 options">
              <Button variant="light" className="cancel">
                Cancelar
              </Button>
              <Button variant="danger" className="save">
                Generar reclamo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(LibroReclamaciones);

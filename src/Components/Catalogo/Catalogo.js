import { Button, Form, Image } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import cicloVerano from "../../Assets/Images/ciclo-verano.png";
import repasoVeranoUni from "../../Assets/Images/repaso-verano-uni.png";
import repasoVerano from "../../Assets/Images/repaso-verano.png";
import "./Catalogo.css";

function Catalogo() {
  return (
    <>
      <div className="container container-catalogo">
        <div className="main-catalogo">
          <div className="row main-catalogo-fblock">
            <div className="col-lg-3 filter-block">
              <div className="filter">Filtros</div>
              <div className="row">
                <div className="uni-block">
                  <div className="filter-uni">
                    Universidad
                    <FaAngleUp
                      style={{ float: "right", marginTop: "-2px" }}
                      size="1.5em"
                    />
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input
                        type={"checkbox"}
                        isValid
                        size="lg"
                        className="check-input"
                      />
                      <Form.Check.Label className="check-label">
                        Universidad Nacional de Ingeniería UNI
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        Universidad Nacional Mayor de San Marcos UNMSN
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                </div>
                <div className="cycle-block">
                  <div className="filter-uni">
                    Ciclos
                    <FaAngleUp
                      style={{ float: "right", marginTop: "-2px" }}
                      size="1.5em"
                    />
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        Nuevos ciclos
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        Incorporaciones
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        Ciclo Repaso
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        Ciclo Verano
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        Ciclo Semestral
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                </div>
                <div className="duration-block">
                  <div className="filter-uni">
                    Duracion
                    <FaAngleUp
                      style={{ float: "right", marginTop: "-2px" }}
                      size="1.5em"
                    />
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        De 1 a 3 meses
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        De 3 a 6 meses
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <div>
                    <Form.Check type={"checkbox"}>
                      <Form.Check.Input type={"checkbox"} isValid size="lg" />
                      <Form.Check.Label className="check-label">
                        De 6 a 12 meses
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                </div>
              </div>
              <div className="catalogo-button">
                <Button variant="dark" className="filter-button">
                  Aplicar flitros
                </Button>
              </div>
            </div>
            <div className="col-lg-9 results">
              <div className="row images-catalogo">
                <div className="catalogo-title">
                  Tenemos el ciclo que estás buscando
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <Image
                      src={cicloVerano}
                      className="navbar-logo"
                      style={{ width: "250px" }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src={repasoVerano}
                      className="navbar-logo"
                      style={{ width: "250px" }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src={repasoVeranoUni}
                      className="navbar-logo"
                      style={{ width: "250px" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <Image
                      src={cicloVerano}
                      className="navbar-logo"
                      style={{ width: "250px" }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src={repasoVerano}
                      className="navbar-logo"
                      style={{ width: "250px" }}
                    />
                  </div>
                  <div className="col-lg-4">
                    <Image
                      src={repasoVeranoUni}
                      className="navbar-logo"
                      style={{ width: "250px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Catalogo);

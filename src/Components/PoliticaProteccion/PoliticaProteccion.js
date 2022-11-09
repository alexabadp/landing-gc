import { withRouter } from "react-router-dom";
import "./PoliticaProteccion.css";

function PoliticaProteccion() {
  return (
    <>
      <div id="services" className="cards-1 bg-gray">
        <div className="container">
          <div className="header-content col-lg-12">
            <h1 className="header-title">Protección de Datos Personales</h1>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h1 className="body-title">
                Política de protección de datos de GrupoCiencias
              </h1>

              <p>
                La presente Política de Protección de Datos Personales Trilce,
                describe el tratamiento que nuestra institución (en adelante
                Trilce) brinda a los datos personales que recopila de los
                usuarios en su portal web. Dicha política se ajusta a las
                disposiciones contenidas en la Ley de Protección de Datos
                Personales, Ley N° 29733, su reglamento y normas
                complementarias, adoptando para ello las medidas técnicas y
                organizativas necesarias para evitar la pérdida, mal uso,
                alteración, acceso no autorizado y robo de los datos personales
                facilitados por los titulares de datos personales.
              </p>
              <h1 className="content-subtitle">Consentimiento del usuario</h1>
              <p>
                Trilce se obliga a que de los datos personales obtenidos a
                través de formularios del portal web, cuenten previamente con el
                consentimiento expreso del titular para recopilar su
                información, los cuales serán tratados única y específicamente
                para la finalidad solicitada.
              </p>
              <h1 className="content-subtitle">
                Tratamiento de Datos Personales
              </h1>
              <ol>
                <li>
                  Los datos personales facilitados por el Usuario se almacenarán
                  en los bancos de datos que forman parte del sistema de
                  información de Trilce y serán tratados para poder llevar a
                  cabo sus finalidades.
                </li>
                <li>
                  Trilce no empleará los datos personales del Usuario para
                  ninguna finalidad distinta a la que fueron suministrados, a no
                  ser que se trate de una finalidad expresamente permitida o
                  exigida por la normativa vigente aplicable, por orden judicial
                  o una autoridad competente.
                </li>
                <li>
                  Trilce no compartirá ni cederá a terceros algún dato personal
                  del Usuario sin el consentimiento previo y expreso de este
                  último, salvo cuando dicha comunicación sea exigida por la
                  legislación vigente, por orden judicial o por una autoridad
                  competente.
                </li>
                <li>
                  El portal web de Trilce puede ofrecer enlaces (links) para
                  acceder a otros portales web que no son parte de aquellos. Es
                  responsabilidad del Usuario revisar las políticas de
                  privacidad en dichos portales web para verificar el nivel de
                  protección de sus datos personales en ese ambiente, lo que es
                  ajeno a la responsabilidad de Trilce.
                </li>
              </ol>
              <h1 className="content-subtitle">Medidas de Seguridad</h1>
              <p>
                Trilce se compromete a brindar todas las medidas técnicas,
                legales y administrativas necesarias para garantizar la
                seguridad y confidencialidad de los datos personales; los cuales
                serán tratados considerando los principios de legalidad,
                consentimiento, proporcionalidad, calidad, seguridad y los demás
                presentes en la normativa vigente referente a protección de
                datos personales, evitando que estos sean filtrados, difundidos
                o cualquier acción que ponga en peligro su información personal.
              </p>
              <h1 className="content-subtitle">
                Cambios de Política de Privacidad
              </h1>
              <ol>
                <li>
                  Trilce asume que los datos personales proporcionados por el
                  Usuario deben ser verdaderos, completos, exactos, vigentes y,
                  corresponder a su verdadera identidad. Para cualquier
                  modificación, el Usuario será responsable de comunicar
                  inmediatamente a Trilce.
                </li>
                <li>
                  El Usuario asumirá las responsabilidades por los daños y
                  perjuicios, directo o indirecto que genere a Trilce y/o
                  terceros por incumplir total o parcialmente lo señalado en el
                  punto anterior.
                </li>
              </ol>
              <h1 className="content-subtitle">
                Cambios de Política de Privacidad
              </h1>
              <p>
                Trilce se reserva el derecho de modificar y/o actualizar la
                presente Política de Privacidad con fines de mejora, ya sea para
                adaptarla a futuros cambios que pueda requerir el marco
                normativo vigente, brindar una mejor calidad de servicio o
                comunicar nuevas alternativas relacionadas a la presente
                Política. Es responsabilidad del Usuario mantenerse informado
                sobre los cambios que se introduzcan a esta Política de
                Privacidad publicando en este Sitio la versión actualizada o
                modificada de la misma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(PoliticaProteccion);

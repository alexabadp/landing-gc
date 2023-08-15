import { useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./PoliticaProteccion.css";
import { Container, Typography } from "@mui/material";
import Header from "../../Layouts/Header/Header";

const PoliticaProteccion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bottomRef = useRef();
  const onClick = () => {
    bottomRef.current.scrollIntoView();
  };

  const style = {
    color: "#FFFFFF",
    fontSize: "1.5em",
    marginTop: "40px",
    strokeWidth: "2px",
  };
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        {/* <Box> */}
        <div className="header-content col-lg-12">
          <div className="header-politica">
            <div className="row">
              <div className="col-12 col-xl-12">
                {/* <h1 className="header-title">Protección de Datos Personales</h1> */}
                <Typography
                  color="#fff"
                  padding="30px"
                  fontWeight="700"
                  textAlign="center"
                  sx={{ fontSize: { xs: "18px", md: "28px" } }}
                >
                  POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES
                </Typography>
                <h4 className="header-subtitle">
                  Conoce nuestros Términos y Condiciones
                </h4>
              </div>
            </div>

            <div className="cursor">
              <BsChevronDown style={style} onClick={onClick} />
            </div>
          </div>
        </div>
        {/* </Box> */}
      </Container>
      <Container maxWidth="xl">
        <div className="container container-politica">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="body-title">
                {/* Política de protección de datos de GrupoCiencias */}
                INTRODUCCIÓN
              </h1>
              <p>
                {/* La presente Política de Protección de Datos Personales Trilce,
              describe el tratamiento que nuestra institución (en adelante
              Trilce) brinda a los datos personales que recopila de los usuarios
              en su portal web. Dicha política se ajusta a las disposiciones
              contenidas en la Ley de Protección de Datos Personales, Ley N°
              29733, su reglamento y normas complementarias, adoptando para ello
              las medidas técnicas y organizativas necesarias para evitar la
              pérdida, mal uso, alteración, acceso no autorizado y robo de los
              datos personales facilitados por los titulares de datos
              personales. */}
                La presente Política de Protección de Datos Personales, describe
                el trato que damos a los datos personales que recopilamos en
                nuestra web. Dicha política se ajusta a todo lo contenido en la
                Ley de Protección de Datos Personales (Ley N° 29733), su
                reglamento y normas complementarias, adoptando para ello las
                necesarias para evitar la pérdida, mal uso, alteración, acceso
                no autorizado y robo de los datos facilitados por los usuarios.
              </p>
              <h1 className="content-subtitle">DEFINICIONES</h1>
              <p>
                De acuerdo con la Ley N° 29733 – Ley de Protección de Datos
                Personales y su Reglamento, aprobado por el Decreto Supremo No.
                003-2013-JUS, se define lo siguiente:
              </p>
              <ol>
                <li>
                  Datos personales: Toda información sobre una persona natural
                  que la identifica o hace identificable a través de medios que
                  pueden ser razonablemente utilizados.
                </li>
                <li>
                  Tratamiento de datos personales: Cualquier operación o
                  procedimiento técnico, automatizado o no, que permite la
                  recopilación, registro, organización, almacenamiento,
                  conservación, elaboración, modificación, extracción, consulta,
                  utilización, bloqueo, supresión, comunicación por
                  transferencia o por difusión o cualquier otra forma de
                  procesamiento que facilite el acceso, correlación o
                  interconexión de los datos personales.
                </li>
              </ol>
              <h1 className="content-subtitle">CONSENTIMIENTO DEL USUARIO</h1>
              <p>
                Grupo Ciencias se obliga a que de los datos personales obtenidos
                a través de su web, cuenten previamente con el consentimiento
                expreso del titular para recopilar dicha información, la cual
                será tratada única y específicamente para la finalidad
                solicitada.
              </p>
              <h1 className="content-subtitle">
                TRATAMIENTO DE DATOS PERSONALES
              </h1>
              <ol>
                <li>
                  Los datos personales facilitados por el Usuario se almacenarán
                  en los bancos de datos que forman parte del sistema de
                  información de Grupo Ciencias y serán tratados para poder
                  llevar a cabo sus finalidades.
                </li>
                <li>
                  Grupo Ciencias no empleará los datos personales del Usuario
                  para ninguna finalidad distinta a la que fueron suministrados,
                  a no ser que se trate de una finalidad expresamente permitida
                  o exigida por la normativa vigente aplicable, por orden
                  judicial o una autoridad competente.
                </li>
                <li>
                  Grupo Ciencias no compartirá ni cederá a terceros algún dato
                  personal del Usuario sin el consentimiento previo y expreso de
                  este último, salvo cuando dicha comunicación sea exigida por
                  la legislación vigente, por orden judicial o por una autoridad
                  competente.
                </li>
                <li>
                  El portal web de Grupo Ciencias puede ofrecer enlaces para
                  acceder a otros sitios web que no son parte de aquellos. Es
                  responsabilidad del Usuario revisar las políticas de
                  privacidad en dichos sitios web para verificar el nivel de
                  protección de sus datos personales en ese ambiente, lo que es
                  ajeno a la responsabilidad de Grupo Ciencias.
                </li>
              </ol>
              <div ref={bottomRef}>
                <h1 className="content-subtitle">MEDIDAS DE SEGURIDAD</h1>
              </div>

              <p>
                Grupo Ciencias se compromete a brindar todas las medidas
                técnicas, legales y administrativas necesarias para garantizar
                la seguridad y confidencialidad de los datos personales; los
                cuales serán tratados considerando los principios de legalidad,
                consentimiento, proporcionalidad, calidad, seguridad y los demás
                presentes en la normativa vigente referente a protección de
                datos personales, evitando que estos sean filtrados, difundidos
                o cualquier acción que ponga en peligro su información personal.
              </p>
              <h1 className="content-subtitle">RESPONSABILIDADES</h1>
              <p>
                Grupo Ciencias asume que los datos personales proporcionados por
                el Usuario deben ser verdaderos, completos, exactos, vigentes y,
                corresponder a su verdadera identidad. Para cualquier
                modificación, el Usuario será responsable de comunicar
                inmediatamente a Grupo Ciencias.
              </p>
              <p>
                El Usuario asumirá las responsabilidades por los daños y
                perjuicios, directo o indirecto que genere a Grupo Ciencias y/o
                terceros por incumplir total o parcialmente lo señalado en el
                punto anterior.
              </p>
              <h1 className="content-subtitle">
                EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN
                Y OPOSICIÓN (ARCO).
              </h1>
              <ol>
                <li>
                  Grupo Ciencias debe garantizar la atención de los derechos
                  protegidos que pueda ejercer el Titular de los Datos
                  Personales, para lo cual deberá mantener disponibles canales,
                  procedimientos e información para atender las solicitudes en
                  los plazos establecidos por las Normas de Protección de Datos
                  Personales.
                </li>
                <li>
                  El Usuario podrá ejercer sus derechos de Información, Acceso,
                  Rectificación, Cancelación, Oposición, etc. (ARCO) al uso de
                  sus datos personales, de conformidad con la Ley de Protección
                  de Datos Personales, Ley N° 29733. En ese sentido, el Usuario
                  tiene derecho, entre otros, a acceder a su información
                  personal, a solicitar la rectificación de datos inexactos y a
                  revocar su consentimiento para el tratamiento de la misma;
                  asimismo, podrá solicitar la supresión de sus datos u oponerse
                  al tratamiento de los mismos, incluso cuando estos ya no
                  resulten necesarios para los fines que motivaron su
                  recopilación.
                </li>
                <li>
                  El ejercicio de estos derechos es gratuito. Para ello, puede
                  dirigirse por correo electrónico a
                  publicidad@grupociencias.edu.pe adjuntando su solicitud y
                  escaneo en PDF del documento de identidad (DNI/CE/Pasaporte)
                  que acredite su titularidad sobre los datos personales
                  respecto de los cuales ejercerá su derecho. También podrá
                  hacerlo acercándose a la sede de Comas (Av. Universitaria
                  6403). Si utiliza un representante legal, éste deberá
                  acreditarse como tal.
                </li>
                <li>
                  La atención de la solicitud será efectuada de acuerdo a los
                  plazos previstos en la normatividad de protección de datos
                  personales.
                </li>
              </ol>
              <h1 className="content-subtitle">
                CAMBIOS DE POLITICA DE PRIVACIDAD
              </h1>
              <p className="last-parragraph">
                Grupo Ciencias se reserva el derecho de modificar y/o actualizar
                la presente Política de Privacidad con fines de mejora, ya sea
                para adaptarla a futuros cambios que pueda requerir el marco
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
      </Container>
    </>
  );
};

export default PoliticaProteccion;

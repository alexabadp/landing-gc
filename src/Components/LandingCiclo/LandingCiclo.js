// import { Button, Image } from "react-bootstrap";
// import yape from "../../Assets/Images/yape.png";
// import bcp from "../../Assets/Images/bcp.png";
// import landing from "../../Assets/Images/landing-image.png";
// import notebook from "../../Assets/Images/notebook.png";
// import "./LandingCiclo.css";
// import { BsDownload, BsFillStopwatchFill } from "react-icons/bs";
// import { FaChrome } from "react-icons/fa";
// import { AiFillThunderbolt } from "react-icons/ai";

// function LandingCiclo() {
//   return (
//     <>
//       <div className="container landing-container">
//         <div className="row">
//           <div className="row first-block">
//             <div className="col-lg-4">
//               <div className="ciclo">Ciclo UNI</div>
//               <div className="verano">Verano PRE</div>
//               <p>
//                 La mejor experiencia de aprendizaje en el mejor ambiente digital
//               </p>
//               <div className="enroll-div">
//                 <Button variant="danger" className="enroll">
//                   Matricúlate ahora
//                 </Button>
//               </div>
//             </div>
//             <div className="col-lg-8 image-container">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <Image
//                     src={landing}
//                     className="navbar-logo"
//                     style={{
//                       marginLeft: "90px",
//                       marginTop: "42px",
//                     }}
//                   />
//                 </div>
//                 <div className="col-lg-6">
//                   <div className="remind-this">
//                     <div className="remind-title">Recuerda que...</div>
//                     <p>
//                       Cada clase queda grabada para que las repases o te pongas
//                       al día
//                     </p>
//                     <div className="remind-know">Conoce más</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row second-block">
//             <div className="col-lg-7">
//               <div className="about">Acerca del ciclo</div>
//               <div className="ciclo-detail">
//                 <div className="row">
//                   <div className="col-lg-5 col-xl-12 subtitle">
//                     Fecha de inicio:
//                   </div>
//                   <div className="col-lg-7 col-xl-12 values">
//                     5 de enero del 2023
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-5 col-xl-12 subtitle">Fecha fin:</div>
//                   <div className="col-lg-7 col-xl-12 values">
//                     11 de mayo del 2023 (10 meses)
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-5 col-xl-12 subtitle">Horarios: </div>
//                   <div className="col-lg-7 col-xl-12 values">
//                     Martes y jueves de 19:00 a 21:00 hrs (LIM-CDMX-BOG). 64
//                     horas de aprendizaje.
//                   </div>
//                 </div>
//               </div>
//               <div className="row resume-info">
//                 <div className="resume">Resumen</div>
//                 <p>
//                   Ciclo introductorio para chicos que inician su preparación o
//                   que están terminando la secundaria, pero tienen el objetivo de
//                   ingresar a la Universidad Nacional de Ingeniería, conocerán el
//                   sistema UNI desde cero y con los temas base de cada curso.
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-5 info">
//               <div className="duration-detail">
//                 <div className="row duration">
//                   <div className="col-lg-8 col-7 subtitle">
//                     <BsFillStopwatchFill
//                       style={{
//                         marginRight: "10px",
//                         color: "#E70031",
//                       }}
//                     />
//                     Duración :
//                   </div>
//                   <div className="col-lg-4 col-5 value">10 meses</div>
//                 </div>
//                 <div className="row duration">
//                   <div className="col-lg-8 col-7 subtitle">
//                     <AiFillThunderbolt
//                       style={{
//                         marginRight: "10px",
//                         color: "#E70031",
//                       }}
//                     />
//                     Modalidad :
//                   </div>
//                   <div className="col-lg-4 col-5 value">híbrido</div>
//                 </div>
//                 <div className="row duration">
//                   <div className="col-lg-12 subtitle">
//                     <BsDownload
//                       style={{
//                         marginRight: "10px",
//                         color: "#E70031",
//                       }}
//                     />
//                     Descargar temario
//                   </div>
//                 </div>
//                 <div className="row duration">
//                   <div className="col-lg-12 subtitle">
//                     <FaChrome
//                       style={{
//                         marginRight: "10px",
//                         color: "#E70031",
//                       }}
//                     />
//                     Mostrar horario
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row third-block">
//             <div className="col-lg-1 payment-method">Medios de Pago</div>
//             <div className="col-lg-3 payment-type">
//               Paga con tarjeta en un agente o tu aplicativo
//             </div>
//             <div className="col-lg-2">
//               <Image
//                 src={bcp}
//                 className="navbar-logo"
//                 style={{
//                   marginLeft: "10px",
//                 }}
//               />
//             </div>
//             <div className="col-lg-2">
//               <Image
//                 src={yape}
//                 className="navbar-logo"
//                 style={{
//                   marginLeft: "10px",
//                 }}
//               />
//             </div>
//             <div className="col-lg-2">
//               <Image
//                 src={bcp}
//                 className="navbar-logo"
//                 style={{
//                   marginLeft: "10px",
//                 }}
//               />
//             </div>
//             <div className="col-lg-2">
//               <Image
//                 src={yape}
//                 className="navbar-logo"
//                 style={{
//                   marginLeft: "10px",
//                 }}
//               />
//             </div>
//           </div>

//           <div className="row fourth-block">
//             <div className="col-lg-5">
//               <div className="title-enjoy">
//                 Disfruta del formato virtual del ciclo
//               </div>
//               <div className="subtitle-enjoy">
//                 Prepárate con nosotros desde la comodidad de tu hogar
//               </div>
//               <div className="list-enjoy">
//                 <ul>
//                   <li>Clases en vivo en HD con todos nuestros docentes.</li>
//                   <li>Los profesores usan pizarras y tizas.</li>
//                   <li>Grabación de las clases para repasar contenidos.</li>
//                   <li>Simulacros cada 2 semanas.</li>
//                   <li>Materiales prácticos en PDF para descargar.</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-7 notebook-div">
//               <Image
//                 src={notebook}
//                 className="navbar-logo"
//                 style={{ marginTop: "45px", marginLeft: "10px" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LandingCiclo;

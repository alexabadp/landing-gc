// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_KEY = "AIzaSyAflrT6KQlmEkn0BlWzmC7294stcdo6mfw";
// const CHANNEL_ID = "UC9nDi1geQRdTneZFZaktmSw";

// const VideoClases = () => {
//   const [playlists, setPlaylists] = useState([]);

//   useEffect(() => {
//     const fetchPlaylists = async () => {
//       try {
//         const response = await axios.get(
//           "https://www.googleapis.com/youtube/v3/playlists",
//           {
//             params: {
//               part: "snippet",
//               channelId: CHANNEL_ID,
//               key: API_KEY,
//               maxResults: 1,
//             },
//           }
//         );

//         const playlistData = await Promise.all(
//           response.data.items.map(async (item) => {
//             const playlistId = item.id;
//             const videosResponse = await axios.get(
//               "https://www.googleapis.com/youtube/v3/playlistItems",
//               {
//                 params: {
//                   part: "snippet",
//                   playlistId: playlistId,
//                   key: API_KEY,
//                   maxResults: 10,
//                 },
//               }
//             );

//             const videos = videosResponse.data.items.map((video) => ({
//               id: video.snippet.resourceId.videoId,
//               image: video.snippet.thumbnails.high.url,
//               imageBg: "/images/captura.webp",
//               title: video.snippet.title,
//               description: video.snippet.description,
//               youtubeLink: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
//             }));

//             return {
//               playlistId: playlistId,
//               title: item.snippet.title,
//               videos: videos,
//             };
//           })
//         );

//         setPlaylists(playlistData);

//         console.log(response);
//         console.log(playlistData);
//       } catch (error) {
//         console.error(
//           "Error al obtener las listas de reproducción y videos:",
//           error
//         );
//       }
//     };

//     fetchPlaylists();
//   }, []);

//   return (
//     <div>
//       <h1>Aplicación de YouTube API</h1>
//       {playlists.map((playlist) => (
//         <div key={playlist.playlistId}>
//           <h2>{playlist.title}</h2>
//           <ul>
//             {playlist.videos.map((video) => (
//               <li key={video.id}>
//                 <img src={video.thumbnail} alt={video.title} />
//                 <h3>{video.title}</h3>
//                 <p>{video.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoClases;

import { Button, Form, Image } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import escaneos from "../../Assets/Images/escaneos.png";
import Slider from "../../Layouts/NetflixSlider";
import "./VideoClases.css";
import Videos from "./Responsive/Videos";
import { useEffect, useState } from "react";
import { universities } from "./data";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";

import { useTheme } from "@material-ui/core";

function VideoClases() {
  const [optionUniversity, setOptionUniversity] = useState("");
  const [optionCourse, setOptionCourse] = useState([]);
  const [optionSubject, setOptionSubject] = useState([]);

  const handleChangeCourses = (event) => {
    const university = universities.find((u) => u.name === event.target.value);
    // const university = universities.find((u) => u.name === event.target.value);
    const courses = university.courses;
    setOptionCourse(courses);
    setOptionSubject([]);
  };

  const handleChangeSubject = (event) => {
    const courses = optionCourse.find((c) => c.name === event.target.value);
    const subjects = courses.subject;
    setOptionSubject(subjects);
    // console.log("subject", subjects);
  };

  const theme = useTheme();
  const textFieldStyle = {
    color: theme.palette.type === "dark" ? "white" : "black",
    background: theme.palette.type === "dark" ? "#333" : "#fff",
    borderRadius: "8px",
  };

  return (
    <>
      <div className="container videoclases-container">
        <div className="main-videoclases-fblock">
          <div className="row videoclases-fblock">
            <div className="col-lg-12 mt-4 videoclases-fblock">
              <ReactPlayer
                url="https://youtu.be/UZ1xi5HJP6c"
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
                muted={true}
              />
            </div>
            {/* <div className="col-lg-12 mt-1 courses-explore">
              Explora por cursos
            </div> */}

            <Typography
              sx={{ color: "#fff", padding: "10px 0", fontSize: "20px" }}
            >
              {" "}
              Explora por cursos{" "}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Elije una Universidad"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  // name="university"
                  //         // defaultValue={values.ciclo}
                  //         // value={values.ciclo}
                  //         // onChange={handleChange}
                  onChange={handleChangeCourses}
                  //         // onBlur={handleBlur}
                  //         // error={(showErrors || touched.ciclo) && Boolean(errors.ciclo)}
                  //         // helperText={(showErrors || touched.ciclo) && errors.ciclo}
                  style={textFieldStyle}
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona una universidad
                  </MenuItem>
                  {universities.map((e) => (
                    <MenuItem key={e.name} value={e.name}>
                      {e.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Elije un curso"
                  fullWidth
                  margin="normal"
                  onChange={handleChangeSubject}
                  variant="filled"
                  // name="course"
                  //         // defaultValue={values.ciclo}
                  //         // value={values.ciclo}
                  //         // onChange={handleChange}
                  //         // onBlur={handleBlur}
                  //         // error={(showErrors || touched.ciclo) && Boolean(errors.ciclo)}
                  //         // helperText={(showErrors || touched.ciclo) && errors.ciclo}
                  style={textFieldStyle}
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona un Curso
                  </MenuItem>
                  {optionCourse.map((e) => (
                    <MenuItem key={e.name} value={e.name}>
                      {e.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Elije un Tema"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  // name="course"
                  //         // defaultValue={values.ciclo}
                  //         // value={values.ciclo}
                  //         // onChange={handleChange}
                  //         // onBlur={handleBlur}
                  //         // error={(showErrors || touched.ciclo) && Boolean(errors.ciclo)}
                  //         // helperText={(showErrors || touched.ciclo) && errors.ciclo}
                  style={textFieldStyle}
                >
                  <MenuItem value="opcion1" disabled>
                    Selecciona un Tema
                  </MenuItem>
                  {optionSubject.map((e) => (
                    <MenuItem key={e.title} value={e.title}>
                      {e.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            {/* <div className="col-lg-4 mt-5">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Universidad</option>
                <option value="2">Universidad Mayor de San Marcos</option>
                <option value="3">Universidad Nacional de Ingenieria</option>
              </Form.Select>
            </div>
            <div className="col-lg-3 mt-5">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Ciclo Verano San Marcos</option>
                <option value="2">Ciclo Verano UNI</option>
                <option value="3">Ciclo Repaso San Marcos</option>
                <option value="4">Ciclo Repaso UNI</option>
                <option value="5">Ciclo Semestral San Marcos</option>
                <option value="6">Ciclo Semestral Básico UNI</option>
                <option value="7">Ciclo Semestral Intensivo UNI</option>
                <option value="8">Ciclo Anual San Marcos</option>
                <option value="9">Ciclo Semianual San Marcos</option>
              </Form.Select>
            </div>
            <div className="col-lg-3 mt-5">
              <Form.Select aria-label="Default select example" size="md">
                <option value="1">Ciclo Verano San Marcos</option>
                <option value="2">Ciclo Verano UNI</option>
                <option value="3">Ciclo Repaso San Marcos</option>
                <option value="4">Ciclo Repaso UNI</option>
                <option value="5">Ciclo Semestral San Marcos</option>
                <option value="6">Ciclo Semestral Básico UNI</option>
                <option value="7">Ciclo Semestral Intensivo UNI</option>
                <option value="8">Ciclo Anual San Marcos</option>
                <option value="9">Ciclo Semianual San Marcos</option>
              </Form.Select>
            </div>
            <div className="col-lg-2 mt-5">
              <Button variant="danger" className="admision-button">
                Buscar
              </Button>
            </div>

            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-3 mt-5 mb-5">
              <Image
                src={escaneos}
                className="navbar-logo"
                style={{ width: "100%" }}
              />
            </div> */}

            {/* // PRUEBA */}
            {optionCourse[0]?.subject &&
              optionCourse.flatMap((curso) => (
                <div className="col-lg-12 col-12 mt-5">
                  <div className="courses-explore">{curso.name}</div>
                  <div className="div-slider">
                    <Slider>
                      {curso.subject.map((e) => (
                        <Slider.Item movie={e} key={e.id}>
                          item1
                        </Slider.Item>
                      ))}
                    </Slider>
                  </div>
                </div>
              ))}
            {/* // PRUEBA */}

            {/* <div className="col-lg-12 col-12 mt-5">
              <div className="courses-explore">Razonamiento Matemático</div>
              <div className="div-slider">
                <Slider>
                  {RazonamientoMat.map((razonamientoMat) => (
                    <Slider.Item
                      movie={razonamientoMat}
                      key={razonamientoMat.id}
                    >
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div> */}

            {/* <div className="col-lg-12 col-12">
              <div className="courses-explore">Lenguaje</div>
              <div className="div-slider">
                <Slider>
                  {Lenguaje.map((lenguaje) => (
                    <Slider.Item movie={lenguaje} key={lenguaje.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div> */}

            {/* <div className="col-lg-12 col-12">
              <div className="courses-explore">Historia Universal</div>
              <div className="div-slider">
                <Slider>
                  {HistoriaU.map((historiaU) => (
                    <Slider.Item movie={historiaU} key={historiaU.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div> */}

            {/* <div className="col-lg-12 col-12">
              <div className="courses-explore">Química</div>
              <div className="div-slider">
                <Slider>
                  {Quimica.map((quimica) => (
                    <Slider.Item movie={quimica} key={quimica.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div> */}

            {/* <div className="col-lg-12 col-12">
              <div className="courses-explore">Biología</div>
              <div className="div-slider">
                <Slider>
                  {Biologia.map((biologia) => (
                    <Slider.Item movie={biologia} key={biologia.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div> */}

            {/* <div className="col-lg-12 col-12">
              <div className="courses-explore">Álgebra</div>
              <div className="div-slider">
                <Slider>
                  {Algebra.map((algebra) => (
                    <Slider.Item movie={algebra} key={algebra.id}>
                      item1
                    </Slider.Item>
                  ))}
                </Slider>
              </div>
            </div> */}
            <div className="col-lg-12 col-12 down-bar">
              <div className="arrow-right">
                <a style={{ color: "red" }} href="/videoclases-dos">
                  Siguiente
                  <FaArrowAltCircleRight
                    color="#E70031"
                    size="2.5rem"
                    style={{ marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Videos /> */}
    </>
  );
}

export default withRouter(VideoClases);

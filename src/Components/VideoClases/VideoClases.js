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
//               maxResults: 10,
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
//                   maxResults: 50,
//                 },
//               }
//             );

//             const videos = videosResponse.data.items.map((video) => ({
//               id: video.snippet.resourceId.videoId,
//               image: video.snippet.thumbnails.standard?.url || "",
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
import { withRouter, Link } from "react-router-dom";
import escaneos from "../../Assets/Images/escaneos.png";
import Slider from "../../Layouts/NetflixSlider";
import "./VideoClases.css";
import { useEffect, useState } from "react";
import { universities } from "./data";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { useTheme } from "@material-ui/core";
import Video from "./Video";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function VideoClases() {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [optionCourse, setOptionCourse] = useState([]);
  const [optionSubject, setOptionSubject] = useState([]);
  const [subject, setSubject] = useState([]);

  const [imageVisible, setImageVisible] = useState(null);

  const handleChangeUniversity = (event) => {
    setUniversity(event.target.value);

    const university = universities.find((u) => u.name === event.target.value);
    const courses = university.courses;
    setOptionCourse(courses);
    setOptionSubject([]);
    setSubject([]);
  };

  const handleChangeCourse = (event) => {
    setCourse(event.target.value);

    if (event.target.value === university) {
      handleChangeUniversity(event);
    } else {
      const courses = optionCourse.find((c) => c.name === event.target.value);
      const subjects = courses.subject;
      setOptionSubject(subjects);
      setSubject([]);
    }
  };

  const handleChangeSubject = (event) => {
    if (event.target.value === course) {
      handleChangeCourse(event);
    } else {
      const selectSubject = optionSubject.find(
        (s) => s.title === event.target.value
      );
      setSubject(selectSubject);
      console.log(subject);
    }
  };

  const handleImageVisible = (imagen) => {
    setImageVisible(imagen);
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
            {/* <div className="col-lg-12 mt-4 videoclases-fblock">
              <ReactPlayer
                url="https://youtu.be/UZ1xi5HJP6c"
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
                muted={true}
              />
            </div> */}

            <Typography
              sx={{ color: "#fff", padding: "10px 0", fontSize: "20px" }}
            >
              Explora por cursos
            </Typography>
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
                  onChange={handleChangeUniversity}
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
                  onChange={handleChangeCourse}
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
                  {optionCourse?.length !== 0 ? (
                    <MenuItem value={university}>Ver Todos los Cursos</MenuItem>
                  ) : (
                    <MenuItem value={university} disabled>
                      Elija una Universidad
                    </MenuItem>
                  )}
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
                  // sx={textFieldStyle}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: "300px",
                        color: "#000",
                      },
                    },
                  }}
                >
                  {optionSubject?.length !== 0 ? (
                    <MenuItem value={course}>Ver Todos los Temas</MenuItem>
                  ) : (
                    <MenuItem value={course} disabled>
                      Elija un Curso
                    </MenuItem>
                  )}
                  {optionSubject.map((e) => (
                    <MenuItem key={e.title} value={e.title}>
                      {e.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            {university === "" ? (
              <>
                {universities.flatMap((university) =>
                  university.courses.flatMap((curso) => (
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
                  ))
                )}
              </>
            ) : (
              ""
            )}

            {subject.length !== 0 ? (
              <>
                <img src={subject.imageBg} alt="" />
              </>
            ) : (
              <>
                {optionSubject.length === 0 ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Box className="conenedorVideos">
                      {optionSubject.map((e) => (
                        <>
                          <Video
                            key={e.id}
                            image={e.image}
                            botonClick={handleImageVisible}
                            imageVisible={imageVisible}
                          ></Video>
                          {imageVisible === e.image ? (
                            <img
                              width="100%"
                              className="video-showImagen"
                              src={e.imageBg}
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                        </>
                      ))}
                    </Box>
                  </>
                )}
              </>
            )}

            {/* <div className="col-lg-12 col-12 down-bar">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* <Videos /> */}
    </>
  );
}

export default withRouter(VideoClases);

import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
// import MaterialTable from "./MaterialTable";
import FilterUniversidades from "../Filters/FilterUniversidades";
import FilterCursos from "../Filters/FilterCursos";
import FilterTemas from "../Filters/FilterTemas";
import MaterialTable from "../MaterialTable/MaterialTable";

const MaterialFilters = () => {
  const universidades = [
    {
      iduniversidad: "1",
      nombre_universidad: "Universidad Nacional Mayor de San Marcos",
    },
    {
      iduniversidad: "3",
      nombre_universidad: "Universidad Nacional de Ingeniería",
    },
  ];
  const [cursos, setCursos] = useState([]);
  const [temas, setTemas] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  const [universidad, setUniversidad] = useState(null);
  const [curso, setCurso] = useState(null);
  const [tema, setTema] = useState(null);

  const handleChangeUniversity = (event) => {
    setUniversidad(event.target.value);
    fetch(
      `https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/cursos/universidad/materiales/listar/${event.target.value}`
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        const datos = JSON.parse(data);
        setCursos(datos);
      });
  };

  const handleChangeCourse = (event) => {
    setCurso(event.target.value);
    return new Promise((resolve, reject) => {
      fetch(
        "https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/biblioteca/materiales/tema/listar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idcurso: event.target.value }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud");
          }
        })
        .then((responseData) => {
          setTemas(responseData);
          resolve(responseData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleChangeSubject = (event = { target: { value: "2866" } }) => {
    setTema(event.target.value);
    return new Promise((resolve, reject) => {
      fetch(
        "https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/biblioteca/materiales/listar/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idtema: event.target.value }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud");
          }
        })
        .then((responseData) => {
          setDataTable(responseData);
          resolve(responseData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#fff",
            padding: "20px 0",
            fontSize: { xs: "22px", md: "32px" },
            textAlign: "center",
          }}
        >
          Practica con los PDFs de nuestra biblioteca gratuita del Ciclo FREE
        </Typography>
        <Grid container spacing={2} sx={{ padding: "0 0 100px 0" }}>
          <Grid item xs={12} md={4}>
            <FilterUniversidades
              onChange={handleChangeUniversity}
              value={universidad}
              name="Universidad"
              data={universidades}
            />
            <FilterCursos
              onChange={handleChangeCourse}
              value={curso}
              name="Curso"
              data={cursos}
            />

            <FilterTemas
              onChange={handleChangeSubject}
              value={tema}
              name="Tema"
              data={temas}
            />
          </Grid>
          <Grid item xs={12} md={8} overflow="auto">
            <MaterialTable dataTable={dataTable} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MaterialFilters;

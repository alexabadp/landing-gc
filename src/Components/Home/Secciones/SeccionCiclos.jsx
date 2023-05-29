import { Link } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container, Typography, useMediaQuery } from "@mui/material";

const itemData = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fjpeg%2FANUAL%20UNMSM.jpeg?alt=media&token=cbe9f9f3-166c-4109-b8f9-1ae9b0b5537e",
    title: "Ciclo Anual San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fjpeg%2FREPASO%20UNMSM.jpeg?alt=media&token=e1bc8de4-2d3c-4a14-be2d-794f76567681",
    title: "Ciclo Repaso San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/2",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fjpeg%2FSEMESTRAL%20ABC.jpeg?alt=media&token=12e1d552-f7f5-4452-a865-a531a21cd77d",
    title: "Ciclo Semestral ABC San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/3",
  },

  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fjpeg%2FSEMESTRAL%20DE.jpeg?alt=media&token=c16bc270-7e90-409f-9af4-59389b35459d",
    title: "Ciclo Semestral DE San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/5",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fjpeg%2FSEMESTRAL%20BASICO%20UNI.jpeg?alt=media&token=ae948e73-8c12-4069-b7da-554be1653259",
    title: "Ciclo Semestral Básico UNI",
    author: "@grupoCiencias",
    link: "/ciclos/4",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fjpeg%2FSEMESTRAL%20INTENSIVO%20UNI.jpeg?alt=media&token=2dc55828-bb9a-4d1d-86ab-be0c22f2732e",
    title: "Ciclo Semestral Intensivo UNI",
    author: "@grupoCiencias",
    link: "/ciclos/6",
  },
];

const SeccionCiclos = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1200px)");
  const numColumns = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingBottom: { xs: "10px", lg: "50px" },
        paddingTop: { xs: "10px", lg: "50px" },
      }}
    >
      <Typography
        align="center"
        fontSize="38px"
        fontWeight="700"
        sx={{
          fontSize: { xs: "28px", lg: "38px" },
          marginBottom: { xs: "5px", md: "25px" },
        }}
      >
        Nuestros Ciclos
      </Typography>

      <ImageList
        sx={{
          width: "100%",

          height: { xs: 450, md: 600 },
        }}
        cols={numColumns}
        gap={20}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Typography component={Link} to={item.link}>
              <img
                width="100%"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default SeccionCiclos;

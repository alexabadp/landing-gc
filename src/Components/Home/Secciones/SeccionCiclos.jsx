import { Link } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container, Typography, useMediaQuery } from "@mui/material";

const itemData = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FANUAL%20UNMSM.webp?alt=media&token=4c8251a2-9590-4335-bc4e-eab76d23198d",
    title: "Ciclo Anual San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FREPASO%20UNMSM.webp?alt=media&token=1ddb7dc8-d66b-431e-a6c4-b7e094090881",
    title: "Ciclo Repaso San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/2",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FSEMESTRAL%20ABC.webp?alt=media&token=f1a858f6-6095-4837-9ec0-89e39bafa848",
    title: "Ciclo Semestral San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/3",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FSEMESTRAL%20BASICO%20UNI.webp?alt=media&token=f77c7277-4eef-45a9-9163-3381619a4803",
    title: "Ciclo Semestral UNI",
    author: "@grupoCiencias",
    link: "/ciclos/4",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FSEMESTRAL%20DE.webp?alt=media&token=578e6e48-db31-4048-bfe4-f5bed245670c",
    title: "Ciclo Semestral San Marcos II",
    author: "@grupoCiencias",
    link: "/ciclos/5",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FSEMESTRAL%20INTENSIVO%20UNI.webp?alt=media&token=8c467bea-c702-4c24-a238-532cd88cfb7f",
    title: "Ciclo Semestral UNI",
    author: "@grupoCiencias",
    link: "/ciclos/6",
  },
  // {
  //   img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FANUAL%20UNMSM.webp?alt=media&token=4c8251a2-9590-4335-bc4e-eab76d23198d",
  //   title: "Ciclo Repaso San Marcos",
  //   author: "@grupoCiencias",
  //   link: "/ciclos/7",
  // },
  // {
  //   img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FREPASO%20UNMSM.webp?alt=media&token=1ddb7dc8-d66b-431e-a6c4-b7e094090881",
  //   title: "Ciclo Semestral San Marcos",
  //   author: "@grupoCiencias",
  //   link: "/ciclos/8",
  // },
  // {
  //   img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2Fwebp%2FSEMESTRAL%20ABC.webp?alt=media&token=f1a858f6-6095-4837-9ec0-89e39bafa848",
  //   title: "Ciclo Semestral UNI",
  //   author: "@grupoCiencias",
  //   link: "/ciclos/9",
  // },
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

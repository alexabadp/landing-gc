import { Link } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container, Typography, useMediaQuery } from "@mui/material";

const itemData = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Fverano%20UNMSM.webp?alt=media&token=ee45b6e5-5a83-4870-b008-3cc32e666942&_gl=1*y39pac*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjAwOTEuMC4wLjA.",
    title: "Ciclo Verano San Marcos",
    author: "@grupoCiencias",
    link: "/ciclos/1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Fverano%20UNI.webp?alt=media&token=a4434f5b-f6bc-4a0f-bbf1-b8f6aaad2894&_gl=1*113yub0*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjAwODkuMC4wLjA.",
    title: "Ciclo Verano UNI",
    author: "@grupoCiencias",
    link: "/ciclos/2",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Frepaso%20san%20marcos.webp?alt=media&token=4a639e5a-e309-41e2-9fc0-b09bb781d302&_gl=1*1b3m4s3*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjAwNjcuMC4wLjA.",
    title: "Ciclo Repaso UNMSM",
    author: "@grupoCiencias",
    link: "/ciclos/3",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Frepaso%20uni.webp?alt=media&token=65484ab5-c706-4fed-bcbd-eba109b972ce&_gl=1*1t1ffnd*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjA1ODkuMC4wLjA.",
    title: "Ciclo Repaso UNI",
    author: "@grupoCiencias",
    link: "/ciclos/4",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2FSEMESTRAL%20por%20%C3%A1reas.webp?alt=media&token=bd41e378-295d-4b39-9678-3f06b736e47a&_gl=1*1ojoqtv*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjAwNTguMC4wLjA.",
    title: "Ciclo SEMESTRAL UNMSM",
    author: "@grupoCiencias",
    link: "/ciclos/5",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2FSEMESTRAL%20basico%20UNI.webp?alt=media&token=bd25e837-709f-4abd-99a7-e9b1fcaae474&_gl=1*t45bak*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjA3MDguMC4wLjA.",
    title: "Ciclo SEMESTRAL BASICO UNI",
    author: "@grupoCiencias",
    link: "/ciclos/6",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Fsemestral%20intensivo%20uni.webp?alt=media&token=def6c9bd-30dd-4a67-83eb-6e477332e300&_gl=1*1c2neom*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjA4MDAuMC4wLjA.",
    title: "Ciclo SEMESTRAL INTENSIVO UNI",
    author: "@grupoCiencias",
    link: "/ciclos/7",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Fanual%20UNMSM.webp?alt=media&token=cd2dc17d-13ab-40e3-aec0-9bda271b8c8d&_gl=1*7iobv0*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjA3MzcuMC4wLjA.",
    title: "Ciclo ANUAL UNMSM",
    author: "@grupoCiencias",
    link: "/ciclos/8",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FCiclos%2FNuevas%20imagenes%2Fsemianual%20ABC.webp?alt=media&token=21b5c7fa-5090-4311-bff9-1c58e9b5c9a3&_gl=1*16chp4h*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU1OTc4NS4yMC4xLjE2ODU1NjA4NDguMC4wLjA.",
    title: "Ciclo ANUAL UNMSM",
    author: "@grupoCiencias",
    link: "/ciclos/9",
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
              {/* <ImageListItemBar
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
              /> */}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default SeccionCiclos;

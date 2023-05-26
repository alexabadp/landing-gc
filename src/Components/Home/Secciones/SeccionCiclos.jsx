import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container, Typography, useMediaQuery } from "@mui/material";

import anualSM from "../../../Assets/Images/ANUAL UNMSM.png";
import repasoSM from "../../../Assets/Images/REPASO UNMSM.png";
import semestralSM from "../../../Assets/Images/SEMESTRAL ABC.png";
import semestralUNI from "../../../Assets/Images/SEMESTRAL BASICO UNI.png";
import semestralSM2 from "../../../Assets/Images/SEMESTRAL DE.png";
import semestralIUNI from "../../../Assets/Images/SEMESTRAL INTENSIVO UNI.png";

const itemData = [
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    img: anualSM,
    title: "Ciclo Anual San Marcos",
    author: "@grupoCiencias",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: repasoSM,
    title: "Ciclo Repaso San Marcos",
    author: "@grupoCiencias",
  },
  {
    img: semestralSM,
    title: "Ciclo Semestral San Marcos",
    author: "@grupoCiencias",
  },
  {
    img: semestralUNI,
    title: "Ciclo Semestral UNI",
    author: "@grupoCiencias",
    cols: 2,
  },
  {
    img: semestralSM2,
    title: "Ciclo Semestral San Marcos II",
    author: "@grupoCiencias",
    cols: 2,
  },
  {
    img: semestralIUNI,
    title: "Ciclo Semestral UNI",
    author: "@grupoCiencias",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: repasoSM,
    title: "Ciclo Repaso San Marcos",
    author: "@grupoCiencias",
  },
  {
    img: semestralSM,
    title: "Ciclo Semestral San Marcos",
    author: "@grupoCiencias",
  },
  {
    img: semestralUNI,
    title: "Ciclo Semestral UNI",
    author: "@grupoCiencias",
    rows: 2,
    cols: 2,
  },
  {
    img: semestralSM2,
    title: "Ciclo Semestral San Marcos II",
    author: "@grupoCiencias",
  },
  {
    img: semestralIUNI,
    title: "Ciclo Semestral UNI",
    author: "@grupoCiencias",
  },
  {
    img: repasoSM,
    title: "Ciclo Repaso San Marcos",
    author: "@grupoCiencias",
    cols: 2,
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
          height: 600,
        }}
        cols={numColumns}
        gap={20}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
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
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default SeccionCiclos;

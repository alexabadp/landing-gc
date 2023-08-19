import { Link } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography, useMediaQuery } from "@mui/material";
import style from "./SeccionCiclos.module.css";
import { dataCiclos } from "./dataCiclos";

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
        Nuestros ciclos
      </Typography>

      <ImageList
        sx={{
          width: "100%",
          height: { xs: 450, md: 600 },
        }}
        cols={numColumns}
        gap={20}
        className={style.videoContainer}
      >
        {dataCiclos.map((item) => (
          <ImageListItem key={item.img}>
            <Typography component={Link} to={item.link}>
              <img
                width="100%"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "10px" }}
              />
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default SeccionCiclos;

import ReactPlayer from "react-player";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import style from "./SeccionCachimbos.module.css";
import { dataCachimbos } from "./dataCachimbos";

const SeccionCachimbos = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1200px)");
  const numColumns = isSmallScreen ? 1 : isMediumScreen ? 2 : 2;
  const sizeGap = isSmallScreen ? 15 : isMediumScreen ? 35 : 30;

  return (
    <Box
      sx={{
        background: "rgba(231, 0, 49, 0.08)",
      }}
    >
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
          Nuestros Cachimbos
        </Typography>
        <ImageList
          sx={{
            overflowY: "hidden",
            width: "100%",
            height: { xs: "780px", md: "850px" },
          }}
          cols={numColumns}
          gap={sizeGap}
        >
          {dataCachimbos.map((item) => (
            <ImageListItem key={item.img} className={style.videoContainer}>
              <ReactPlayer
                url={item.img}
                // className="react-player"
                width="100%"
                height="100%"
                controls
                muted={true}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1, // Ocultar el logotipo de YouTube
                      showinfo: 1, // Ocultar la información del video}
                    },
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default SeccionCachimbos;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, useMediaQuery } from "@mui/material";

const Heroslider = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1200px)");
  const arrowDots = isSmallScreen ? true : isMediumScreen ? false : false;

  const dotStyles = {
    display: "inline-block",
    width: "20px" /* Ancho de la línea */,
    height: "5px" /* Alto de la línea */,
    borderRadius: "2px",
    border: "1px solid gray",
    backgroundColor: "#fff" /* Color de la línea */,
    margin: "5px 5px" /* Espacio entre las líneas */,
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "black" /* Color de la línea activa */,
  };

  // eslint-disable-next-line react/prop-types
  const CustomDot = ({ onClick, active }) => (
    <span
      onClick={() => onClick()}
      style={active ? activeDotStyles : dotStyles}
    />
  );

  return (
    // <Box sx={{ marginTop: { xs: "50px", md: "20px" } }}>
    <Box sx={{ marginTop: { xs: "64px", md: "64px" } }}>
      <Carousel
        additionalTransfrom={0}
        customTransition="transform 500ms ease-in-out" // Transición personalizada de 500ms
        arrows={!arrowDots}
        autoPlay
        autoPlaySpeed={6000}
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
          },
          desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={arrowDots}
        customDot={<CustomDot />}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          //   height="100vh"
          //   maxHeight="calc(100vh - 50px)"
          maxHeight="calc(100vh)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2Fportada-1%20(1).webp?alt=media&token=59bd2ddc-f750-4d47-bd91-8567bda87049"
            alt="Descripción de la imagen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 50px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2Fportada-2%20(1).webp?alt=media&token=13b2244b-bcdf-4c65-bf7a-7a109ebfcc9e"
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 50px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2Fcristhian-y-gerald.webp?alt=media&token=50252aca-2550-4e08-84d9-0c87e29b4d09"
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 50px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2FPORTADA%204.webp?alt=media&token=3974055f-0715-49fc-97ab-a4d37904e4d4&_gl=1*25aztu*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4xLjE2ODU1Njc3MzUuMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 50px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2FPORTADA%205.webp?alt=media&token=636750d1-2f31-4324-a286-3b2013950909&_gl=1*16ju6jp*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4xLjE2ODU1Njc3NTIuMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 50px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2Fportada-sedes_nueva.webp?alt=media&token=dc1a3037-bc25-4226-a5dd-dec44cc7603a"
            // src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2Fportada%206.webp?alt=media&token=c75375f9-2594-41e2-aa61-06c0fe2853d9&_gl=1*8htbci*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4xLjE2ODU1Njc3NjguMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "90%", objectFit: "cover" }}
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default Heroslider;

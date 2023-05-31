import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Button, useMediaQuery } from "@mui/material";

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

  const CustomDot = ({ onClick, active }) => (
    <span
      onClick={() => onClick()}
      style={active ? activeDotStyles : dotStyles}
    />
  );

  const tamaño = "1000px";

  return (
    // <Box sx={{ marginTop: { xs: "50px", md: "20px" } }}>
    <Box sx={{ marginTop: { xs: "50px", md: "65px" } }}>
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
        {/* <Box >
         
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Fwebp%2Fportada_1.webp?alt=media&token=2ad61a4e-2a1d-4062-aaa0-ac8ca28a8331"
            alt=""
          />
        </Box> */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          // height="100vh"
          maxHeight="calc(100vh)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2FPORTADA%201.webp?alt=media&token=bcd1bf9d-c1db-4ed5-a1e2-5c931eed4f60&_gl=1*degbzb*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4wLjE2ODU1Njc2MzguMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 60px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2FPORTADA%202.webp?alt=media&token=5c32bd3f-3ca0-4da0-8553-5f265f0508db&_gl=1*ix49q5*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4xLjE2ODU1Njc2ODguMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 60px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2FPORTADA%203.webp?alt=media&token=1b017194-41ab-44ba-beb8-7c955154a579&_gl=1*1h3183a*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4xLjE2ODU1Njc3MTguMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh - 60px)"
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
          maxHeight="calc(100vh - 60px)"
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
          maxHeight="calc(100vh - 60px)"
          overflow="hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2Fportada%206.webp?alt=media&token=c75375f9-2594-41e2-aa61-06c0fe2853d9&_gl=1*8htbci*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2NzYzOC4yMi4xLjE2ODU1Njc3NjguMC4wLjA."
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* <Box sx={{ maxHeight: "calc(100vh - 0px)", height: "100%" }}>
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Fwebp%2Fportada_2.webp?alt=media&token=87790123-c5ab-4081-9ec9-8591598f7583"
            alt=""
          />
        </Box>
        <Box sx={{ maxHeight: "calc(100vh - 0px)", height: "100%" }}>
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Fwebp%2Fportada_3.webp?alt=media&token=68883d8a-8fce-4477-99f3-c8dbdfe8673e"
            alt=""
          />
        </Box>
        <Box sx={{ maxHeight: "calc(100vh - 0px)", height: "100%" }}>
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Fwebp%2Fportada_4.webp?alt=media&token=8f0f51d2-1fce-42de-996e-bd47ce059e34"
            alt=""
          />
        </Box>
        <Box sx={{ maxHeight: "calc(100vh - 0px)", height: "100%" }}>
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Fwebp%2FPORTADA%20YT.webp?alt=media&token=3e13d6e3-9061-4cb8-87fc-6aebaa50797a&_gl=1*kyvmn1*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTQyNzI3My4xNy4xLjE2ODU0Mjg3NjUuMC4wLjA."
            alt=""
          />
        </Box>
        <Box sx={{ maxHeight: "calc(100vh - 0px)", height: "100%" }}>
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Fwebp%2Fportada_6.webp?alt=media&token=483ee553-677a-46ec-95a5-4bb0205d480a"
            alt=""
          />
        </Box> */}
      </Carousel>
    </Box>
  );
};

export default Heroslider;

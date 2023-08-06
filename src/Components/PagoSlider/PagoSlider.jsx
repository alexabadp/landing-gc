import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography } from "@mui/material";

const PagoSlider = () => {
  const bbva =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fbbva.webp?alt=media&token=750de4b4-b22b-4ccb-97ec-9fb2e44d773c";
  const bcp =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fbcp.webp?alt=media&token=ca75864a-8d03-4a37-8fee-319b01d4608d";
  const scotia =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fscotia.webp?alt=media&token=1cccc93d-6c25-4d34-8703-5c064f3c7414";
  const yape =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fyape.webp?alt=media&token=6947cd76-50fb-419e-a31e-204ec4c69967";

  return (
    <Box sx={{ margin: { xs: "50px 0", md: "20px 0" } }}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
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
            items: 4,
            // items: 1,
            // partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
            // items: 1,
            // partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
            // items: 1,
            // partialVisibilityGutter: 30,
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
        showDots={true}
        // customDot={<CustomDot />}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Box
          sx={{
            maxHeight: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 20px",
            background: "#f8faff",
          }}
        >
          <Typography textAlign="center" fontSize="20px" fontWeight="700">
            Paga con Tarjeta en un agente o tu aplicativo
          </Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 20px",
            background: "#f8faff",
          }}
        >
          <Typography fontSize="20px" fontWeight="700">
            Medios de Pago
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "70px 50px",
            background: "#f8faff",
            height: "auto",
          }}
        >
          <Box maxWidth="130px" width="100%">
            <img width="100%" src={bbva} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "70px 50px",
            background: "#f8faff",
          }}
        >
          <Box maxWidth="130px" width="100%">
            <img width="100%" height="100%" src={bcp} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            maxHeight: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f8faff",
          }}
        >
          <Box maxWidth="80px" width="100%">
            <img width="100%" height="100%" src={yape} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            maxHeight: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f8faff",
          }}
        >
          <Box maxWidth="200px" width="100%">
            <img width="100%" height="100%" src={scotia} alt="" />
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};

export default PagoSlider;

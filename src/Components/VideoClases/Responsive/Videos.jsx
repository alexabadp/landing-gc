import { Box, Container, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";

import { RazonamientoMat } from "../../../Assets/Courses-Slide/Razonamiento-mat";

const Videos = () => {
  const bbva =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fbbva.webp?alt=media&token=750de4b4-b22b-4ccb-97ec-9fb2e44d773c";
  const bcp =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fbcp.webp?alt=media&token=ca75864a-8d03-4a37-8fee-319b01d4608d";
  const scotia =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fscotia.webp?alt=media&token=1cccc93d-6c25-4d34-8703-5c064f3c7414";
  const yape =
    "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FPagos%2Fwebp%2Fyape.webp?alt=media&token=6947cd76-50fb-419e-a31e-204ec4c69967";

  return (
    <>
      <Box
        sx={{
          background: "#000",
          padding: "10px 20px",
          height: "500px",
          border: " 2px solid yellow",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 0,

          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ padding: "0px 10px" }}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            // autoPlay
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
            showDots={false}
            // customDot={<CustomDot />}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {RazonamientoMat.map((e) => (
              <Box
                sx={{
                  maxHeight: "350px",
                  maxWidth: "400px",
                  height: "100%",
                  width: "100%",
                  padding: "20px 0px 20px 15px",

                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    maxHeight: "450px",
                    height: "100%",
                    maxWidth: "450px",
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease",

                    zIndex: 2,
                  },
                }}
              >
                <Box width="100%" sx={{}}>
                  <img width="100%" height="100%" src={e.image} alt="" />
                </Box>
              </Box>
            ))}
          </Carousel>
        </Container>
      </Box>
    </>
  );
};

export default Videos;

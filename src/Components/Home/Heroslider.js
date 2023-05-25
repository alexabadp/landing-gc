// import HeroSlider, { Nav, Overlay, Slide } from "hero-slider";
// import "./Heroslider.css";
// import Wrapper from "./Wrapper";
// import { Box, Container } from "@mui/material";

// const Heroslider = () => {
//   return (
//     <HeroSlider
//       // height={"880px"}
//       autoplay
//       controller={{
//         initialSlide: 1,
//         slidingDuration: 500,
//         slidingDelay: 30,
//         onSliding: (nextSlide) =>
//           console.debug("onSliding(nextSlide): ", nextSlide),
//         onBeforeSliding: (previousSlide, nextSlide) =>
//           console.debug(
//             "onBeforeSliding(previousSlide, nextSlide): ",
//             previousSlide,
//             nextSlide
//           ),
//         onAfterSliding: (nextSlide) =>
//           console.debug("onAfterSliding(nextSlide): ", nextSlide),
//       }}
//     >
//       <Overlay>
//         <Wrapper></Wrapper>
//       </Overlay>

//       <Slide
//         label="Giau Pass - Italy"
//         background={{
//           // backgroundImageSrc: require(`../Home/Images/Slider/portada_1.png`),
//           backgroundImageSrc:
//             "https://firebasestorage.googleapis.com/v0/b/landing-e2e41.appspot.com/o/portada_1.png?alt=media&token=7715ef11-78cf-4131-bec7-c3d7c2a0ed19",
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center center",
//         }}
//       />

//       <Slide
//         label="Bogliasco - Italy"
//         background={{
//           backgroundImageSrc: require(`../Home/Images/Slider/portada_2.png`),
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center center",
//         }}
//       />

//       <Slide
//         label="County Clare - Ireland"
//         background={{
//           backgroundImageSrc: require(`../Home/Images/Slider/portada_3.png`),
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center center",
//         }}
//       />

//       <Slide
//         label="Crater Rock, OR - United States"
//         background={{
//           backgroundImageSrc: require(`../Home/Images/Slider/portada_4.png`),
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center center",
//         }}
//       />

//       <Slide
//         label="Crater Rock, OR - United States"
//         background={{
//           backgroundImageSrc: require(`../Home/Images/Slider/portada_6.png`),
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center center",
//         }}
//       />

//       <Slide
//         label="Crater Rock, OR - United States"
//         background={{
//           backgroundImageSrc: require(`../Home/Images/Slider/portada_5.png`),
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center center",
//         }}
//       />

//       <Nav color="red" />
//     </HeroSlider>
//   );
// };

// export default Heroslider;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box } from "@mui/material";

import portada1 from "../Home/Images/Slider/portada_1.png";
import portada2 from "../Home/Images/Slider/portada_2.png";
import portada3 from "../Home/Images/Slider/portada_3.png";
import portada4 from "../Home/Images/Slider/portada_4.png";
import portada5 from "../Home/Images/Slider/portada_5.png";
import portada6 from "../Home/Images/Slider/portada_6.png";

const Heroslider = () => {
  return (
    <Box sx={{ marginTop: { xs: "50px", md: "20px" } }}>
      <Carousel
        additionalTransfrom={0}
        arrows
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
            // items: 3,
            items: 1,
            // partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: { max: 1024, min: 800 },
            // items: 3,
            items: 1,
            // partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: { max: 800, min: 464 },
            // items: 2,
            items: 1,
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
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div>
          <img width="100%" height="100%" src={portada1} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada2} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada4} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada5} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada6} alt="" />
        </div>
      </Carousel>
    </Box>
  );
};

export default Heroslider;

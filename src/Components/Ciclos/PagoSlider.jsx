import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box } from "@mui/material";

import portada1 from "./Images/pagos/Medios de pago.PNG";
import portada2 from "./Images/pagos/2.PNG";
import portada3 from "./Images/pagos/3.PNG";
import portada4 from "./Images/pagos/4.PNG";
import portada5 from "./Images/pagos/5.PNG";
import portada6 from "./Images/pagos/6.PNG";
const PagoSlider = () => {
  return (
    <Box sx={{ margin: { xs: "50px 0", md: "20px 0" } }}>
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
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
        <div>
          <img width="100%" height="100%" src={portada3} alt="" />
        </div>
      </Carousel>
    </Box>
  );
};

export default PagoSlider;

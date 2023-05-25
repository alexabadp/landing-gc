import HeroSlider, { Nav, Overlay, Slide } from "hero-slider";
import "./Heroslider.css";
import Wrapper from "./Wrapper";

const Heroslider = () => {
  return (
    <HeroSlider
      // height={"880px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 30,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper></Wrapper>
      </Overlay>

      <Slide
        label="Giau Pass - Italy"
        background={{
          // backgroundImageSrc: require(`../Home/Images/Slider/portada_1.png`),
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/landing-e2e41.appspot.com/o/portada_1.png?alt=media&token=7715ef11-78cf-4131-bec7-c3d7c2a0ed19",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />

      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: require(`../Home/Images/Slider/portada_2.png`),
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />

      <Slide
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: require(`../Home/Images/Slider/portada_3.png`),
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />

      <Slide
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: require(`../Home/Images/Slider/portada_4.png`),
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />

      <Slide
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: require(`../Home/Images/Slider/portada_6.png`),
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />

      <Slide
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: require(`../Home/Images/Slider/portada_5.png`),
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />

      <Nav color="red" />
    </HeroSlider>
  );
};

export default Heroslider;

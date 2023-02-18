import HeroSlider, { Overlay, Slide, MenuNav, Nav } from "hero-slider";
import Wrapper from "./Wrapper";
import "./Heroslider.css";
import { Button, IconButton } from "@mui/material";
import { FaAccessibleIcon } from "react-icons/fa";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const image1 = "http://localhost:3000/slides/image-1.png";

// const image2 = "http://localhost:3000/slides/image-2.png";
// const image3 = "http://localhost:3000//slides/image-3.png";
// const image4 = "http://localhost:3000/slides/image-4.png";
// const image5 = "http://localhost:3000/slides/image-5.png";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#e70031",
    borderColor: "#e70031",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

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
        <Wrapper>
          <BootstrapButton variant="contained" color="success">
            <FaAccessibleIcon />
            &nbsp;Revisa nuestros Ciclos
          </BootstrapButton>
          {/* <Title>Basic Setup</Title>
          <Subtitle>Testing purposes only</Subtitle> */}
        </Wrapper>
      </Overlay>

      <Slide
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: require(`../Home/Images/Slider/portada_1.png`),
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

      <Nav color="red" />
      {/* <MenuNav /> */}
    </HeroSlider>
  );
};

export default Heroslider;

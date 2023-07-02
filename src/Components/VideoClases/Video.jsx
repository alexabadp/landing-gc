import { useEffect, useState } from "react";
import "./VideoClases.css";

const Video = ({ image, botonClick, imageVisible }) => {
  const [hideImage, setHideImage] = useState(false);

  useEffect(() => {
    imageVisible === image ? setHideImage(true) : setHideImage(false);
  }, [image, imageVisible]);

  const handleClick = () => {
    setHideImage(!hideImage);
    !hideImage ? botonClick(image) : botonClick("");
    // if (hideImage) {
    //     window.scrollTo({ top: 100 });
    //   }
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        className="video"
      >
        <img width="100%" src={image} alt=""></img>
      </button>
    </div>
  );
};

export default Video;

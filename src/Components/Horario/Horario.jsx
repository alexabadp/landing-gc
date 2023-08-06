import { useState } from "react";
// import { Modal } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsX,
} from "react-icons/bs";

import "./Horario.css";
import { Box, Button, Container } from "@mui/material";

const Horario = (props) => {
  const schedule_Images = props.ciclo.schedule_Image;
  const images_cant = schedule_Images.length;
  const image_name = schedule_Images[0].url;
  let [imageNumber, setImageNumber] = useState(1);
  var file_name =
    images_cant === 1
      ? image_name
      : image_name.substring(0, image_name.indexOf("_")) + "_" + imageNumber;

  const removeNumberImage = () => {
    if (imageNumber > 1) {
      setImageNumber(imageNumber - 1);
    }
  };

  const addNumberImage = () => {
    if (imageNumber < images_cant) {
      setImageNumber(imageNumber + 1);
    }
  };

  const imagePath = `../src/Components/Horario/Images/Schedule/${file_name}.png`;

  return (
    <>
      <div>
        <Modal
          open={props.show}
          //   onClose={() => setOpen(false)}
          onClose={props.close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              margin: "20px auto",
              padding: "20px 20px",
              width: { xs: "350px", sm: "600px", md: "800px", lg: "1000px" },
              bgcolor: "background.paper",
              borderRadius: "10px",
              //   boxShadow: 24,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <BsX
                // onClick={() => setOpen(false)}
                onClick={props.close}
                size={"2.5rem"}
                style={{ cursor: "pointer" }}
              />
            </Box>
            {images_cant > 1 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "0 0 10px 0",
                  }}
                >
                  <BsFillArrowLeftCircleFill
                    size={"2.5rem"}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                    onClick={() => {
                      removeNumberImage();
                    }}
                  />
                  <BsFillArrowRightCircleFill
                    size={"2.5rem"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      addNumberImage();
                    }}
                  />
                </Box>
              </>
            )}
            <Box sx={{ display: { xs: "block", sm: "block" } }}>
              <img width="100%" src={imagePath} alt="Imagen de modal" />
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Horario;

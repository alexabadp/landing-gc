import { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./Horario.css";
import { Box, Container } from "@mui/material";

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

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
        className="my-schedule-modal"
        style={{
          marginTop: "50px",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>

        <Box>
          <Modal.Body
            style={{
              marginTop: "0px",
              paddingTop: "0px",
            }}
          >
            {images_cant > 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
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
            )}
            <Box>
              <img
                src={require(`../Ciclos/Images/Schedule/${file_name}.png`)}
                alt=""
                // width={"980px"}
                width="100%"
                className="img-responsive"
              />
            </Box>
          </Modal.Body>
        </Box>
      </Modal>
    </>
  );
};

export default Horario;

// import { useEffect, useState } from "react";
// import comunicado from "../../Assets/Images/comunicado.png";

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const Horario = () => {
//   const [open, setOpen] = useState(true);

//   return (
//     <div>
//       <Button
//         variant="primary"
//         sx={{ display: "none" }}
//         onClick={() => setOpen(true)}
//       >
//         Open modal
//       </Button>
//       <Modal
//         open={open}
//         onClose={() => setOpen(false)}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",

//             width: { xs: "300px", sm: "600px", md: "800px", lg: "1000px" },
//             bgcolor: "background.paper",
//             border: "2px solid #000",
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <img width="100%" src={comunicado} alt="Imagen de modal" />
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Horario;

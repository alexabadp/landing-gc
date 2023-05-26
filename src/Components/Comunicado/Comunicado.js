// import { useState } from "react";
// import { Button, Modal, Image } from "react-bootstrap";
// import "./Comunicado.css";
// import comunicado from "../../Assets/Images/comunicado.png";

// function Comunicado() {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <Button
//         variant="primary"
//         onClick={() => setShow(true)}
//         style={{ display: "none" }}
//       >
//         Custom Width Modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         dialogClassName="modal-90w"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         size="xl"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Image
//             src={comunicado}
//             className="navbar-logo"
//             style={{ width: "100%" }}
//           />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default Comunicado;

import { useEffect, useState } from "react";
import comunicado from "../../Assets/Images/comunicado.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const Comunicado = () => {
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   setOpen(true);
  // }, []);

  return (
    <div>
      <Button
        variant="primary"
        sx={{ display: "none" }}
        onClick={() => setOpen(true)}
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            // width: 400,
            width: { xs: "300px", sm: "600px", md: "800px", lg: "1000px" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img width="100%" src={comunicado} alt="Imagen de modal" />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};

export default Comunicado;

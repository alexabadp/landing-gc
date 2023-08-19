import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const Comunicado = () => {
  const [open, setOpen] = useState(true);

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
            borderRadius: "20px",
            overflow: "hidden",
            width: { xs: "350px", sm: "600px", md: "800px", lg: "1000px" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,

            // p: 4,
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              width="100%"
              src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FModal%2Fwebp%2FcomunicadoXL.webp?alt=media&token=d7a0162d-2922-4702-a666-9322b9fd890d"
              alt="Imagen de modal"
              style={{ borderRadius: "20px", overflow: "hidden" }}
            />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <img
              width="100%"
              src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FModal%2Fwebp%2FcomunicadoXS.webp?alt=media&token=6224007d-a6fc-444b-836a-f3960763b9e4"
              alt="Imagen de modal"
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Comunicado;

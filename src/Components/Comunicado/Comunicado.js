import { useEffect, useState } from "react";
import comunicado from "../../Assets/Images/comunicado.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

            width: { xs: "300px", sm: "600px", md: "800px", lg: "1000px" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img width="100%" src={comunicado} alt="Imagen de modal" />
        </Box>
      </Modal>
    </div>
  );
};

export default Comunicado;

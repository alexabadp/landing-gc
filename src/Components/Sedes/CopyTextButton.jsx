import { Button, Snackbar, Typography } from "@mui/material";

const CopyTextButton = ({ text, children }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      // Mostrar una notificación de éxito
      console.log("Texto copiado");
    });
  };

  return (
    <>
      <Button
        style={{
          padding: "0px",
          maxWidth: "400px",
          width: "100%",
        }}
        onClick={handleCopyClick}
        variant="text"
        color="primary"
      >
        {children}
      </Button>
      <Snackbar open={false} message="Texto copiado" />
    </>
  );
};

export default CopyTextButton;

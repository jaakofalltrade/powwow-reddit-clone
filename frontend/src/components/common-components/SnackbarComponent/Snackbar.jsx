import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = props => {
  return <MuiAlert elevation={6} {...props} />;
};

const SnackbarCustom = ({
  message,
  handleOpen,
  handleClose,
  severity,
  hideDuration
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={handleOpen}
      onClose={handleClose}
      autoHideDuration={hideDuration}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCustom;

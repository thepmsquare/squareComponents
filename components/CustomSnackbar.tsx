import React, { Dispatch } from "react";

import { Alert, Snackbar } from "@mui/material";

import CustomSnackbarStateType from "../types/CustomSnackbarStateType";

const CustomSnackbar = (props: {
  snackbarState: CustomSnackbarStateType;
  changeSnackbarState: Dispatch<CustomSnackbarStateType>;
  autoHideDuration?: number;
}) => {
  const handleSnackbarClose = () => {
    props.changeSnackbarState({
      isOpen: false,
      message: "",
      severity: "error",
    });
  };

  return (
    <Snackbar
      open={props.snackbarState.isOpen}
      autoHideDuration={props.autoHideDuration ?? 6000}
      onClose={handleSnackbarClose}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={props.snackbarState.severity}
        sx={{ width: "100%" }}
      >
        {props.snackbarState.message}
      </Alert>
    </Snackbar>
  );
};
export default CustomSnackbar;

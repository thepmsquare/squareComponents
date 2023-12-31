import CustomSnackbar from "../components/CustomSnackbar";

export default {
  title: "CustomSnackbar",
  component: CustomSnackbar,

  args: {
    snackbarState: {
      isOpen: true,
      message: "CustomSnackbar",
      severity: "info",
    },
  },
};

export const main = {};

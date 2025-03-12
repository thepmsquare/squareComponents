import AlertDialog from "../components/AlertDialog";

export default {
  title: "AlertDialog",
  component: AlertDialog,
  args: {
    open: true,
    handleClose: () => {},
    title: "confirm?",
    handleSuccess: () => {},
    confirmButtonColor: "error",
    text: "description",
    isLoading: false
  },
};

export const main = {};
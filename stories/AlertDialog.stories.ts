import AlertDialog from "../components/AlertDialog";

export default {
  title: "AlertDialog",
  component: AlertDialog,
  args: {
    open: true,
    handleClose: () => void,
    title: "confirm?",
    handleSuccess: () => void,
    confirmButtonColor: "error",
    text: "description",
    isLoading: false
  },
};

export const main = {};
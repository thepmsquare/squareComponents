import AlertDialog from "../components/AlertDialog";

export default {
  title: "AlertDialog",
  component: AlertDialog,
  args: {
    open: true,
    title: "confirm?",
    confirmButtonColor: "error",
    text: "description",
    isLoading: false
  },
};

export const main = {};
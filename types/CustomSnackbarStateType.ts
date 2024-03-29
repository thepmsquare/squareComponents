import { AlertColor } from "@mui/material/Alert";

interface CustomSnackbarStateType {
  isOpen: boolean;
  message: string;
  severity: AlertColor;
}
export default CustomSnackbarStateType;

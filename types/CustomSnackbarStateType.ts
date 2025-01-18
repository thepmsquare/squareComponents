import { z } from "zod";

import { AlertColor } from "@mui/material/Alert";

const CustomSnackbarStateTypeZ = z.object({
  isOpen: z.boolean(),
  message: z.string(),
  severity: z.custom<AlertColor>(),
});

type CustomSnackbarStateType = z.infer<typeof CustomSnackbarStateTypeZ>;

export default CustomSnackbarStateType;
export { CustomSnackbarStateTypeZ, CustomSnackbarStateType };

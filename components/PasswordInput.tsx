import React, { ChangeEventHandler, useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  InputProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

interface PasswordInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  uniqueIdForARIA: string;
  variant?: TextFieldProps["variant"];
  others?: Omit<
    TextFieldProps,
    | "value"
    | "onChange"
    | "label"
    | "id"
    | "variant"
    | "type"
    | "InputProps"
    | "fullWidth"
    | "InputLabelProps"
  >;
  fullWidth?: boolean;
  autoComplete?: string;
}

const PasswordInput = (props: PasswordInputProps) => {
  const {
    value,
    onChange,
    label,
    uniqueIdForARIA,
    variant = "standard",
    others,
    fullWidth = false,
    autoComplete = "current-password",
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const inputProps: Partial<InputProps> = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={toggleShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <TextField
      id={uniqueIdForARIA}
      label={label}
      variant={variant}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      InputProps={inputProps}
      fullWidth={fullWidth}
      {...others}
    />
  );
};

export default PasswordInput;

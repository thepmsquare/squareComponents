import React, { ChangeEvent } from "react";

import { TextField, TextFieldProps } from "@mui/material";

const USERNAME_REGEX = /^[a-z0-9._-]{2,20}$/;

interface UsernameInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  uniqueIdForARIA: string;
  variant?: TextFieldProps["variant"];
  others?: Omit<
    TextFieldProps,
    "value" | "onChange" | "label" | "id" | "variant" | "error" | "autoComplete"
  >;
  fullWidth?: boolean;
  autocomplete?: string;
}

const UsernameInput = (props: UsernameInputProps) => {
  const {
    value,
    onChange,
    label,
    uniqueIdForARIA,
    variant = "standard",
    others,
    autocomplete = "off",
    fullWidth = false,
  } = props;

  /**
   * Handles the change event from the input field.
   * It sanitizes the input value by:
   * - Converting to lowercase.
   * - Replacing spaces with hyphens.
   * - Removing any characters not allowed by USERNAME_REGEX.
   * - Limiting the length to 20 characters.
   * Finally, it calls the passed onChange prop with a synthetic event containing the sanitized value.
   * @param e - The input change event.
   */
  const handleSanitizedChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let sanitized = e.target.value
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9._-]/g, ""); // Remove invalid characters

    if (sanitized.length > 20) {
      sanitized = sanitized.substring(0, 20);
    }

    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: sanitized },
    } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    onChange(syntheticEvent);
  };

  const isValid = USERNAME_REGEX.test(value);
  const showError = !isValid && value.length > 2;

  return (
    <TextField
      id={uniqueIdForARIA}
      label={label}
      variant={variant}
      value={value}
      onChange={handleSanitizedChange}
      autoComplete={autocomplete}
      error={showError}
      helperText={
        showError
          ? "Username must be 2-20 characters and can only contain a-z, 0-9, '.', '_', '-'."
          : ""
      }
      fullWidth={fullWidth}
      {...others}
    />
  );
};

export default UsernameInput;

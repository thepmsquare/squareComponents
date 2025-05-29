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
}

const UsernameInput = (props: UsernameInputProps) => {
  const {
    value,
    onChange,
    label,
    uniqueIdForARIA,
    variant = "standard",
    others,
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

    // Enforce maximum length
    if (sanitized.length > 20) {
      // Truncate if longer than 20 characters.
      // No explicit return here to allow the onChange to be called with the truncated value.
      sanitized = sanitized.substring(0, 20);
    }

    // Create a synthetic event to pass to the parent onChange handler
    // This ensures the parent receives an event object with the sanitized value.
    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: sanitized },
    } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>; // Cast to the correct event type

    onChange(syntheticEvent); // Call the original onChange handler
  };

  // Validate the current input value against the regex
  const isValid = USERNAME_REGEX.test(value);
  // Determine if an error should be shown (invalid and not empty)
  const showError = !isValid && value.length > 0;

  return (
    <TextField
      id={uniqueIdForARIA} // Set the ID for accessibility and label association
      label={label} // Set the input label
      variant={variant} // Set the input style (standard, outlined, filled)
      value={value} // The current value of the input
      onChange={handleSanitizedChange} // Attach the sanitizing change handler
      autoComplete="off" // Disable browser autocomplete
      error={showError} // Show error state if invalid and not empty
      helperText={
        showError
          ? "Username must be 2-20 characters and can only contain a-z, 0-9, '.', '_', '-'."
          : ""
      } // Optional: Add helper text for errors
      fullWidth // Optional: Make the TextField take up the full width of its container
      {...others} // Spread any other props
    />
  );
};

export default UsernameInput;

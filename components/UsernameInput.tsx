import React, { ChangeEvent } from "react";

import {
  FilledInput,
  FormControl,
  FormControlOwnProps,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const USERNAME_REGEX = /^[a-z0-9._-]{2,20}$/;

const UsernameInput = (props: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  uniqueIdForARIA: string;
  variant?: FormControlOwnProps["variant"];
  others?: any;
}) => {
  const {
    value,
    onChange,
    label,
    uniqueIdForARIA,
    variant = "standard",
    others,
  } = props;

  const handleSanitizedChange = (e: ChangeEvent<HTMLInputElement>) => {
    let sanitized = e.target.value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9._-]/g, "");

    if (sanitized.length > 20) return;

    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: sanitized },
    } as ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

  const isValid = USERNAME_REGEX.test(value);

  const commonInputProps = {
    id: uniqueIdForARIA,
    value,
    onChange: handleSanitizedChange,
    autoComplete: "off",
    error: !isValid && value.length > 0,
    ...others,
  };

  const renderInput = () => {
    if (variant === "filled") return <FilledInput {...commonInputProps} />;
    if (variant === "outlined") return <OutlinedInput {...commonInputProps} />;
    return <Input {...commonInputProps} />;
  };

  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor={uniqueIdForARIA}>{label}</InputLabel>
      {renderInput()}
    </FormControl>
  );
};

export default UsernameInput;

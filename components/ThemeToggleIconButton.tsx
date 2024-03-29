import React from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  ButtonOwnProps,
  IconButton,
  IconButtonOwnProps,
  Tooltip,
} from "@mui/material";

const ThemeToggleIconButton = (props: {
  themeState: "dark" | "light";
  customChangeThemeState: (newThemeState: "dark" | "light") => void;
  color?: ButtonOwnProps["color"];
  size?: IconButtonOwnProps["size"];
}) => {
  return (
    <IconButton
      id="toggle-theme-button"
      size={props.size}
      color={props.color}
      onClick={() => props.customChangeThemeState(props.themeState)}
    >
      {props.themeState === "dark" ? (
        <Tooltip title="change to dark mode.">
          <LightModeIcon fontSize={props.size} />
        </Tooltip>
      ) : (
        <Tooltip title="change to light mode.">
          <DarkModeIcon fontSize={props.size} />
        </Tooltip>
      )}
    </IconButton>
  );
};
export default ThemeToggleIconButton;

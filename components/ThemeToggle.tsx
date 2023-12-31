import React, { useState, useRef } from "react";
import {
  Menu,
  MenuItem,
  Button,
  ListItemText,
  ListItemIcon,
  ButtonOwnProps,
  SvgIconOwnProps,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = (props: {
  themeState: "dark" | "light";
  customChangeThemeState: (newThemeState: "dark" | "light") => void;
  variant?: ButtonOwnProps["variant"];
  color?: ButtonOwnProps["color"];
  downArrowIcon?: boolean;
  modeIcons?: boolean;
  size?: ButtonOwnProps["size"];
  modeIconsSize?: SvgIconOwnProps["fontSize"];
  fullwidth?: boolean;
}) => {
  const [isThemeToggleMenuOpen, changeIsThemeToggleMenuOpen] = useState(false);
  const handleOpen = () => {
    changeIsThemeToggleMenuOpen(true);
  };
  const handleClose = () => {
    changeIsThemeToggleMenuOpen(false);
  };
  const changeThemeAndClose = (newTheme: "dark" | "light") => {
    props.customChangeThemeState(newTheme);
    handleClose();
  };
  const buttonRef = useRef<any>(null);
  return (
    <>
      <Button
        id="toggle-theme-button"
        aria-controls={isThemeToggleMenuOpen ? "toggle-theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isThemeToggleMenuOpen ? "true" : undefined}
        onClick={handleOpen}
        ref={buttonRef}
        endIcon={props.downArrowIcon && <KeyboardArrowDownIcon />}
        size={props.size}
        variant={props.variant}
        color={props.color}
      >
        change appearance
      </Button>

      <Menu
        id="toggle-theme-menu"
        anchorEl={buttonRef.current}
        open={isThemeToggleMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "toggle-theme-button",
        }}
      >
        <MenuItem
          onClick={() => changeThemeAndClose("dark")}
          selected={props.themeState === "dark"}
          sx={{
            width:
              buttonRef.current && props.fullwidth
                ? getComputedStyle(buttonRef.current).width
                : "",
          }}
        >
          {props.modeIcons && (
            <ListItemIcon>
              <DarkModeIcon fontSize={props.modeIconsSize} />
            </ListItemIcon>
          )}
          <ListItemText>dark mode</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => changeThemeAndClose("light")}
          selected={props.themeState === "light"}
          sx={{
            width:
              buttonRef.current && props.fullwidth
                ? getComputedStyle(buttonRef.current).width
                : "",
          }}
        >
          {props.modeIcons && (
            <ListItemIcon>
              <LightModeIcon fontSize={props.modeIconsSize} />
            </ListItemIcon>
          )}
          <ListItemText>light mode</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
export default ThemeToggle;

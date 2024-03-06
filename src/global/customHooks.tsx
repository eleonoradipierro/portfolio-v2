import { useContext } from "react";
import { PaletteContext, PaletteNewThemeContext, PaletteUpdateContext } from "./ThemeContext";

export const useTheme = () => {
  return useContext(PaletteContext);
};

export const useThemeUpdate = () => {
  return useContext(PaletteUpdateContext);
};

export const useNewTheme = () => {
  return useContext(PaletteNewThemeContext);
};

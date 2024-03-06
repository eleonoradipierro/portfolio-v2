import { useContext } from "react";
import { PaletteNewThemeContext } from "../context/ThemeContext";

export const useNewTheme = () => {
  return useContext(PaletteNewThemeContext);
};

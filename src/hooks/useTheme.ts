import { useContext } from "react";
import { PaletteContext } from "../context/ThemeContext";

export const useTheme = () => {
  return useContext(PaletteContext);
};

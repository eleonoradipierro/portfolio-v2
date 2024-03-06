import { useContext } from "react";
import { PaletteUpdateContext } from "../context/ThemeContext";

export const useThemeUpdate = () => {
  return useContext(PaletteUpdateContext);
};

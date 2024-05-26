import { useState, createContext } from "react";
import { PRESET_PALETTE } from "../global/costants";
import { ThemeProps } from "../types/SettingsType";
import {
  PaletteContextType,
  PaletteNewThemeContextType,
  ThemeProviderProps,
} from "../types/ThemeContextType";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const PaletteContext = createContext(PRESET_PALETTE[0]);
export const PaletteUpdateContext = createContext<PaletteContextType>(() => {});
export const PaletteNewThemeContext = createContext<PaletteNewThemeContextType>(
  () => {},
);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState(PRESET_PALETTE[getRandomInt(7)]);

  const toggleTheme = (newTheme: ThemeProps) => {
    setTheme(newTheme);
  };

  return (
    <PaletteContext.Provider value={theme}>
      <PaletteUpdateContext.Provider value={toggleTheme}>
        {children}
      </PaletteUpdateContext.Provider>
    </PaletteContext.Provider>
  );
};

export default ThemeProvider;

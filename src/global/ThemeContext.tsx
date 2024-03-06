import { ReactNode, useState, createContext } from "react";
import { PRESET_PALETTE } from "./costants";
import { ThemeProps } from "../types/SettingsType";
import { LabelType } from "../types/GlobalTypes";

type ThemeProviderProps = {
  children: ReactNode;
};

export const PaletteContext = createContext(PRESET_PALETTE[0]);
export const PaletteUpdateContext = createContext((theme: ThemeProps) => {});
export const PaletteNewThemeContext = createContext(
  (label: LabelType, color: string) => {}
);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState(PRESET_PALETTE[0]);

  const toggleTheme = (newTheme: ThemeProps) => {
    setTheme(newTheme);
  };

  const setNewTheme = (label: LabelType, color: string) => {
    const newTheme: ThemeProps = {
      backgroundColor: theme.backgroundColor,
      primaryColor: theme.primaryColor,
      secondaryColor: theme.secondaryColor,
      textColor: theme.secondaryColor,
      title: "",
    };
    switch (label) {
      case "background":
        newTheme.backgroundColor = color;
        break;
      case "primary":
        newTheme.primaryColor = color;
        break;
      case "secondary":
        newTheme.secondaryColor = color;
        break;
      case "text":
        newTheme.textColor = color;
        break;
    }
    setTheme(newTheme);
    console.log(label, theme);
  };

  return (
    <PaletteContext.Provider value={theme}>
      <PaletteUpdateContext.Provider value={toggleTheme}>
        <PaletteNewThemeContext.Provider value={setNewTheme}>
          {children}
        </PaletteNewThemeContext.Provider>
      </PaletteUpdateContext.Provider>
    </PaletteContext.Provider>
  );
};

export default ThemeProvider;

import { ReactNode } from "react";
import { LabelType } from "./GlobalTypes";
import { ThemeProps } from "./SettingsType";

export type ThemeProviderProps = {
  children: ReactNode;
};

export type PaletteContextType = (theme: ThemeProps) => void;

export type PaletteNewThemeContextType = (
  label: LabelType,
  color: string
) => void;

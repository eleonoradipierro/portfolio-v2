import { SETTINGS_OPTION } from "../costants";
import { State } from "./GlobalTypes";

export type ColorPaletteProps = PaletteProps & {
  colorPaletSection: SETTINGS_OPTION;
  setColorPaletSection: State<SETTINGS_OPTION>;
};

export type ColorFormRowProps = { label: string };

export type PaletteProps = {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  title?: string;
  backgroundColor: string;
};

export type SettingsIconProps = {
  width: string;
  height: string;
  fill: string;
};

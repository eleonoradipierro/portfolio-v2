import { SettingsOption } from "../global/enums";
import { LabelType, State } from "./GlobalTypes";

export type ColorPaletteProps = {
  colorPaletSection: SettingsOption;
  setColorPaletSection: State<SettingsOption>;
};

export type ColorFormRowProps = { label: LabelType };

export type ThemeProps = {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  title?: string;
  backgroundColor: string;
};

export type PaletteProps = {
  palette: ThemeProps;
};

export type SvgIconProps = {
  width: string;
  height: string;
  fill: string;
};

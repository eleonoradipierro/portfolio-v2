import { SettingsOption } from "../global/enums";
import { LabelType, State } from "./GlobalTypes";

export type ColorPaletteProps = {
  colorPaletSection: SettingsOption;
  setColorPaletSection: State<SettingsOption>;
};

export type ColorFormRowProps = { label: string };

export type PaletteProps = {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  title?: string;
  backgroundColor: string;
};

export type SvgIconProps = {
  width: string;
  height: string;
  fill: string;
};

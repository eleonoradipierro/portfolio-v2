import { State } from "./GlobalTypes";

export type ColorPaletteProps = {
  colorPaletSection: string;
  setColorPaletSection: State<string>;
};

export type ColorFormRowProps = { label: string };

export type PaletteProps = {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  title: string;
};

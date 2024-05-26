export type ThemeProps = {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  title?: string;
};

export type PaletteProps = {
  palette: ThemeProps;
};

export type SvgIconProps = {
  width: string;
  height: string;
  fill: string;
};

import { NAVBAR_OPTIONS, SETTINGS_OPTION } from "./enums";
import { PaletteProps } from "./types/SettingsType";

export const PRESET_PALETTE: Array<PaletteProps> = [
  {
    title: "beige matte",
    primaryColor: "#D4C5A6",
    secondaryColor: "#B1A07D",
    textColor: "#3F3114",
    backgroundColor: "#F4F1EBEA",
  },
  {
    title: "pink matte",
    primaryColor: "#C3C1AC",
    secondaryColor: "#E1C2B0",
    textColor: "#3F3114",
    backgroundColor: "#F4F1EBEA",
  },
  {
    title: "summer",
    primaryColor: "#DFA95B",
    secondaryColor: "#A76B74",
    textColor: "#3F3114",
    backgroundColor: "#EDE4E5EA",
  },
  {
    title: "autumn",
    primaryColor: "#BD715B",
    secondaryColor: "#5E8A80",
    textColor: "#3F3114",
    backgroundColor: "#DCE4E2EA",
  },
  {
    title: "spring",
    primaryColor: "#E4B69E",
    secondaryColor: "#709876",
    textColor: "#3F3114",
    backgroundColor: "#F6EEEAEA",
  },
  {
    title: "winter",
    primaryColor: "#AAD2EF",
    secondaryColor: "#B298B6",
    textColor: "#3F3114",
    backgroundColor: "#F0EBF4EA",
  },
  {
    title: "nature",
    primaryColor: "#F7D794",
    secondaryColor: "#517970",
    textColor: "#3F3114",
    backgroundColor: "#CAD3C5EA",
  },
  {
    title: "plum",
    primaryColor: "#FFD998",
    secondaryColor: "#997787",
    textColor: "#3F3114",
    backgroundColor: "#E7D9E0EA",
  },
];

export const CUSTOM_FORM_LABEL_LIST = [
  "background",
  "primary",
  "secondary",
  "text",
];

export const SETTINGS_OPTION_LIST = [
  SETTINGS_OPTION.preset,
  SETTINGS_OPTION.custom,
];

export const NAVBAR_OPTION_LIST = [
  NAVBAR_OPTIONS.about,
  NAVBAR_OPTIONS.skills,
  NAVBAR_OPTIONS.projects,
  NAVBAR_OPTIONS.experiences,
];

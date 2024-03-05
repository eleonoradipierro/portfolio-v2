import { NAVBAR_OPTIONS } from "../enums";
import { State } from "./GlobalTypes";

export type NavBarProps = {
  shownSection: NAVBAR_OPTIONS;
  setShownSection: State<NAVBAR_OPTIONS>;
};

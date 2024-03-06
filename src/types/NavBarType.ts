import { NAVBAR_OPTIONS } from "../enums";
import { NavBarOption } from "../global/enums";
import { State } from "./GlobalTypes";

export type NavBarProps = {
  shownSection: NavBarOption;
  setShownSection: State<NavBarOption>;
  shownSection: NAVBAR_OPTIONS;
  setShownSection: State<NAVBAR_OPTIONS>;
};

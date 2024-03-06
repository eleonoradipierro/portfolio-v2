import { NavBarOption } from "../global/enums";
import { State } from "./GlobalTypes";

export type DotProps = {
  shownSection: NavBarOption;
  setShownSection: State<NavBarOption>;
  option: NavBarOption;
};

export type DotScrollbarProps = {
  shownSection: NavBarOption;
  setShownSection: State<NavBarOption>;
};

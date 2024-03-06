import { ReactNode } from "react";
import { NavBarOption } from "../global/enums";
import { State } from "./GlobalTypes";

export type NavBarProps = {
  shownSection: NavBarOption;
  setShownSection: State<NavBarOption>;
  children: ReactNode;
};

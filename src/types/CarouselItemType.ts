import { State } from "./GlobalTypes";

export type CarouselItemProps = {
  setIsCardOpen: State<boolean>;
  isCardOpen: boolean;
};

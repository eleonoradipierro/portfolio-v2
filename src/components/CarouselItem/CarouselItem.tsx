import CloseIcon from "../SvgComponents/CloseIcon";
import { useTheme } from "../../hooks/useTheme";

const CarouselItem = (props: any) => {
  const { setIsCardOpen, isCardOpen } = props;
  const theme = useTheme();

  return (
    <div onClick={() => setIsCardOpen(!isCardOpen)}>
      {/* <CloseIcon
        width="30"
        height="30"
        fill={theme.backgroundColor}
        opacity="0.92"
      /> */}
      <CloseIcon width="50" height="50" fill={"#000000"} opacity="1" />
    </div>
  );
};

export default CarouselItem;

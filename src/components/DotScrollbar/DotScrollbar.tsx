import { NAVBAR_OPTION_LIST } from "../../global/costants";
import { NAVBAR_OPTIONS } from "../../enums";
import { DotProps, DotScrollbarProps } from "../../types/DotScrollbarType";
import ColorCircle from "../SvgComponents/ColorCircle";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import styles from "./DotScrollbar.module.scss";

const Dot = (props: DotProps) => {
  const {
    shownSection,
    setShownSection,
    option,
    textColor,
    primaryColor,
    secondaryColor,
  } = props;

  return (
    <li>
      <button onClick={() => setShownSection(option)}>
      {shownSection === option ? (
        <PaletteIcon
          width="30px"
          height="30px"
          fillPrimary={primaryColor}
          fillSecondary={secondaryColor}
          opacity="1"
          stroke="1"
        />
      ) : (
        <ColorCircle
          width="15px"
          height="15px"
          fill={textColor}
          opacity="1"
          stroke="1"
        />
      )}
    </li>
  );
};

const DotScrollbar = (props: DotScrollbarProps) => {
  const {
    shownSection,
    setShownSection,
    textColor,
    primaryColor,
    secondaryColor,
  } = props;

  return (
    <ul className={styles.container}>
      {NAVBAR_OPTION_LIST.map((option, index) => {
        return (
          <Dot
            key={`dotmenu_${index}`}
            {...{
              shownSection,
              setShownSection,
              option,
              textColor,
              primaryColor,
              secondaryColor,
            }}
          />
        );
      })}
    </ul>
  );
};
export default DotScrollbar;

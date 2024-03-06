import { NAVBAR_OPTION_LIST } from "../../global/costants";
import { useTheme } from "../../hooks/useTheme";
import { DotProps, DotScrollbarProps } from "../../types/DotScrollbarType";
import ColorCircle from "../SvgComponents/ColorCircle";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import styles from "./DotScrollbar.module.scss";

const Dot = (props: DotProps) => {
  const { shownSection, setShownSection, option } = props;
  const theme = useTheme();

  return (
    <li>
      <button onClick={() => setShownSection(option)}>
        {shownSection === option ? (
          <PaletteIcon
            width="30px"
            height="30px"
            fillPrimary={theme.primaryColor}
            fillSecondary={theme.secondaryColor}
            opacity="1"
            stroke="1"
          />
        ) : (
          <ColorCircle
            width="15px"
            height="15px"
            fill={theme.textColor}
            opacity="1"
            stroke="1"
          />
        )}
      </button>
    </li>
  );
};

const DotScrollbar = (props: DotScrollbarProps) => {
  const { shownSection, setShownSection } = props;

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
            }}
          />
        );
      })}
    </ul>
  );
};
export default DotScrollbar;

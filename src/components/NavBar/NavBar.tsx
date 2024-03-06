import { NAVBAR_OPTION_LIST } from "../../costants";
import styles from "./NavBar.module.scss";
import { NavBarProps } from "../../types/NavBarType";
import DotScrollbar from "../DotScrollbar/DotScrollbar";

const NavBar = (props: NavBarProps) => {
  const { shownSection, setShownSection } = props;
  const textColor = "#3F3114";
  const primaryColor = "#D4C5A6";
  const secondaryColor = "#B1A07D";
  return (
    <div>
      <nav className={styles.options_container}>
        {NAVBAR_OPTION_LIST.map((option) => {
          return (
            <button
              key={option}
              onClick={() => {
                setShownSection(option);
              }}
              style={
                shownSection === option ? { textDecoration: "underline" } : {}
              }
            >
              {option}
            </button>
          );
        })}
      </nav>
      <DotScrollbar
        {...{
          shownSection,
          setShownSection,
          textColor,
          primaryColor,
          secondaryColor,
        }}
      />
    </div>
  );
};

export default NavBar;

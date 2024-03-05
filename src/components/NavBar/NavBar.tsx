import { NAVBAR_OPTION_LIST } from "../../costants";
import styles from "./NavBar.module.scss";
import { NavBarProps } from "../../types/NavBarType";

const NavBar = (props: NavBarProps) => {
  const { shownSection, setShownSection } = props;

  return (
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
  );
};

export default NavBar;

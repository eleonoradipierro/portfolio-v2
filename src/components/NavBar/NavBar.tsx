import { NAVBAR_OPTION_LIST } from "../../global/costants";
import styles from "./NavBar.module.scss";
import { NavBarProps } from "../../types/NavBarType";
import DotScrollbar from "../DotScrollbar/DotScrollbar";

const NavBar = (props: NavBarProps) => {
  const { shownSection, setShownSection, children } = props;
  return (
    <div>
      <nav className={styles.options_container}>
        {NAVBAR_OPTION_LIST.map((option, index) => {
          return (
            <button
              key={`navbarelement_${index}`}
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
      <div className={styles.content_container}>
        {children}
        <DotScrollbar
          {...{
            shownSection,
            setShownSection,
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;

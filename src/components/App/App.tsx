// import styles from "./App.module.scss";
import Logo from "../Logo/Logo";
import Settings from "../Settings/Settings";
import Contacts from "../Contacts/Contacts";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import { NavBarOption } from "../../global/enums";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experiences from "../Experiences/Experiences";
import { useTheme } from "../../global/customHooks";

function App() {
  const theme = useTheme();
  const [shownSection, setShownSection] = useState(NavBarOption.ABOUT);
  return (
    <div style={{ color: theme.textColor }}>
      <div>
        <Settings />
        <Logo />
        <Contacts />
      </div>
      <NavBar {...{ shownSection, setShownSection }}>
        {shownSection === NavBarOption.ABOUT && <About />}
        {shownSection === NavBarOption.SKILLS && <Skills />}
        {shownSection === NavBarOption.PROJECTS && <Projects />}
        {shownSection === NavBarOption.EXPERIENCES && <Experiences />}
      </NavBar>
    </div>
  );
}

export default App;

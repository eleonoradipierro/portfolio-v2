import { useState } from "react";
import styles from "./Skills.module.scss";
import { useTheme } from "../../hooks/useTheme";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import Carousel from "../Carousel/Carousel";
import { TECH, TOOLS } from "../../global/dictionary";

const Skills = () => {
  const [isTechSection, setIsTechSection] = useState(true);
  const theme = useTheme();

  return (
    <div className={`${styles.use_nycd_font} ${styles.container}`}>
      <div className={styles.buttons_container}>
        <button onClick={() => setIsTechSection(true)}>
          {isTechSection && (
            <div className="background_icon">
              <PaletteIcon
                width="30px"
                height="30px"
                fillPrimary={theme.primaryColor}
                fillSecondary={theme.secondaryColor}
                opacity="1"
                stroke="1"
              />
            </div>
          )}
          tech
        </button>
        <button onClick={() => setIsTechSection(false)}>
          {!isTechSection && (
            <div className="background_icon">
              <PaletteIcon
                width="30px"
                height="30px"
                fillPrimary={theme.primaryColor}
                fillSecondary={theme.secondaryColor}
                opacity="1"
                stroke="1"
              />
            </div>
          )}
          tools
        </button>
      </div>

      <Carousel
        list={isTechSection ? TECH : TOOLS}
        openCard={() => console.error("cannot open skills! TODO: Handle this!")}
      />
    </div>
  );
};
export default Skills;

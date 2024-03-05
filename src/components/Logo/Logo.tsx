import { PaletteProps } from "../../types/SettingsType";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import styles from "./Logo.module.scss";

const Logo = (props: PaletteProps) => {
  const { textColor, primaryColor, secondaryColor } = props;
  return (
    <div>
      <h1 className={styles.title}>
        <p>Eleonora</p>
        <p>Di Pierro</p>
      </h1>
      <PaletteIcon
        height="300"
        width="300"
        strokeWidth={0}
        opacity="0.92"
        stroke={textColor}
        fillPrimary={primaryColor}
        fillSecondary={secondaryColor}
      />
    </div>
  );
};

export default Logo;

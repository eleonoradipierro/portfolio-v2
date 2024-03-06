import { useTheme } from "../../hooks/useTheme";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import styles from "./Logo.module.scss";

const Logo = () => {
  const theme = useTheme();
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
        stroke={theme.textColor}
        fillPrimary={theme.primaryColor}
        fillSecondary={theme.secondaryColor}
      />
    </div>
  );
};

export default Logo;

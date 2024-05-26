import { useState } from "react";
import styles from "./Settings.module.scss";
import { PaletteProps } from "../../types/SettingsType";
import { PRESET_PALETTE } from "../../global/costants";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import SettingsIcon from "../SvgComponents/SettingsIcon";
import { useThemeUpdate } from "../../hooks/useThemeUpdate";
import { useTheme } from "../../hooks/useTheme";

const Palette = (props: PaletteProps) => {
  const { palette } = props;
  const toggleTheme = useThemeUpdate();

  return (
    <li className={styles.color_list_container}>
      <button
        className={styles.color_icon_container}
        onClick={() => {
          toggleTheme(palette);
          console.log("background ", palette.backgroundColor);
        }}
      >
        <PaletteIcon
          height="50"
          width="40"
          opacity="0.92"
          fillPrimary={palette.primaryColor}
          fillSecondary={palette.secondaryColor}
          stroke={palette.textColor}
          strokeWidth={2}
        />
      </button>
      <div style={{ color: palette.textColor }}>{palette.title}</div>
    </li>
  );
};

const Presets = () => {
  return (
    <ul className={styles.color_list_grid}>
      {PRESET_PALETTE.map((color, index) => (
        <Palette key={`palette_${index}`} palette={color} />
      ))}
    </ul>
  );
};

const ColorPalette = () => {
  const currentTheme = useTheme();
  return (
    <div>
      <p className={styles.title_container}>
        color palette
        <PaletteIcon
          height="50"
          width="40"
          opacity="0.92"
          fillPrimary={currentTheme.primaryColor}
          fillSecondary={currentTheme.secondaryColor}
          stroke={currentTheme.textColor}
          strokeWidth={0}
        />
      </p>
      <div className={styles.color_menu}>
        <button className={styles.color_menu_button}>presets</button>
      </div>
      <div className={styles.use_nycd_font}>
        <Presets />
      </div>
    </div>
  );
};

const Settings = () => {
  const currentTheme = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsSettingsOpen(!isSettingsOpen);
        }}
      >
        <SettingsIcon
          width="40px"
          height="40px"
          fill={currentTheme.backgroundColor}
        />
      </button>

      {isSettingsOpen && <ColorPalette />}
    </div>
  );
};

export default Settings;

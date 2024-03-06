import React, { useState } from "react";
import styles from "./Settings.module.scss";
import {
  ColorFormRowProps,
  ColorPaletteProps,
  PaletteProps,
} from "../../types/SettingsType";
import {
  CUSTOM_FORM_LABEL_LIST,
  PRESET_PALETTE,
  SETTINGS_OPTION_LIST,
} from "../../global/costants";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import ColorCircle from "../SvgComponents/ColorCircle";
import SettingsIcon from "../SvgComponents/SettingsIcon";
import { SettingsOption } from "../../global/enums";
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

const ColorFormRow = (props: ColorFormRowProps) => {
  const { label } = props;
  const [color, setColor] = useState("");
  const textColor = "#3F3114";

  const handleHexadecimal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if ((/^[0-9a-fA-F]+$/.test(input) || input === "") && input.length <= 6) {
      setColor(input);
    }
  };

  return (
    <div className={styles.form_container}>
      <label className={styles.form_label}>{label}</label>
      <ColorCircle
        height="40"
        width="40"
        opacity="0.92"
        fill={"#" + color}
        stroke={textColor}
      />
      <input
        style={{ borderColor: textColor + "3F" }}
        type="text"
        value={color}
        onChange={(e) => handleHexadecimal(e)}
      />
    </div>
  );
};

const Custom = () => {
  return (
    <div>
      {CUSTOM_FORM_LABEL_LIST.map((label, index) => (
        <ColorFormRow key={`custommenu_${index}`} label={label} />
      ))}
    </div>
  );
};

const ColorPalette = (props: ColorPaletteProps) => {
  const { colorPaletSection, setColorPaletSection } = props;
  const currentTheme = useTheme();

  return (
    <div>
      <p className={styles.title_container}>
        Color Palette
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
        {SETTINGS_OPTION_LIST.map((option, index) => {
          return (
            <button
              style={
                colorPaletSection === option
                  ? { textDecoration: "underline" }
                  : {}
              }
              className={styles.color_menu_button}
              onClick={() => setColorPaletSection(option)}
              key={`settingsoption_${index}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div>
        {colorPaletSection === SettingsOption.PRESETS && <Presets />}
        {colorPaletSection === SettingsOption.CUSTOM && <Custom />}
      </div>
    </div>
  );
};

const Settings = () => {
  const currentTheme = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [colorPaletSection, setColorPaletSection] = useState(
    SettingsOption.PRESETS
  );

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

      {isSettingsOpen && (
        <ColorPalette
          {...{
            colorPaletSection,
            setColorPaletSection,
          }}
        />
      )}
    </div>
  );
};

export default Settings;

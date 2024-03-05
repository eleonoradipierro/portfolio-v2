import React, { useState } from "react";
import {
  ColorFormRowProps,
  ColorPaletteProps,
  PaletteProps,
} from "../../types/SettingsType";
import {
  CUSTOM_FORM_LABEL_LIST,
  PRESET_PALETTE,
  SETTINGS_OPTION_LIST,
} from "../../costants";
import PaletteIcon from "../SvgComponents/PaletteIcon";
import ColorCircle from "../SvgComponents/ColorCircle";

const Palette = (props: PaletteProps) => {
  const { primaryColor, secondaryColor, textColor, title } = props;

  return (
    <li>
      <div>
        <PaletteIcon
          height="50"
          width="40"
          opacity="0.92"
          fillPrimary={primaryColor}
          fillSecondary={secondaryColor}
          stroke={textColor}
          strokeWidth={2}
        />
      </div>
      <div style={{ color: textColor }}>{title}</div>
    </li>
  );
};

const Presets = () => {
  return (
    <ul>
      {PRESET_PALETTE.map((color) => (
        <Palette {...{ ...color }} />
      ))}
    </ul>
  );
};

const ColorFormRow = (props: ColorFormRowProps) => {
  const { label } = props;
  const [color, setColor] = useState("");

  const handleHexadecimal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if ((/^[0-9a-f]+$/.test(input) || input === "") && input.length <= 6) {
      setColor(input);
    }
  };

  return (
    <div>
      <label>
        {label}
      </label>
      <ColorCircle
        height="40"
        width="40"
        opacity="0.92"
        fill={"#" + color}
        stroke={"#3F3114"}
      />
      <input type="text" value={color} onChange={(e) => handleHexadecimal(e)} />
    </div>
  );
};

const Custom = () => {
  return (
    <div>
      {CUSTOM_FORM_LABEL_LIST.map((label) => (
        <ColorFormRow {...{ label }} />
      ))}
    </div>
  );
};

const ColorPalette = (props: ColorPaletteProps) => {
  const { colorPaletSection, setColorPaletSection } = props;

  return (
    <div>
      Color Palette
      <div>
        {SETTINGS_OPTION_LIST.map((key) => {
          return (
            <button onClick={() => setColorPaletSection(key)}>{key}</button>
          );
        })}
      </div>
      <div>
        {colorPaletSection === "presets" && <Presets />}
        {colorPaletSection === "custom" && <Custom />}
      </div>
    </div>
  );
};

const Settings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [colorPaletSection, setColorPaletSection] = useState("none");

  return (
    <div>
      <button
        onClick={() => {
          setIsSettingsOpen(!isSettingsOpen);
          setColorPaletSection("none");
        }}
      >
        settings img
      </button>

      {isSettingsOpen && (
        <ColorPalette {...{ colorPaletSection, setColorPaletSection }} />
      )}
    </div>
  );
};

export default Settings;

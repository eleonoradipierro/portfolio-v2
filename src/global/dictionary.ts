import { SkillsType, ContentType } from "../types/CarouselType";

export const ANGULAR2: SkillsType = { name: "Angular2", icon: "Angular Logo" };
export const REACT: SkillsType = { name: "React.js", icon: "React.js image" };
export const SCSS: SkillsType = { name: "SCSS", icon: "SCSS image" };
export const JAVASCRIPT: SkillsType = { name: "Javascript", icon: "JS image" };
export const TYPESCRIPT: SkillsType = { name: "Typescript", icon: "TS image" };
export const HTML: SkillsType = { name: "HTML", icon: "HTML image" };
export const CSS: SkillsType = { name: "CSS", icon: "CSS image" };
export const RXJS: SkillsType = { name: "RxJs", icon: "RxJs image" };

export const JAWS: SkillsType = { name: "Jaws", icon: "Jaws image" };
export const VSCODE: SkillsType = {
  name: "Visual Studio Code",
  icon: "VSCODE image",
};
export const GITHUB: SkillsType = { name: "GitHub", icon: "GitHub image" };
export const GIT: SkillsType = { name: "Git", icon: "Git image" };
export const FIGMA: SkillsType = { name: "Figma", icon: "Figma image" };

export const EXPERIENCES: Array<ContentType> = [
  {
    name: "Intesa Sanpaolo",
    description: ["Dunno", "Still dunno", "..again dunno?"],
    icon: "ISP Logo",
    period: "2022 - Today",
    skills: [REACT, ANGULAR2, SCSS, JAVASCRIPT, JAWS],
  },
];

export const PROJECTS: Array<ContentType> = [
  {
    name: "POKEDEX",
    description: ["Pokedex. that'it."],
    icon: "Screenshot",
    skills: [REACT, SCSS],
  },
];

export const TECH: Array<SkillsType> = [ANGULAR2, REACT, SCSS];

export const TOOLS: Array<SkillsType> = [GITHUB, GIT, VSCODE];

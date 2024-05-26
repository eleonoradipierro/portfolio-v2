export type ContentType = {
  name: string;
  icon: string;
  description?: Array<string>;
  period?: string;
  skills?: Array<SkillsType>;
};

export type SkillsType = {
  name: string;
  icon: string;
};

export type CardType = {
  content: ContentType;
  isActive?: boolean;
  isTransparent: boolean;
  handleClick?: () => void;
};

export type CardListProps = {
  list: Array<ContentType>;
  openCard?: () => void;
};

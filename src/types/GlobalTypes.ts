export type State<T> = (value: React.SetStateAction<T>) => void;

export type LabelType = "background" | "primary" | "secondary" | "text";

export type LabelListType = Array<LabelType>;

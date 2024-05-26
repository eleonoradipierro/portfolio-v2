import { CircleProps } from "../../types/CircleType";

const ColorCircle = (props: CircleProps) => {
  const { height, width, fill, opacity } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7144 10.7143L19.2858 19.2857M19.2858 10.7143L10.7144 19.2857"
        stroke={fill}
        strokeOpacity={opacity}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ColorCircle;

import { CircleProps } from "../../types/CircleType";

const ColorCircle = (props: CircleProps) => {
  const { height, width, fill, opacity, stroke } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="10.5"
        cy="11"
        rx="10.5"
        ry="11"
        fill={fill}
        fillOpacity={opacity}
      />
      <path
        d="M20.5 11C20.5 16.8212 16.0012 21.5 10.5 21.5C4.99882 21.5 0.5 16.8212 0.5 11C0.5 5.17884 4.99882 0.5 10.5 0.5C16.0012 0.5 20.5 5.17884 20.5 11Z"
        stroke={stroke}
        strokeOpacity="0.25"
      />
    </svg>
  );
};
export default ColorCircle;

import * as React from "react";

type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const Logo: React.FunctionComponent<Props> = ({
  width = 33,
  height = 24,
  color = "#fff"
}) => (
  <svg width={width} height={height} fill="none">
    <path d="M0 0h24v16H0z" />
    <path
      fill={color}
      d="M25 
      1h7v22h-7zM17 
      16h7v7h-7zM17 
      1h7v14h-7zM9 
      1h7v22H9zM1 
      16h7v7H1zM1 
      1h7v14H1z"
    />
  </svg>
);

export default Logo;

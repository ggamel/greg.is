const Logo = ({ width = 33, height = 24, color = "currentcolor" }) => (
  <svg viewBox="0 0 33 24" width={width} height={height} fill={color}>
    {/* <path d="M0 0h24v16H0z" /> */}
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

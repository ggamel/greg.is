const Container = ({
  center,
  vCenter,
  dark,
  gray,
  wide,
  small,
  padding,
  overflow,
  minHeight,
  dotBackground,
  children,
  mobileStyle,
  divider,
  ...props
}) => <div {...props}>{children}</div>;

export default Container;

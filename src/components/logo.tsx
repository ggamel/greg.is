import React from "react";
import PropTypes from "prop-types";

const Logo = ({ fill }: Props) => (
  <svg viewBox="0 0 35 24">
    <title>gg — Greg Gamel</title>
    <rect x="27" width="8" height="24" fill={fill} />
    <rect x="18" y="16" width="8" height="8" fill={fill} />
    <rect x="18" width="8" height="15" fill={fill} />
    <rect x="9" width="8" height="24" fill={fill} />
    <rect y="16" width="8" height="8" fill={fill} />
    <rect width="8" height="15" fill={fill} />
  </svg>
);

Logo.propTypes = {
  fill: PropTypes.string
};

Logo.defaultProps = {
  fill: "#fff"
};

export default Logo;

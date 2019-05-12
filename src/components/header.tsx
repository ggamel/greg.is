import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = ({ name }) => (
  <div>
    <div>
      <h1>{name}</h1>
    </div>
  </div>
);

Header.propTypes = {
  name: PropTypes.string
};

export default Header;

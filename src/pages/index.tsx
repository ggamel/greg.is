import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { Layout, Header } from "../components";
import config from "../../config/site";

const Index = ({}) => (
  <Layout>
    <Header name={config.name}>{config.name}</Header>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export default Index;

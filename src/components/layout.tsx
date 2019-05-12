import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";

import { SEO } from "./index";
import { Box, Flex } from "../elements";
import theme from "../../config/theme";
import reset from "../styles/reset";
import fontface from "../styles/fontface";
import Logo from "./logo";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontface}

  html {
    font-family: "Inter","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    }
  }


  body {
    background: #101010;
    padding:0 5.6rem;
    -webkit-animation:body-animation 1.6s;
    animation:body-animation 1.6s;
    }
    @-webkit-keyframes body-animation {
    from {
      opacity:0
    }
    }
    @keyframes body-animation {
    from {
      opacity:0
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr; */
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    /* grid-template-columns: ${props =>
      props.theme.sidebarWidth.normal} 1fr; */
  }
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.header`
  background: red;
  height: 84px;
`;

const Layout = ({ children, customSEO }) => (
  <ThemeProvider theme={theme}>
    <>
      {!customSEO && <SEO />}
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Box>
            <Link to="/" aria-label="Greg Gamel, Back to Homepage">
              <Logo />
            </Link>
          </Box>
        </Header>

        {children}
      </Wrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};

export default Layout;

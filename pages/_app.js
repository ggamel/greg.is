import React from "react";
import App from "next/app";
import Router from "next/router";
import { ThemeProvider, Styled } from "theme-ui";

import theme from "../src/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Styled.root>
          <Component {...pageProps} query={router.query} />
        </Styled.root>
      </ThemeProvider>
    );
  }
}

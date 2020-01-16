import React from "react";
import App from "next/app";
import Router from "next/router";
import { ThemeProvider, Styled, ColorMode } from "theme-ui";

import theme from "../src/theme";

// import { googlePageview } from "../components/GoogleAnalytics";

// Router.events.on("routeChangeComplete", path => googlePageview(path));

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ColorMode />
        <Styled.root>
          <Component {...pageProps} query={router.query} />
        </Styled.root>
      </ThemeProvider>
    );
  }
}

/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui";
import Link from "next/link";

import { SkipNavContent } from "@reach/skip-nav";

import Page from "../../components/Page";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WritingPage = () => (
  <>
    <Page title="Writing | Greg Gamel">
      <SkipNavContent tabIndex="0" />
      <Header />
      <h1>Writing</h1>
      <p>
        Greg Gamel is a designer and developer, currently working for EyeGuide.
      </p>
    </Page>
    <Footer></Footer>
  </>
);

export default WritingPage;

import Link from "next/link";

import { SkipNavContent } from "@reach/skip-nav";

import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => (
  <>
    <Page title="About | Greg Gamel">
      <SkipNavContent tabIndex="0" />
      <Header />
      <main>
        <h1>About Greg</h1>
        <p>
          Greg Gamel is a designer and developer, currently working for
          EyeGuide.
        </p>

        <h2>Current</h2>
        <p></p>
        <h2>Skills</h2>
        <p></p>
        <h3>Client-side</h3>
        <p></p>
        <h3>Server-side</h3>
        <p></p>
        <h3>Server-side</h3>
        <p></p>
      </main>
    </Page>
    <Footer></Footer>
  </>
);

export default AboutPage;

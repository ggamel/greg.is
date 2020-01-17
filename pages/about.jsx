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
        <p>coming soon.</p>
      </main>
    </Page>
    <Footer />
  </>
);

export default AboutPage;

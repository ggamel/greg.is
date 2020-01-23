/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

import { SkipNavContent } from "@reach/skip-nav";

import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Global } from "@emotion/core";

// import Nav from "../components/Nav";

const IndexPage = ({ headerActive }) => {
  return (
    <>
      <Page title="Home | Greg Gamel">
        <SkipNavContent tabIndex="0" />
        <Header />
        <article sx={{ minHeight: "100vh" }}>
          <main>
            <h1 className="xl">Greg Gamel</h1>
            <p>
              Currently building <a href="https://eye.guide">EyeGuide</a>.
              Designer & developer of hardware & software products.
            </p>
            <p>Team Player. Teaches. No-Fuss. 💚s Green Chile.</p>
            <ul>
              <li>
                <a href="https://twitter.com/ggamel">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/ggamel">GitHub</a>
              </li>
              <li>
                <a href="mailto:g@greg.is">✍️ Email</a>
              </li>
            </ul>
          </main>
        </article>
      </Page>

      <Footer />
    </>
  );
};

export default IndexPage;

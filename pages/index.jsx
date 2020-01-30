/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import Link from "next/link";

import { SkipNavContent } from "@reach/skip-nav";

import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Global } from "@emotion/core";

// import Nav from "../components/Nav";

const IndexPage = ({ headerActive }) => {
  const [mode, setMode] = useColorMode();
  return (
    <>
      <Page title="Home | Greg Gamel">
        <SkipNavContent tabIndex="0" />
        <Header />

        <Box
          sx={{
            background: mode === "dark" ? "#111" : "#fafafa",
            pb: "1px"
          }}
        >
          <article
            sx={{
              minHeight: "100vh",
              width: "100%",
              maxWidth: "1024px",
              margin: "0 auto",
              pt: 5,
              pr: 4,
              pl: 4
            }}
          >
            <main>
              <h1
                className="xl"
                sx={{
                  fontWeight: 800
                }}
              >
                Greg Gamel
              </h1>
              <br />
              <p>Designer & developer of hardware & software products.</p>
              <p>Team Player. Teaches. No-Fuss. 💚s Green Chile.</p>
              <br />
              <p>
                Founded &amp; currently building{" "}
                <a href="https://eye.guide">EyeGuide</a>.
              </p>
            </main>
          </article>
        </Box>
      </Page>

      <Footer />
    </>
  );
};

export default IndexPage;

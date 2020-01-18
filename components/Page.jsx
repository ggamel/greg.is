import Head from "next/head";

import theme from "../src/theme";

import reset from "../css/reset";
import vars from "../css/vars";
import typography from "../css/typography";
import { jsx, Styled, useColorMode } from "theme-ui";
import { css, Global } from "@emotion/core";

const Page = ({ children, title, description }) => (
  <div>
    <Head>
      <title>{title || "Greg Gamel"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={description || "Greg Gamel is a designer and developer"}
      />
    </Head>
    <Global styles={reset} />
    <Global styles={vars} />
    {/* <Global styles={typography} /> */}
    <Global
      styles={css`
        * {
          transition: background-color 0.4s ease;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        label,
        button,
        input {
          margin-top: 0px;
          margin-bottom: 0.2em;
        }

        ::selection {
          background: rgba(0, 136, 85, 0.3);
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        svg {
          shape-rendering: crispEdges;
        }
        svg path,
        svg circle {
          shape-rendering: geometricprecision;
        }

        ${"" /* body {
          background: var(--gg-background);
          color: var(--gg-color);
        } */}
        .visually-hidden {
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
          overflow: hidden;
          position: absolute;
        }
        [data-reach-skip-link] {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          position: absolute;
        }
        [data-reach-skip-link]:focus {
          padding: 1rem;
          position: fixed;
          top: 16px;
          left: 16px;
          background: black;
          z-index: 1;
          width: auto;
          height: auto;
          clip: auto;
          font-weight: 900;
        }

        ${"" /* article {
        padding-left: var(--gutter);
        padding-right: var(--gutter);
        margin-top: 6.25rem;
      } */}
        ${"" /* main {
        margin-top: calc(var(--gutter) / 2);
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        font-size: var(--p1);
        font-weight: 400;
        line-height: 1.4;
      }
      @media (max-width: 960px) {
        main {
          grid-template-columns: 6.25rem 1fr 6.25rem;
        }
      }

      @media (max-width: 730px) {
        main {
          grid-template-columns: 0 1fr 0;
        }
      }

      main > * {
        grid-column-start: 2;
        grid-column-end: 3;
      } */}

      hr {
          width: 100%;
          border-color: #333;
        }

        dl {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-gap: ;
        }

        /* a {
          text-decoration: none;
        } */
        .selected {
          // color: red;
          font-weight: 900;
        }
      `}
    />

    {children}
  </div>
);

export default Page;

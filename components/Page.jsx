import Head from 'next/head';

import { jsx, Styled, useColorMode, Box, Grid } from 'theme-ui';
import { css, Global } from '@emotion/core';
import theme from '../src/theme';

import reset from '../css/reset';
import vars from '../css/vars';
import typography from '../css/typography';

const Page = ({ children, title, description }) => (
  <div>
    <Head>
      <title>{title || 'Greg Gamel'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={description || 'Greg Gamel is a designer and developer'}
      />
    </Head>
    <Global styles={reset} />
    <Global styles={vars} />
    <Global styles={typography} />
    <Global
      styles={css`
        * {
          transition: background-color 0.4s ease;
        }
        html {
          background: var(--gg-background);
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

        hr {
          width: 100%;
          border-color: #333;
        }

        dl {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-gap: 2;
        }

        .selected {
          font-weight: 900;
        }
      `}
    />
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        // maxWidth: "1024px",
        // margin: "0 auto",
        // pt: 5,
        // pr: 4,
        // pl: 4
      }}
    >
      {children}
    </Box>
  </div>
);

export default Page;

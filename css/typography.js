/** @jsx jsx */
import { css } from '@emotion/core';

const typography = css`
  html {
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern' 1;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  .xl {
    font-size: var(--t0);
    line-height: 1.2;
    font-weight: 500;
  }
  h1 {
    font-size: var(--t1);
    line-height: 1.2;
    font-weight: 500;
  }
  h2 {
    font-size: var(--t2);
    line-height: 1.2;
    font-weight: 400;
  }
  h3 {
    font-size: var(--t3);
    line-height: 1.4;
    font-weight: 400;
    margin-top: 1em;
  }

  p {
    font-size: var(--p0);
    line-height: 1.4;
  }
  .p1 {
    font-size: var(--p1);
    line-height: 1.4;
    font-weight: 400;
  }
  .p2 {
    font-size: var(--p2);
    line-height: 1.5;
    font-weight: 400;
  }
  .p3 {
    font-size: var(--p3);
    line-height: 1.5;
    font-weight: 400;
  }
`;

export default typography;

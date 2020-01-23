/** @jsx jsx */
import { css } from "@emotion/core";

const vars = css`
  :root {
    --gg-background: #000;
    --gg-pgrad: linear-gradient(
      180deg,
      rgb(32, 18, 106) 0%,
      rgb(114, 4, 193) 100%
    );

    --t0: 4.5rem;
    --t1: 4rem;
    --t2: 2.5rem;
    --t3: 2rem;
    --p0: 1.687rem;
    --p1: 1.25rem;
    --p2: 1rem;
    --p3: 0.75rem;
    --gutter: 3.125rem;
  }

  @media (max-width: 730px) {
    :root {
      --t0: 2.67rem;
      --t1: 2.67rem;
      --t2: 2rem;
      --t3: 1.67rem;
      --p0: 1.5rem;
      --p1: 1.167rem;
      --p2: 1rem;
      --p3: 1rem;
    }
  }

  @media (max-width: 1080px) {
    :root {
      --gutter: 3vw;
    }
  }

  @media (max-width: 670px) {
    :root {
      --gutter: 20px;
    }
  }
`;

export default vars;

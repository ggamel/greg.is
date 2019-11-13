import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Greg Gamel"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>
      {`
        /* Box sizing rules */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default padding */
        ul[class],
        ol[class] {
          padding: 0;
        }

        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        p,
        ul[class],
        ol[class],
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        /* Set core body defaults */
        body {
          min-height: 100vh;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
        }

        /* Remove list styles on ul, ol elements with a class attribute */
        ul[class],
        ol[class] {
          list-style: none;
        }

        /* A elements that don't have a class get default styles */
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        /* Make images easier to work with */
        img {
          max-width: 100%;
          display: block;
        }

        /* Natural flow and rhythm in articles by default */
        article > * + * {
          margin-top: 1em;
        }

        /* Inherit fonts for inputs and buttons */
        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        /* Remove all animations and transitions for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* ---------------- */
        /* ---------------- */
        :root {
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

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        ::selection {
          background: rgba(0, 136, 85, 0.3);
        }

        html {
          text-rendering: optimizeLegibility;
          font-feature-settings: "kern" 1;
          font-kerning: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: -apple-system, BlinkMacSystemFont, -system-ui,
            "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto,
            noto, "segoe ui", arial, sans-serif;
          background: #fff;
          font-size: 16px;
          font-size: 1.1111111vw;
          word-break: break-word;
        }

        @media (max-width: 1080px) {
          html {
            font-size: 12px;
          }
        }

        body {
          box-sizing: border-box;
        }

        a {
          -webkit-text-decoration: underline;
          text-decoration: underline;
          cursor: pointer;
          color: inherit;
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
          font-family: -apple-system, BlinkMacSystemFont, -system-ui,
            "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto,
            noto, "segoe ui", arial, sans-serif;
          margin-top: 0;
          margin-bottom: 0.2em;
        }

        img {
          max-width: 100%;
        }
      `}
    </style>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Copyright © 2019 Greg Gamel</span>
    </footer>
  </div>
);

export default Layout;

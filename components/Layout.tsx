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
      <style global jsx>
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
        `}
      </style>
    </Head>
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

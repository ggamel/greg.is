import * as React from "react";
import Link from "next/link";
import Head from "next/head";

import Logo from "./Logo";

const Layout = ({ children, title = "Greg Gamel" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon shortcut" type="image/x-icon" href="favicon.svg"></link>
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
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
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

        .xl {
          font-size: var(--t0);
          line-height: 1.2;
        }
        h1 {
          font-size: var(--t1);
        }
        h2 {
          font-size: var(--t2);
        }
        h3 {
          font-size: var(--t3);
        }

        --p0: 1.5rem;
        --p1: 1.167rem;
        --p2: 1rem;
        --p3: 1rem;

        p {
          font-size: var(--p0);
        }
        .p1 {
          font-size: var(--p1);
        }
        .p2 {
          font-size: var(--p2);
        }
        .p3 {
          font-size: var(--p3);
        }

        body {
          background: linear-gradient(
            180deg,
            rgb(32, 18, 106) 0%,
            rgb(114, 4, 193) 100%
          );
          color: #fff;
        }
        header {
          margin: 0 var(--gutter);
        }
      `}
    </style>

    <header>
      <div>
        <Link href="/">
          <a>
            <Logo />
            <span>Greg Gamel</span>
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/styles">
          <a>Styles</a>
        </Link>{" "}
        |{" "}
      </nav>
      <div>designer + developer of hardware & software products</div>
    </header>
    <main>{children}</main>
    <footer>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div>Copyright © 2019 Greg Gamel</div>
    </footer>
  </div>
);

export default Layout;

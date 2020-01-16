import Link from "next/link";
import { withRouter } from "next/router";
import classNames from "classnames";
import { SkipNavLink } from "@reach/skip-nav";

import Container from "./Container";
import Logo from "./Logo";

const Nav = ({ className, router }) => {
  return (
    <Container className={className} center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Greg Gamel
      </h1>
      <nav>
        <div className="items">
          <Link href="/writing">
            <a>Writing</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="logo">
          <Link href="/">
            <a aria-label="Greg Gamel">
              <Logo />
            </a>
          </Link>
        </div>
        <div className="items">
          <Link href="/styles">
            <a>Styles</a>
          </Link>
          <Link href="/styles">
            <a>Work</a>
          </Link>
        </div>
        <style jsx>
          {/* CSS */ `
            nav {
              ${"" /* background: #000; */}
              position: relative;
              flex: 1;
              height: 80px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            nav .items {
              display: flex;
              align-items: center;
              z-index: 1;
              pointer-events: auto;
            }
            nav .items a {
              display: inline-block;
              // enlarge the clickable area
              padding: 5px;
              margin-left: -5px;
              margin-right: 2rem;
              text-decoration: none;
              transition: color 0.2s ease;
              color: #777;
              font-weight: 500;
              transition: all 1.2s ease;
            }
            nav .items a:hover {
              color: #fff;
              transition: all 1.2s ease;
            }
            nav .items a.selected {
              color: #0070f3;
              font-weight: 600;
            }
            nav .logo {
              width: 100%;
              font-size: 0;
              text-align: center;
              transition: all 0.2s ease;
            }

            nav .logo a {
              display: inline-block;
            }
          `}
        </style>
      </nav>
    </Container>
  );
};
export default Nav;

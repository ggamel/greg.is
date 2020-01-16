/** @jsx jsx */
import { jsx, css, Styled, useColorMode } from "theme-ui";
import { Global } from "@emotion/core";
import Link from "./Link";

import Logo from "../components/Logo";
import { render } from "react-dom";

const header = css`
  background: "pink";
  position: sticky;
  top: 0;
  zindex: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-backdrop-filter: saturate(100%) blur(40px);
  backdrop-filter: saturate(100%) blur(12px);
`;

const Header = ({ children }) => {
  return (
    <header
      sx={{
        display: "grid",
        gridGap: 3,
        mx: "auto",
        px: 3,
        py: 3,
        gridAutoFlow: "row",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
        variant: "styles.header"
      }}
      css={header}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gridColumnStart: [1, 2],
          gridColumnEnd: [3, 3],
          order: [0, 1]
        }}
      >
        <Link href="/">
          <a>
            <Logo />
            <span
              sx={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                top: -9999
              }}
            >
              Home
            </span>
          </a>
        </Link>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Link href="/about">
          <a
            sx={{
              variant: "styles.navlink",
              p: 2
            }}
          >
            About
          </a>
        </Link>
        <Link href="/writing">
          <a
            sx={{
              variant: "styles.navlink",
              p: 2
            }}
          >
            Writing
          </a>
        </Link>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          order: 2
        }}
      >
        <Link href="/styles">
          <a
            sx={{
              variant: "styles.navlink",
              p: 2
            }}
          >
            Styles
          </a>
        </Link>
        <Link href="/work">
          <a
            sx={{
              variant: "styles.navlink",
              p: 2
            }}
          >
            Work
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;

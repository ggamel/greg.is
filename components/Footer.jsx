/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import Link from "./Link";

const Footer = ({}) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <footer
      sx={{
        fontSize: 1,
        variant: "styles.footer",
        background: "#111"
      }}
    >
      <button
        sx={{
          appearance: "none",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          fontSize: "inherit",
          fontWeight: "bold",
          m: 0,
          px: 3,
          py: 2,
          border: 0,
          borderRadius: 4,
          variant: "buttons.primary"
        }}
        onClick={e => {
          setColorMode(colorMode === "default" ? "light" : "default");
        }}
      >
        {" "}
        {colorMode === "default" ? "🔆" : "🌙"}
      </button>
      <div
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(4, 32px)",
          gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
          gridAutoFlow: "column",
          px: 2,
          py: 4
        }}
      >
        <Link href="/" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Home</a>
        </Link>
        <Link href="/about" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>About</a>
        </Link>
        <Link href="/writing" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Writing</a>
        </Link>
        <Link href="/styles" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Styles</a>
        </Link>
        <Link href="/work" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Work</a>
        </Link>
        <Link href="/community" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Projects</a>
        </Link>
        <Link href="/support" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>APOD</a>
        </Link>
        <Link href="/contact" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Grad</a>
        </Link>
        <Link href="/support" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Daily.is</a>
        </Link>
        <Link href="/products" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Experiments</a>
        </Link>
        <Link href="/contact" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Contact</a>
        </Link>
        <Link href="/links" sx={{ variant: "styles.navlink", p: 2 }}>
          <a>Links</a>
        </Link>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 3
        }}
      >
        <Link href="https://github.com/ggamel" sx={{ color: "inherit" }}>
          <a>GitHub</a>
        </Link>
        <div sx={{ mx: 1 }} />
        <Link href="https://twitter.com/ggamel" sx={{ color: "inherit" }}>
          <a>Twitter</a>
        </Link>
        <div sx={{ mx: 1 }} />© 2020 Greg Gamel
      </div>
    </footer>
  );
};
export default Footer;

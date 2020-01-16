import { dark } from "@theme-ui/presets";
export default {
  ...dark,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#fff",
    background: "#000",
    primary: "#07c",
    secondary: "#609",
    modes: {
      light: {
        text: "#222",
        background: "#fff",
        primary: "#0cf",
        secondary: "#90c"
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit"
  },
  styles: {
    ...dark.styles,
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary"
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
        fontWeight: 900
      }
    }
  }
};

import { dark } from "@theme-ui/presets";
export default {
  ...dark,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  // initialColorModeName: "dark",
  colors: {
    modes: {
      dark: {
        text: "#fff",
        background: "#000"
      },
      light: {
        text: "#222",
        background: "#fff"
      }
    }
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fonts: {
    body:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading: "inherit"
  },
  lineHeights: {
    body: 4,
    heading: 8
  },
  styles: {
    ...dark.styles,
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    h1: {
      fontSize: 5,
      color: "primary"
    },
    h2: {
      fontSize: 4
    },
    h3: {
      fontSize: 3
    },
    h4: {
      fontSize: 2
    },
    h5: {
      fontSize: 1
    },
    h6: {
      fontSize: 0
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
    }
  }
};

import { css } from "styled-components";

const fontface = css`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    src: url("Inter-Thin.woff2?v=3.5") format("woff2"),
      url("Inter-Thin.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 100;
    src: url("Inter-ThinItalic.woff2?v=3.5") format("woff2"),
      url("Inter-ThinItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    src: url("Inter-ExtraLight.woff2?v=3.5") format("woff2"),
      url("Inter-ExtraLight.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 200;
    src: url("Inter-ExtraLightItalic.woff2?v=3.5") format("woff2"),
      url("Inter-ExtraLightItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    src: url("Inter-Light.woff2?v=3.5") format("woff2"),
      url("Inter-Light.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 300;
    src: url("Inter-LightItalic.woff2?v=3.5") format("woff2"),
      url("Inter-LightItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("Inter-Regular.woff2?v=3.5") format("woff2"),
      url("Inter-Regular.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    src: url("Inter-Italic.woff2?v=3.5") format("woff2"),
      url("Inter-Italic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("Inter-Medium.woff2?v=3.5") format("woff2"),
      url("Inter-Medium.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    src: url("Inter-MediumItalic.woff2?v=3.5") format("woff2"),
      url("Inter-MediumItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    src: url("Inter-SemiBold.woff2?v=3.5") format("woff2"),
      url("Inter-SemiBold.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 600;
    src: url("Inter-SemiBoldItalic.woff2?v=3.5") format("woff2"),
      url("Inter-SemiBoldItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url("Inter-Bold.woff2?v=3.5") format("woff2"),
      url("Inter-Bold.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    src: url("Inter-BoldItalic.woff2?v=3.5") format("woff2"),
      url("Inter-BoldItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    src: url("Inter-ExtraBold.woff2?v=3.5") format("woff2"),
      url("Inter-ExtraBold.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 800;
    src: url("Inter-ExtraBoldItalic.woff2?v=3.5") format("woff2"),
      url("Inter-ExtraBoldItalic.woff?v=3.5") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    src: url("Inter-Black.woff2?v=3.5") format("woff2"),
      url("Inter-Black.woff?v=3.5") format("woff");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 900;
    src: url("Inter-BlackItalic.woff2?v=3.5") format("woff2"),
      url("Inter-BlackItalic.woff?v=3.5") format("woff");
  }

  /* -------------------------------------------------------
  Variable font.
  Usage:

    html { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
      html { font-family: 'Inter var', sans-serif; }
    }
  */
  @font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("Inter-upright.var.woff2?v=3.5") format("woff2");
  }
  @font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-style: italic;
    font-named-instance: "Italic";
    src: url("Inter-italic.var.woff2?v=3.5") format("woff2");
  }

  /* Legacy naming compatibility */
  @font-face {
    font-family: "Inter var alt";
    font-weight: 100 900;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("Inter-upright.var.woff2?v=3.5") format("woff2");
  }
  @font-face {
    font-family: "Inter var alt";
    font-weight: 100 900;
    font-style: italic;
    font-named-instance: "Italic";
    src: url("Inter-italic.var.woff2?v=3.5") format("woff2");
  }

  /* --------------------------------------------------------------------------
  [EXPERIMENTAL] Multi-axis, single variable font.

  Slant axis is not yet widely supported (as of February 2019) and thus this
  multi-axis single variable font is opt-in rather than the default.

  When using this, you will probably need to set font-variation-settings
  explicitly, e.g.

    * { font-variation-settings: "slnt" 0deg }
    .italic { font-variation-settings: "slnt" 10deg }

  */
  @font-face {
    font-family: "Inter var experimental";
    font-weight: 100 900;
    font-style: oblique 0deg 10deg;
    src: url("Inter.var.woff2?v=3.5") format("woff2");
  }
`;

export default fontface;

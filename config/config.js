const manifest = require("../public/manifest.json");

const appSlug = "greg.is";

const completeConfig = {
  default: {
    appSlug,
    appName: manifest.name,
    appTagline: "greg.is",
    appDescription: "Greg Gamel's website",
    locale: "en_US",
    googleAnalyticsId: "UA-1802700-4",
    googleSiteVerification: false
  }
};

// Public API
module.exports = {
  config: {
    ...completeConfig.default
  },
  completeConfig
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
module.exports = withMDX();

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "global"
          }
        }
      ]
    });

    return config;
  }
};

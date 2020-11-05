const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})();

// TODO: Decide if this is still needed. Probably unneeded.
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// });

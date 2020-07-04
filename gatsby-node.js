const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@sections': path.resolve(__dirname, 'src/sections'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@context': path.resolve(__dirname, 'src/context'),
      },
    },
  });
};
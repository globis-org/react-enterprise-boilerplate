const defaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const paths = require('../config/paths');

module.exports = (baseConfig, env) => {
  const config = defaultConfig(baseConfig, env);
  config.module.rules.push(
    {
      test: /\.(ts|tsx)?$/,
      loader: 'ts-loader',
      include: paths.appSrc,
    },
  );
  config.resolve.extensions.push(
    '.ts',
    '.tsx',
  );

  return config;
}

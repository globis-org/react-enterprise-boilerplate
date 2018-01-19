const paths = require('../config/paths');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        include: paths.appSrc,
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        include: paths.appSrc,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: paths.appSrc,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    enforceExtension: false
  }
};


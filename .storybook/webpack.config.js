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
      {
        oneOf: [
          {
            exclude: /\.json$/,
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    enforceExtension: false
  }
};


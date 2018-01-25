const wp = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    webpackOptions: require('../../config/webpack.config.dev'),
  }
  on('file:preprocessor', wp(options))
}

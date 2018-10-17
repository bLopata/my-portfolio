var HtmlWebpackPlugin = require('html-webpack-plugin');
var PreRenderSpaPlugin = require('prerender-spa-plugin');
var path = require('path');


module.exports.plugins.push(
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: false
  }),
);
module.exports = {
  configureWebpack: config => {

    if (process.env.NODE_ENV !== 'production') return;

    return {
      plugins: [
        new PreRenderSpaPlugin(
          path.join(__dirname, 'dist'),
          ['/', '/about', '/portfolio/one', '/portfolio/two', '/portfolio/three'], {

          }
        )
      ]
    }
  }
}
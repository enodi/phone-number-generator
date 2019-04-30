const UglifyJsPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};

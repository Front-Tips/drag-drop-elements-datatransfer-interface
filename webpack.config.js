const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    library: "Tutorial",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    filename: "tutorial.min.js",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            pure_funcs: [
              "console.info",
              "console.debug",
              "console.log",
            ],
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: ``,
      raw: true,
    }),
    new HtmlWebpackPlugin({ template: "index.html" }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    client: {
      logging: "none", // or 'warn', 'none'
    },
    hot: false,
    liveReload: true,
    compress: true,
    port: 9000,
    open: false,
  },
};

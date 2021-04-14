const HtmlWebPackPlugin = require( 'html-webpack-plugin');
const path = require( 'path' );
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist' ),
    filename: 'main.js',
    publicPath: '/',
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    port: 8080,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [ //Uses polyfills
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    "corejs": "core-js@3"
                  }
                ]
              ],
              configFile: path.resolve(
                path.resolve(__dirname, `babel.dev.js`)
              ),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'img',
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: path.resolve( __dirname, 'public/index.html' ),
        filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify('development')
    }),
    new dotenv(),
  ],
};

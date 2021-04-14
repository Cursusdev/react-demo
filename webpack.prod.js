const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  target: 'web',
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
                    corejs: {
                      // Forces usage of last version
                      version: 3,
                      // Enables polyfills for proposals
                      proposals: true,
                    },
                  }
                ]
              ],
              configFile: path.resolve(path.resolve(__dirname, `babel.prod.js`),
              ),
            }
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
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
              name: "[sha1:hash:hex:4].[ext]",
              outputPath: 'img',
            }
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    minimize: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "reactvendor"
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './robots.txt',
          to: 'robots.txt',
        },
      ],
    }),
    new HtmlWebPackPlugin({
      title: 'React App',
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: 'public/favicon.ico',
    }),
    new FaviconsWebpackPlugin({
      logo: './public/icon512.png',
      prefix: 'icons/',
      cache: true,
      inject: true,
      favicons: {
        appName: "React demo",
        appShortName: "react-demo",
        appDescription: "React demonstration site titled Empty Shell",
        display: "standalone",
        scope: "/",
        start_url: "/index.html",
        version: "1.0",
        background: "#FFF",
        theme_color: "#FFF",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
      runtimeCaching: [
        {
          urlPattern: /\.(?:css|js|html)$/,
          handler: 'networkFirst',
          options: {
            cacheName: 'myCache',
            expiration: {
              maxAgeSeconds: 60*60*24
            },
            broadcastUpdate: {
              channelName: 'update-myCache'
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|eot|ttf|woff|woff2)$/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'assetCache',
            broadcastUpdate: {
              channelName: 'update-assetCache'
            }
          }
        }
      ],
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify('production')
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
     }),
    new dotenv(),
  ],
};

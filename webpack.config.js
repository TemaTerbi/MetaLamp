const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
  mode: "development",
  watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:  '[name].js',
  },
  plugins: [new MiniCssExtractPlugin(
    {
      filename: 'style.css'
    }
    ),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug',
    }),
  ],
  module: {
    rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "file-loader"],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../fonts',
          }
        }
        
      ]
    },
    // {
    //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //   type: 'asset/resource'
    // },
    {
      test:/\.(jpg|png|svg)$/,
      loader: 'file-loader',
      options:{
        name: '/img/[sha512:hash:base64:7].[ext]',
        outputPath :  '/images/',
      }
    },
    {
      test: /\.html$/i,
      loader: 'html-loader'
    }
  ],
  },
}
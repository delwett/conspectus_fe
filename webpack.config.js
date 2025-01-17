const { resolve } = require('path')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack')
const { removeEmpty } = require('webpack-config-utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

require('dotenv').config()

const isNodeEnvProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isNodeEnvProd ? 'production' : 'development',
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'assets/[name].bundle.js'
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader', '@linaria/webpack5-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpg|png|svg|ttf)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles.css'
    }),
    new DefinePlugin({
      'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT)
    })
  ],
  optimization: {
    usedExports: isNodeEnvProd,
    splitChunks: isNodeEnvProd
      ? {
          chunks: 'all'
        }
      : false,
    minimize: isNodeEnvProd,
    minimizer: removeEmpty([
      isNodeEnvProd
        ? new TerserPlugin({
            extractComments: false
          })
        : undefined
    ])
  }
}

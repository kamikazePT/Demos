const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const path = require('path');
const cpuCount = os.cpus().length;

module.exports = {
  entry: {
    'react-demo': ['babel-polyfill', './src/index.js']
  },
  stats : 'minimal',
  devtool : 'source-map',
  output: {
    publicPath: '/',
    libraryTarget: 'umd',
    library: '[name]',
    filename : './dist/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel'
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=eslint'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                paths: [
                  path.resolve(process.cwd(), 'node_modules')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      { 
        test: /\.js$/, 
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'babel',
      threads: cpuCount,
      loaders: [ 'babel-loader' ]
    }),
    new HappyPack({
      id: 'eslint',
      threads: cpuCount,
      loaders: [ 'eslint-loader?failOnError=true&failOnWarning=true' ]
    }),
    new ExtractTextPlugin('dist/[name].css', {
      allChunks: true
    })
  ],
  resolve : { 
    symlinks:false,
    alias: {
      'react': path.resolve(process.cwd(), 'node_modules', 'react'),
      'react-dom': path.resolve(process.cwd(), 'node_modules', 'react-dom')
    }	
  }
};

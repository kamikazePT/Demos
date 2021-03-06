require('webpack');
const HappyPack = require('happypack');
const os = require('os');
const cpuCount = os.cpus().length;

module.exports = {
  target : 'node',
  entry: {
    'redux-demo': './src/index.js'
  },
  stats : 'minimal',
  devtool : 'source-map',
  output: {
    publicPath: '/',
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
    })
  ]
};

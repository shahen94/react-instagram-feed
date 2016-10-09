/* eslint-disable */
const rucksack = require('rucksack-css');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './client'),
  entry: {
    jsx: './src/index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux-saga',
      'redux',
      'font-awesome-loader'
    ]
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, include: /(client|node_modules)/, loaders: ['style-loader', 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]', 'postcss-loader'] },
      { test: /\.(js|jsx)$/, exclude: [/node_modules/, /\.test.js$/], loaders: ['react-hot', 'babel-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.styl$/, loader: 'style!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}

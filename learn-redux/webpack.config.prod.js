var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [
    
    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
  ],
  module: {
    rules: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};

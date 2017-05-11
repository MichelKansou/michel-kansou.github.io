const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app': './resources/js/app.jsx'
  },
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
   rules: [
     {
       test: /.jsx?$/,
       exclude: /node_modules/,
       use: [
         {
           loader: 'babel-loader',
           options: {
             babelrc: false,
             presets: [
               ['es2015', { modules: false }],
               'react',
               'stage-0'
             ],
           }
         }
       ]
     },
     { test: /\.json$/, loader: "json-loader" },
     { test: /\.css$/, loader: "style!css" },
   ]
 },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ],
  resolve: {
    modules: [
        path.resolve('./resources'),
        path.join(process.cwd(), 'app'),
        'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: false
};

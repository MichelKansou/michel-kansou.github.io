var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./resources/js/app.jsx"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    devServer: {
     hot: true,
     inline: true
   },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ya?ml$/, loader: 'json!yaml' },
            {
              test: /\.js[x]?$/,
              loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
              exclude: /(node_modules|bower_components)/
            }

        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
    ]

};

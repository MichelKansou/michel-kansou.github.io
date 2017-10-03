const path = require('path');

module.exports = {
     entry: './resources/js/app.jsx',
     output: {
         path: __dirname + '/build',
         filename: 'bundle.js'
     },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          {
              test: /\.jsx$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          { test: /\.json$/, loader: "json-loader" },
          { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./resources'),
            path.join(process.cwd(), 'app'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    },
 };

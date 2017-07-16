var path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'latest']
          },
        },
        exclude: [/node_modules/],
      }

      // Loaders for other file types can go here
    ],
  },
  resolve: {
    alias: {
      "request$": "xhr"
    }
  }
}
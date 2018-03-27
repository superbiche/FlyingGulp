const path = require('path')
const webpack = require('webpack')
const gulpConfig = require('./config')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [path.resolve(gulpConfig.paths.src.js)],
  },
  output: {
    path: path.resolve(gulpConfig.paths.build.js),
    publicPath: process.env.DIST_PUBLIC_PATH,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  resolve: {
    alias: {
      request$: 'xhr',
      '@js': path.resolve(gulpConfig.paths.src.js),
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  cacheDirectory: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: require.resolve('jquery'),
      jQuery: require.resolve('jquery')
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
}

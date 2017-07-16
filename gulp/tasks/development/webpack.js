const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('../../webpack.config.js')
const config = require('../../config').webpack
const bs = require('browser-sync')

gulp.task('webpack', function () {
  gulp.src(config.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.dest)
    .pipe(bs.stream({match: '**/*.js'}))
})

const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('../../webpack.production')
const config = require('../../config').webpack

gulp.task('webpack:production', function() {
  gulp
    .src(config.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.dest))
})

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('../../webpack.dev')
const config = require('../../config').webpack
const bs = require('browser-sync')

gulp.task('webpack', function() {
  gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.dest))
    .pipe(plumber.stop())
    .pipe(bs.stream({ match: '**/*.js' }))
})

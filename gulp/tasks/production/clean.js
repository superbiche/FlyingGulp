const gulp = require('gulp')
const del = require('del')
const config = require('../../config')
const cleanOptions = config.clean.options

gulp.task('clean:all:production', cb => {
  del(config.clean.development, cleanOptions, cb())
})

gulp.task('clean:styles:production', cb => {
  del([config.sass.dest + '/**/*.min.{css,map}'], cleanOptions, cb())
})

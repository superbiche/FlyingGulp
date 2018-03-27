const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const changed = require('gulp-newer')
const destClean = require('gulp-dest-clean')
const config = require('../../config').images
const imageMinConfig = require('../../config').optimize.images

gulp.task('images', () => {
  return gulp
    .src(config.src)
    .pipe(destClean(config.dest, [], { force: true }))
    .pipe(changed(config.dest))
    .pipe(
      imagemin(Object.assign(imageMinConfig.options, { use: [pngquant()] })),
    )
    .pipe(gulp.dest(config.dest))
})

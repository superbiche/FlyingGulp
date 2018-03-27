const lazyReq = require('lazy-req')(require)
const gulp = require('gulp')
const watch = require('gulp-watch')
const browsersync = lazyReq('browser-sync')
const runSequence = lazyReq('run-sequence')
const config = require('../../config').watch

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync:development'], cb => {
  watch(config.sass, () => {
    runSequence()('sass')
  })

  watch(config.webpack, () => {
    runSequence()('webpack')
  })

  watch(config.images, () => {
    runSequence()('images', browsersync().reload)
  })

  watch(config.vectors, () => {
    runSequence()('svg', browsersync().reload)
  })

  watch(config.fonts, () => {
    runSequence()('copy:fonts:development', browsersync().reload)
  })

  watch(config.sprites, () => {
    runSequence()('sprites', browsersync().reload)
  })

  watch(config.templates, () => {
    browsersync().reload()
  })
})

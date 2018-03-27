const gulp = require('gulp')
const browsersync = require('browser-sync')
const config = require('../../config').browsersync.development

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync:development', ['build'], () => {
  browsersync(config)
})

const gulp = require('gulp')
const browsersync = require('browser-sync')
const config = require('../../config').browsersync.production

/**
 * Start a server and watch changes with BrowserSync
 */
gulp.task('browsersync:production', ['build:production'], () => {
  browsersync()(config)
})

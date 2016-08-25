var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var browsersync = lazyReq('browser-sync')();
var config = require('../../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync:development', () => {
  browsersync(config);
});
var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var browsersync = lazyReq('browser-sync');
var config = require('../../config').browsersync.production;

/**
 * Start a server and watch changes with BrowserSync
 */
gulp().task('browsersync:production', ['build:production'], () => {
  browsersync()(config);
});
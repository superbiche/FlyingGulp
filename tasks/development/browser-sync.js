const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
var bs = lazyReq('browser-sync');

const config = require('../../config').browsersync.development;
/**
 * Run the build task and start a server with BrowserSync
 */
gulp().task('browsersync:development', ['build'], () => {
  bs().create();
  bs().init(config);
});
const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const browsersync = lazyReq('browser-sync');

const config = require('../../config').browsersync.production;

gulp().task('browsersync:production', ['build:production'], () => {
  browsersync()(config);
});
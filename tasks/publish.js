var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');

/**
 * Run task browsersync:production
 */
gulp().task('publish', ['browsersync:production']);
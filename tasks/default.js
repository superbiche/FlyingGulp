var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');

gulp().task('default', [
  'watch'
]);
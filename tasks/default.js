const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');

gulp().task('default', [
  'watch'
]);
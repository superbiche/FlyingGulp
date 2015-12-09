var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var shell = lazyReq('gulp-shell');

/**
 * Generate fonts with Fontcustom
 * `brew install fontforge --with-python`
 * `brew install eot-utils`
 */
gulp().task('fontcustom', ['clean:iconFonts'], shell().task([
  'bundle exec fontcustom compile'
]));
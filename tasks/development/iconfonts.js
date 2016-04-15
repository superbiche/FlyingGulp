const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp')();
const iconfont = lazyReq('gulp-iconfont')();
const consolidate = lazyReq('gulp-consolidate')();
const config = require('../../config').iconfonts;
const runTimestamp = Math.round(Date.now() / 1000);
/**
 * Generate fonts with gulp-iconfont
 */
gulp.task('iconfonts', ['clean:iconFonts'], (cb) => {
  gulp.src(config.src)
    .pipe(iconfont(Object.assign(config.options.font, { timestamp: runTimestamp })))
    .on('glyphs', function (glyphs) {
      gulp.src(config.options.css.templatePath)
        .pipe(consolidate('lodash', {
          glyphs: glyphs
          , fontName: 'icons'
          , fontPath: '../fonts/'
          , className: 'icon'
        }))
        .pipe(gulp.dest(config.options.css.dest));
    })
    .pipe(gulp.dest(config.dest));
  cb;
});
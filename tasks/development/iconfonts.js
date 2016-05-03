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
    .pipe(iconfont(Object.assign(config.options, { timestamp: runTimestamp })))
    .on('glyphs', function (glyphs, options) {
      gulp.src(config.options.cssTemplatePath)
        .pipe(consolidate('lodash', {
          glyphs: glyphs, 
          fontName: options.fontName,
          fontPath: options.cssFontPath,
          className: options.cssClassName
        }))
        .pipe(gulp.dest(config.options.cssDest));
    })
    .pipe(gulp.dest(config.dest));
  cb;
});
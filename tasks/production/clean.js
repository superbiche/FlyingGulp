var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var del = lazyReq('del')();
var config = require('../../config');
var cleanOptions = config.clean.options;

gulp.task('clean:all:production', (cb) => {
  del(config.clean.production,
    cleanOptions,
    cb()
  );
});

gulp.task('clean:scripts:production', (cb) => {
  del([
      config.scripts.productionDest + 'footer.min.{js,map}',
    ],
    cleanOptions,
    cb()
  );
});

gulp.task('clean:styles:production', (cb) => {
  del([
      config.sass.productionDest + '/**/*.min.{css,map}'
    ],
    cleanOptions,
    cb()
  );
});
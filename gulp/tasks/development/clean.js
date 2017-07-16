var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var del = lazyReq('del')();
var config = require('../../config');
var cleanOptions = config.clean.options;

gulp.task('clean', [
  'clean:styles', 
  'clean:scripts:all', 
  'clean:iconFonts'/*,
  'clean:images'*/
]);

gulp.task('clean:styles', (cb) => {
  del([
      config.sass.dest + '/**/*.{css,map}'
    ],
    cleanOptions,
    cb()
  );
});

gulp.task('clean:scripts:all', (cb) => {
  del([
      config.scripts.dest + '**/*.{js,map}',
    ],
    cleanOptions,
    cb()
  );
});

gulp.task('clean:scripts:head', (cb) => {
  del([
      config.scripts.dest + 'head.min.js',
    ],
    cleanOptions,
    cb()
  );
});

gulp.task('clean:scripts:vendor', (cb) => {
  del([
      config.scripts.dest + 'vendor.js',
    ],
    cleanOptions,
    cb()
  );
});

gulp.task('clean:scripts:app', (cb) => {
  del([
      config.scripts.dest + 'app.{js,map}',
    ],
    cleanOptions,
    cb()
  );
});

gulp.task('clean:iconFonts', (cb) => {
  del(config.copy.iconFonts.dest + '*',
    cleanOptions,
    cb()
  );
});
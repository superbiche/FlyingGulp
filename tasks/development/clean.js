var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var del = lazyReq('del');
var config = require('../../config');
var cleanOptions = config.clean.options;

gulp().task('clean', [
  'clean:styles', 
  'clean:scripts:all', 
  'clean:iconFonts',
  'clean:images'
]);

gulp().task('clean:styles', function (cb) {
  del()([
      config.sass.dest + '/**/*.{css,map}'
    ],
    cleanOptions,
    cb()
  );
});

gulp().task('clean:scripts:all', function (cb) {
  del()([
      config.scripts.dest + '**/*.{js,map}',
    ],
    cleanOptions,
    cb()
  );
});

gulp().task('clean:scripts:head', function (cb) {
  del()([
      config.scripts.dest + 'head.min.js',
    ],
    cleanOptions,
    cb()
  );
});

gulp().task('clean:scripts:vendor', function (cb) {
  del()([
      config.scripts.dest + 'vendor.js',
    ],
    cleanOptions,
    cb()
  );
});

gulp().task('clean:scripts:app', function (cb) {
  del()([
      config.scripts.dest + 'app.{js,map}',
    ],
    cleanOptions,
    cb()
  );
});

gulp().task('clean:iconFonts', function (cb) {
  del()(config.copy.iconFonts.dest + '*',
    cleanOptions,
    cb()
  );
});

gulp().task('clean:images', function (cb) {
  del()(config.images.dest + '/*',
    cleanOptions,
    cb()
  );
})
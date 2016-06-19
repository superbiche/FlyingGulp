const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const del = lazyReq('del');

const config = require('../../config');
const cleanOptions = config.clean.options;

gulp().task('clean', [
  'clean:styles', 
  'clean:scripts:all', 
  'clean:iconFonts'
]);

gulp().task('clean:styles', (cb) => {
  del()([
      config.sass.dest + '/**/*.{css,map}'
    ],
    cleanOptions,
    cb
  );
});

gulp().task('clean:scripts:all', (cb) => {
  del()([
      config.scripts.dest + '**/*.{js,map}',
    ],
    cleanOptions,
    cb
  );
});

gulp().task('clean:scripts:head', (cb) => {
  del()([
      config.scripts.dest + 'head.min.js',
    ],
    cleanOptions,
    cb
  );
});

gulp().task('clean:scripts:vendor', (cb) => {
  del()([
      config.scripts.dest + 'vendor.js',
    ],
    cleanOptions,
    cb
  );
});

gulp().task('clean:scripts:app', (cb) => {
  del()([
      config.scripts.dest + 'app.{js,map}',
    ],
    cleanOptions,
    cb
  );
});

gulp().task('clean:iconFonts', (cb) => {
  del()(config.copy.iconFonts.dest + '*',
    cleanOptions,
    cb
  );
});
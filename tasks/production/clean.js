const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const del = lazyReq('del');

const config = require('../../config');
const cleanOptions = config.clean.options;

gulp().task('clean:all:production', (cb) => {
  del()(config.clean.production,
    cleanOptions,
    cb()
  );
});

gulp().task('clean:scripts:production', (cb) => {
  del()([
      config.scripts.productionDest + 'footer.min.{js,map}',
    ],
    cleanOptions,
    cb()
  );
});

gulp().task('clean:styles:production', (cb) => {
  del()([
      config.sass.productionDest + '/**/*.min.{css,map}'
    ],
    cleanOptions,
    cb()
  );
});
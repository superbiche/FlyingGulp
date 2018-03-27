const gulp = require('gulp')
const del = require('del')
const config = require('../../config');
const cleanOptions = config.clean.options;

gulp.task('clean', [
  'clean:styles'
]);

gulp.task('clean:styles', (cb) => {
  del([
      config.sass.dest + '/**/*.{css,map}'
    ],
    cleanOptions,
    cb()
  );
});

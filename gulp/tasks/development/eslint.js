const gulp = require('gulp')
const eslint = require('gulp-eslint')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const plumber = require('gulp-plumber')
const config = require('../../config').webpack // TODO should have own config

gulp.task('eslint', () => {
  gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(
      eslint({
        // TODO move to config
        useEslintrc: true,
        ecmaFeatures: {
          modules: true,
          module: true,
        },
        env: {
          mocha: true,
          node: true,
          es6: true,
        },
      }),
    )
    .pipe(eslint.format())
    .pipe(plumber.stop())
})

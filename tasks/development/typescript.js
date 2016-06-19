const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const typescript = lazyReq('gulp-typescript');
const sourcemaps = lazyReq('gulp-sourcemaps');
const tslint = lazyReq('gulp-tslint');
const stylish = lazyReq('gulp-tslint-stylish');
const changedInPlace = lazyReq('gulp-changed-in-place');
const bs = lazyReq('browser-sync');

//const cache = lazyReq('gulp-cached');

const config = require('../../config').typescript.development;
const tsLintConf = require('../../tslint.json');


gulp().task('typescript', function () {
  var tsProject = typescript().createProject('tsconfig.json');

  return gulp().src(config.src)
    .pipe(changedInPlace()())
    //.pipe(cache()('typescript'))
    .pipe(sourcemaps().init())
    .pipe(tslint()({
      configuration: tsLintConf
    }))
    .pipe(tslint().report(stylish(), {
      emitError: false,
      sort: true,
      bell: true
    }))
    .pipe(typescript()(tsProject))
    //.pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: '/app/src'}))
    .pipe(gulp().dest(config.dest))
    .pipe(bs().stream());
});



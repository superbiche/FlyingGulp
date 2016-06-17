const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const bower = lazyReq('bower');
const fsExtra = lazyReq('fs-extra');

const config = require('../../config');

gulp().task('bower:install', ['bower:copyJson'], (cb) => {

  bower().commands.install([], {
    save: true
  }, {})
    .on('end', function (installed) {
      cb();
    });
});

gulp().task('bower:copyJson', (cb) => {
  fsExtra().copySync(
    config.bower.jsonFile, 
    './bower.json'
  );
  cb();
});
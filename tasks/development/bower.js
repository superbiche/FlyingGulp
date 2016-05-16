var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var bower = lazyReq('bower');
var fsExtra = lazyReq('fs-extra');
var config = require('../../config');

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
var fs = require('fs');
var notify = require("gulp-notify");
var config = require('../config').watch;

module.exports = function () {
  try {
    fs.statSync(config.lockFile).isFile();
  } catch (e) {
    return false;
  }
  return true;
};

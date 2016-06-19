module.exports = function(name, opts) {
  var bs = require('browser-sync');
  opts = opts || {};

  if (bs.has(name)) {
    return bs.get(name).stream(opts);
  }
  return null;
};
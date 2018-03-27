var lazyReq = require('lazy-req')(require)
var gulp = require('gulp')
var spritesmith = require('gulp.spritesmith')
// var buffer = require('vinyl-buffer');
// var merge = require('merge-stream');
var config = require('../../config').sprites
var fs = require('fs')
var path = require('path')
var glob = require('glob').sync

/**
 * Generate sprites and css files from PNGs
 */
gulp.task('sprites', cb => {
  var spritesPath = config.src,
    sprite = {},
    filePath

  if (!fs.existsSync(path.resolve(spritesPath))) return cb()

  // First process base sprite (images not in a subdirectory)
  sprite.data = gulp
    .src(path.join(spritesPath, '*.png'))
    .pipe(spritesmith(config.options))
  sprite.data.img.pipe(gulp.dest(config.dest.image))
  sprite.data.css.pipe(gulp.dest(config.dest.css))

  fs.readdirSync(spritesPath).forEach(function(el, i) {
    var fileStat, spriteName
    filePath = path.join(spritesPath, el)
    fileStat = fs.statSync(filePath)

    if (fileStat.isDirectory()) {
      spriteName = 'sprite-' + el
      // Build sprite data from this subdirectory
      config.options.imgName = spriteName + '.png'
      config.options.cssName = spriteName + '.css'
      sprite.data = gulp
        .src(path.join(filePath, '*.png'))
        .pipe(spritesmith(config.options))
      sprite.data.img.pipe(gulp.dest(config.dest.image))
      sprite.data.css.pipe(gulp.dest(config.dest.css))
    }
  })
  cb()
  // Process each sprite

  // for (var i = 0, j = sprites.length; i < j; i++) {
  //   sprite = {};
  //   sprite.name = sprites[i];
  //   sprite.dir = path.join(spritesDir, sprite.name, '**', '*.png');
  //
  //   config.options.imgName = 'sprite-' + sprite.name + '.png';
  //   config.options.imgPath = '../img/' + config.options.imgName;
  //
  //   sprite.data = gulp().src(sprite.dir)
  //       .pipe(spritesmith()(config.options));
  //
  //   sprite.data.img.pipe(gulp().dest(config.dest.image));
  //   sprite.data.css.pipe(gulp().dest(config.dest.css));
  // }
})

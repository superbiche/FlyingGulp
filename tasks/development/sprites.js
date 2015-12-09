var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var spritesmith = lazyReq('gulp.spritesmith');
var config = require('../../config').sprites;
var fs = require('fs');
var path = require('path');

/**
 * Generate sprites and css files from PNGs
 */
gulp().task('sprites', function () {

  var spritesDir = config.src;
  var sprites = fs.readdirSync(spritesDir);

  var sprite;

  for (var i = 0, j = sprites.length; i < j; i++) {
    sprite = {};
    sprite.name = sprites[i];
    sprite.dir = path.join(spritesDir, sprite.name, '**', '*.png');

    config.options.imgName = 'sprite-' + sprite.name + '.png';
    config.options.imgPath = '../img/' + config.options.imgName;

    sprite.data = gulp().src(sprite.dir)
        .pipe(spritesmith()(config.options));

    sprite.data.img.pipe(gulp().dest(config.dest.image));
    sprite.data.css.pipe(gulp().dest(config.dest.css));
  }
});
/**
 * Gulp Workflow project configuration
 */

require('dotenv').config()   

var projectUrl        = process.env.FG_PROJECT_URL,
    srcAssets         = '../src',
    buildAssets       = '../dist',
    sassIgnore        = ['KNACSS', 'bourbon'],
    sassIgnorePrefix  = srcAssets + '/scss/vendor',
    sassIgnoreLength  = sassIgnore.length;

while (sassIgnoreLength--) {
  sassIgnore[sassIgnoreLength] = '!' + sassIgnorePrefix + '/' + sassIgnore[sassIgnoreLength] + '/**/*.{sass,scss}';
}

module.exports = {
  paths: {
    srcAssets: srcAssets,
    buildAssets: buildAssets
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 2.3'
    ],
    cascade: true
  },
  base64: {
    options: {
      baseDir: buildAssets + '/css',
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    },
    src: buildAssets + '/css/**/*.css',
    dest: buildAssets + '/css'
  },
  browsersync: {
    development: {
      proxy: projectUrl,
      files: [
        buildAssets + '/css/*.css',
        '!' + buildAssets + '/css/*.min.{css,map}',
      ]
    },
    production: {
      proxy: projectUrl,
      port: 9998
    }
  },
  clean: {
    development: [
      buildAssets + '/{css,fonts,js,img}/**/*'
    ],
    options: {
      force: true
    }
  },
  copy: {
    fonts: {
      development: {
        src: [
          srcAssets + '/fonts/**/*',
          '!' + srcAssets + '/fonts/iconfont',
          '!' + srcAssets + '/fonts/iconfont/**/*'
        ],
        dest: buildAssets + '/fonts'
      }
    },
    iconFonts: {
      src: srcAssets + '/fonts/iconfont/**/*',
      dest: buildAssets + '/fonts/iconfont'
    }
  },
  iconfonts: {
    src: srcAssets + '/images/vectors/**/*.svg',
    dest: srcAssets + '/fonts/iconfonts/',
    options: {
      fontName: 'iconfont',
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      autohint: true,
      normalize: true,
      cssTemplatePath: 'gulp/util/templates/_iconfonts.scss',
      cssFontPath: '../fonts/iconfonts/',
      cssDest: srcAssets + '/scss/base',
      cssClassName: 'icon'
    },

  },
  images: {
    src: [
      srcAssets + '/images/**/*.{png,jpg,svg,gif,ico}', 
      '!' + srcAssets + '/images/{sprites,vectors}', 
      '!' + srcAssets + '/images/{sprites,vectors}/**/*'
    ],
    dest: buildAssets + '/img'
  },
  optimize: {
    css: {
      src: buildAssets + '/css/*.css',
      dest: buildAssets + '/css/',
      options: {
        compatibility: 'ie8'
      }
    },
    images: {
      src: buildAssets + '/img/**/*.{jpg,jpeg,png,gif,svg}',
      dest: buildAssets + '/img/',
      options: {
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
      }
    }
  },
  sass: {
    src: sassIgnore.concat([srcAssets + '/scss/*.{sass,scss}']),
    dest: buildAssets + '/css',
    options: {
      errLogToConsole: true
    }
  },
  sprites: {
    src: srcAssets + '/images/sprites',
    dest: {
      css: srcAssets + '/scss/base/',
      image: srcAssets + '/images/'
    },
    options: {
      cssName: '_sprites.scss',
      cssFormat: 'scss',
      cssOpts: {
        cssClass: function (item) {
          // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
          if (item.name.indexOf('-hover') !== -1) {
            return '.icon-' + item.name.replace('-hover', ':hover');
            // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
          } else {
            return '.icon-' + item.name;
          }
        }
      },
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png'
    }
  },
  watch: {
    vectors: srcAssets + '/images/vectors/**/*',
    images: [
      srcAssets + '/images/**/*',
      '!' + srcAssets + '/images/sprites', // ignore sprites folder
      '!' + srcAssets + '/images/vectors' // ignore iconfonts folder
    ],
    sass: srcAssets + '/scss/**/*.{sass,scss}',
    scripts: {
      app: srcAssets + '/javascripts/**/*.js',
      vendor: [srcAssets + '/_bower_components/*', srcAssets + '/javascripts/scripts-map.js'],
      head: [srcAssets + '/javascripts/head.js', srcAssets + '/javascripts/scripts-map.js'],
      scriptsMap: srcAssets + '/javascripts/scripts-map.js'
    },
    sprites: srcAssets + '/images/sprites/**/*',
    fonts: srcAssets + '/fonts/**/*',
    templates: [srcAssets + '/**/*.{html,inc,php}']

  },
  webpack: {
    src: 'src/**/*.js',
    dest: './dist',
  }
};
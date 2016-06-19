/**
 * Gulp Workflow project configuration
 */
var projectUrl        = 'http://example.dev',
    srcAssets         = '../assets/src',
    buildAssets       = '../assets/build',
    productionAssets  = '../assets',
    bowerJsonPath     = '../assets/src/bower.json',
    sassIgnore        = ['KNACSS', 'bourbon'],
    sassIgnorePrefix  = srcAssets + '/scss/vendor',
    sassIgnoreLength  = sassIgnore.length;

var jsList = require(srcAssets + '/javascripts/scripts-map.js');

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
  bower: {
    jsonFile: bowerJsonPath
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
    production: [
      productionAssets + '/{css,fonts,js,img}/**/*',
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
      },
      production: {
        src: buildAssets + '/fonts/**/*',
        dest: productionAssets + '/fonts'
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
      cssTemplatePath: 'templates/_iconfonts.scss',
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
  jshint: {
    src: [
      srcAssets + '/javascripts/**/*.js',
      '!' + srcAssets + '/javascripts/vendor/**/*.js'
    ]
  },
  jspm: {
    bundles: {
      
    }
  },
  optimize: {
    css: {
      src: buildAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        compatibility: 'ie8'
      }
    },
    js: {
      head: {
        src: [
          buildAssets + '/js/head.js'
        ],
        name: 'head.js'
      },
      footer: {
        src: [
          buildAssets + '/js/vendor.js',
          buildAssets + '/js/app.js'
        ],
        name: 'footer.js'
      },
      dest: productionAssets + '/js'
    },
    images: {
      src: buildAssets + '/img/**/*.{jpg,jpeg,png,gif,svg}',
      dest: productionAssets + '/img/',
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
  scripts: {
    dest: buildAssets + '/js/',
    head: {
      src: jsList.getBundleList('head', srcAssets + '/'),
      minify: true
    },
    app: {
      src: jsList.getBundleList('app', srcAssets + '/javascripts/')
    },
    vendor: {
      src: jsList.getBundleList('vendor', srcAssets + '/')
    },
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
  typescript: {
    development: {
      src: [srcAssets + '/ts/**/*.ts'],
      dest: srcAssets + '/js',
    },
  },
  watch: {
    vectors: srcAssets + '/images/vectors/**/*',
    images: [
      srcAssets + '/images/**/*',
      '!' + srcAssets + '/images/sprites', // ignore sprites folder
      '!' + srcAssets + '/images/vectors' // ignore iconfonts folder
    ],
    sass: srcAssets + '/scss/**/*.{sass,scss}',
    typescript: [
      srcAssets + '/ts/**/*.ts',
      srcAssets + '/jspm.config.js'
    ],
    scripts: {
      app: srcAssets + '/javascripts/**/*.js',
      vendor: [srcAssets + '/_bower_components/*', srcAssets + '/javascripts/scripts-map.js'],
      head: [srcAssets + '/javascripts/head.js', srcAssets + '/javascripts/scripts-map.js'],
      scriptsMap: srcAssets + '/javascripts/scripts-map.js'
    },
    sprites: srcAssets + '/images/sprites/**/*',
    fonts: srcAssets + '/fonts/**/*',
    templates: [srcAssets + '/**/*.{html,inc,php}']

  }
};
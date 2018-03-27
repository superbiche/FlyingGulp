/**
 * Gulp Workflow project configuration
 */

const path = require('path')
require('dotenv').config()

var projectUrl = process.env.BS_PROXY_URL,
  srcAssets = path.resolve('src'),
  buildAssets = path.resolve('dist'),
  templatesDir = path.resolve('templates'),
  sassIgnore = [],
  sassIgnorePrefix = path.join(srcAssets, 'styles', 'vendor'),
  sassIgnoreLength = sassIgnore.length

while (sassIgnoreLength--) {
  sassIgnore[sassIgnoreLength] =
    '!' +
    sassIgnorePrefix +
    '/' +
    sassIgnore[sassIgnoreLength] +
    '/**/*.{sass,scss}'
}

module.exports = {
  paths: {
    srcAssets: srcAssets,
    buildAssets: buildAssets,
    src: {
      js: path.join(srcAssets, 'js'),
    },
    build: {
      // @todo clean
      js: path.join(buildAssets, 'js'),
    },
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'opera 12.1',
      'ios 7',
      'android 2.3',
      'not ie < 10',
    ],
    cascade: true,
  },
  base64: {
    options: {
      baseDir: path.join(buildAssets, 'css'),
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false,
    },
    src: buildAssets + '/css/**/*.css',
    dest: path.join(buildAssets, 'css'),
  },
  browsersync: {
    development: {
      proxy: projectUrl,
      port: 3001,
      files: [
        buildAssets + '/css/*.css',
        '!' + buildAssets + '/css/*.min.{css,map}',
      ],
    },
    production: {
      proxy: projectUrl,
      port: 3009,
    },
  },
  clean: {
    development: [buildAssets + '/{css,fonts,js,img}/**/*'],
    options: {
      force: true,
    },
  },
  copy: {
    fonts: {
      development: {
        src: [
          srcAssets + '/fonts/**/*',
          '!' + srcAssets + '/fonts/iconfont',
          '!' + srcAssets + '/fonts/iconfont/**/*',
        ],
        dest: buildAssets + '/fonts',
      },
    },
  },
  images: {
    src: [
      srcAssets + '/img/**/*.{png,jpg,svg,gif,ico}',
      '!' + srcAssets + '/img/{sprites,vectors}',
      '!' + srcAssets + '/img/{sprites,vectors}/**/*',
    ],
    dest: buildAssets + '/img',
  },
  optimize: {
    css: {
      src: buildAssets + '/css/*.css',
      dest: buildAssets + '/css/',
      options: {
        compatibility: 'ie8',
      },
    },
    images: {
      src: buildAssets + '/img/**/*.{jpg,jpeg,png,gif,svg}',
      dest: buildAssets + '/img/',
      options: {
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
      },
    },
  },
  sass: {
    src: sassIgnore.concat([srcAssets + '/styles/*.{sass,scss}']),
    dest: buildAssets + '/css',
    options: {
      outputStyle: 'expanded',
      errLogToConsole: true,
    },
  },
  sprites: {
    src: srcAssets + '/img/sprites',
    dest: {
      css: srcAssets + '/styles/base/',
      image: srcAssets + '/img/',
    },
    options: {
      cssName: '_sprites.scss',
      cssFormat: 'scss',
      cssOpts: {
        cssClass: function(item) {
          // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
          if (item.name.indexOf('-hover') !== -1) {
            return '.icon-' + item.name.replace('-hover', ':hover')
            // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
          } else {
            return '.icon-' + item.name
          }
        },
      },
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
    },
  },
  svg: {
    src: `${srcAssets}/svg/**/*.svg`,
    dest: `.`,
    svgSprite: {
      shape: {
        dimension: {
          maxWidth: 32,
          maxHeight: 32,
        },
        spacing: {
          padding: 0,
        },
      },
      mode: {
        symbol: {
          dest: '.',
          sprite: `${buildAssets}/sprite.symbol.svg`,
        },
      },
    },
  },
  watch: {
    vectors: srcAssets + '/svg/**/*',
    images: [
      srcAssets + '/img/**/*',
      '!' + srcAssets + '/img/sprites', // ignore sprites folder
    ],
    sass: srcAssets + '/styles/**/*.{sass,scss}',
    sprites: srcAssets + '/img/sprites/**/*',
    fonts: srcAssets + '/fonts/**/*',
    templates: ['./**/*.{html,inc,php}'],
    webpack: srcAssets + '/**/*.js',
  },
  webpack: {
    src: 'src/**/*.js',
    dest: './dist',
  },
}

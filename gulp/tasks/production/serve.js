const gulp = require('gulp')
const browsersync = require('browser-sync')
const ngrok = require('ngrok')
const chalk = require('chalk')
const config = require('../../config').browsersync.production

gulp.task('serve:production', ['build:production'], () => {
  browsersync(config, (err, bs) => {
    ngrok.connect(bs.options.get('port'), (err, url) => {
      console.log(
        chalk.green(
          `Ngrok tunnel running - App testable on ${chalk.blue(url)}`,
        ),
      )
    })
  })
})

/**
 *
 * Gulp Workflow
 *
 * Based on gulp-starter by greypants https://github.com/greypants/gulp-starter, MIT Licence
 * Based on the serie of tutorials by Stefan Imhoff http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/, CC Licence
 * Based on COG theme for Drupal 8 by Acquia @todo URL
 * @author Michel Tomas (michel@superbiche.me)
 * @licence MIT
 * @see README.md
 */

const requireDir = require('require-dir')

// Require all tasks in gulp/tasks recursively
requireDir('./gulp/tasks', {
  recurse: true,
})

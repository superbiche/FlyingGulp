/**
 *
 * Drupal 7 Gulp Workflow
 *
 * Based on gulp-starter by greypants https://github.com/greypants/gulp-starter, MIT Licence
 * Based on the serie of tutorials by Stefan Imhoff http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/, CC Licence
 * @author Michel Tomas (michel@superbiche.me)
 * @licence MIT
 * @see README.md
 */

/*
  gulpfile.js
  ===========
  Rather than managing one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.
  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks recursively
requireDir('./util', {
  recurse: true
});

requireDir('./tasks', {
  recurse: true
});
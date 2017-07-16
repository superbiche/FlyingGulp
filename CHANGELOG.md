# Changelog 
## 0.4.0 -  
  * Add Webpack to manage JS/Babel for now and prepare for a progressive move to all Webpack.
  * Add dotenv to manage environment variables
## 0.3.1 -  
  * 
  * Rewrite task callbacks to arrow functions  
  * Fix node-sass bindings  
  * Fix typo in iconfonts template  
  * Fix missing callbacks that were breaking run-sequence  
## 0.3.0 - 
  * Changed the icon font generator to gulp-iconfont  
  * Updated deprecated dependencies  
## 0.2.8 -
  * This is mainly a cleaning release to enhance on a good basis 
    * Removed publish task (not used, and will not be by our team for now)
    * Removed revision related tasks & config (not used for now, will come back when used again)
    * Cleaned config file
    * Re-added package.json in repo
    * Removed scss-lint tasks to try to get rid on Ruby tasks here
## 0.2.7 - 
  * Moved the yeoman generator wrapping this workflow to another repo to ease development  
  * Upgraded packages to use with Node.js v5.x
  * Sprites task now supports multiple PNG sprites (images/sprites subdirectories)  

(the tags below are only here for documentation purpose, as the project split in 2 parts from 0.2.6)  

## 0.2.6 -
  * Fixed sass crashing on errors  
  * Renamed scss-lint to scss_lint in Gemfile to match renamed gem  
  * Updating scripts-map.js fires rebuilding javascript files
  * Added gulp-plumber to scripts.js tasks after many breaks due to JS errors

## 0.2.5 - Fixed an error that made sass compile in subfolders instead of using only root dir files  

## 0.2.3 - Fixed an error in jshint task.  

## 0.2.2 - Fixed a wrong dirname in sprites css image path  

## 0.2.0 - Implemented gulp-group-css-media-queries to group similar media queries when optimizing css    

## 0.1.1 - Fixed watch main task not implementing the templates watch    

## 0.1.0 - Many improvements and code cleaning. Should be stable enough to use in every-day workflow.  
  * Removed gulp-load-plugins by using the basic require() calls to be faster  
  * Unified the way callbacks are called (cb in runSequence sequences, cb() elsewhere)  
  * Implemented lazy-req and replaced almost each require() with lazy-requires  

## 0.0.7 - Many bugs appearing in real-life projects should have been fixed:  
  * Fixed uglify task messing with the order of scripts (app scripts were bundled before libraries)  
  * Fixed a bug that prevented development clean task to run before build  
  * Now using gulp-watch instead of gulp's native watch task to allow triggering change event on new/deleted files/directories  
  * Reworked images development task to minify images on-the-fly and not only for production  
  * Images are cleaned when a development build is run, to avoid keeping unused images
  * Uses diacritics to remove accents from project name to use in json files (bower.json, package.json)

## 0.0.6 - Fixed a bug in production copy task.  

## 0.0.5 - Added templates (php, inc, html) to the watched items (page reload is triggered on change)  

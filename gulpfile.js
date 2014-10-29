'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var del = require('del');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var reactify = require('reactify');
var browserify = require('browserify');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');

var ASSET_PATH = './app/assets/';

var SRC_PATH = ASSET_PATH + 'src/';
var BUILD_PATH = ASSET_PATH + 'build/';

var PATHS = {
  css: [SRC_PATH + 'css/styles.scss'],
  css_watch: [SRC_PATH + 'css/**/*.scss'],
  app_js: [SRC_PATH + 'js/app.js'],
  js: [SRC_PATH + 'js/**/*.js', SRC_PATH + 'js/**/*.jsx'],

};

gulp.task('clean', function(done){
  del([BUILD_PATH], done);
});

gulp.task('css', function() {
  return gulp.src(PATHS.css)
  .pipe(plumber())
  .pipe(sass())
  .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
  .pipe(gulp.dest(BUILD_PATH + 'css/'));

});

gulp.task('js', function() {
  return browserify(PATHS.app_js)
  .pipe(plumber())
  .transform(reactify))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(BUILD_PATH + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(PATHS.css_watch, ['css']);
  gulp.watch(PATHS.js, ['js']);
});

gulp.task('assets', ['css', 'js']);
gulp.task('default', ['watch', 'css', 'js']);

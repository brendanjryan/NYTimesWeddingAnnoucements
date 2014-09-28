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

var ASSET_PATH = './app/assets/';

var SRC_PATH = ASSET_PATH + 'src/';
var BUILD_PATH = ASSET_PATH + 'build/';

var PATHS = {
  css: [SRC_PATH + 'css/styles.scss'],
  app_js: [SRC_PATH + 'js/app.js'],
  components: [SRC_PATH + 'js/components/**/*.js'],
};

gulp.task('clean', function(done){
  del([BUILD_PATH], done);
});

gulp.task('css', ['clean'], function() {
  console.log(PATHS.css)

  return gulp.src(PATHS.css)
  .pipe(sass()).on('error', gutil.log)
  .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true })).on('error', gutil.log)
  .pipe(gulp.dest(BUILD_PATH + 'css/'));

});

gulp.task('js', ['clean'], function() {
  browserify(PATHS.app_js)
  .transform(reactify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(BUILD_PATH + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(PATHS.css, ['css']);
  gulp.watch(PATHS.components, ['js']);
});

gulp.task('default', ['watch', 'css', 'js']);

var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return runSequence(
    ['copy-dist', 'copy-img', 'copy-styles', 'copy-loader', 'copy-root', 'copy-config', 'copy-fonts'], 'deploy-gh-pages');
});


gulp.task('copy-dist', function() {
  return gulp.src('./dist/**/*')
    .pipe(gulp.dest('./gh-pages/dist'));
});

gulp.task('copy-img', function() {
  return gulp.src('./img/**/*')
    .pipe(gulp.dest('./gh-pages/img'));
});

gulp.task('copy-styles', function() {
  return gulp.src('./jspm_packages/github/twbs/**/*.woff')
    .pipe(gulp.dest('./gh-pages/jspm_packages/github/twbs'));
});

gulp.task('copy-fonts', function() {
  return gulp.src('./styles/**/*')
    .pipe(gulp.dest('./gh-pages/styles'));
});

gulp.task('copy-loader', function() {
  return gulp.src('./loader/**/*')
    .pipe(gulp.dest('./gh-pages/loader'));
});

gulp.task('copy-root', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./gh-pages'));
});

gulp.task('copy-config', function() {
  return gulp.src('./config.js')
    .pipe(gulp.dest('./gh-pages'));
});

gulp.task('deploy-gh-pages', function() {
  return gulp.src('./gh-pages/**/*')
   .pipe(ghPages());
});
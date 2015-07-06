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

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('deploy-aurelia', function() {
  //console.log(fs);//fs.move("lib/aurelia.js", "dist/aurelia.js");
  gulp.src('./lib/aurelia.js')
  .pipe(gulp.dest('./dist'));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'deploy-aurelia'],
    'bundle-app',
    callback
  );
});


gulp.task('deploy', function() {
  return runSequence(
    'build-prod',
    'bundle-app',
    ['copy-aurelia', 'copy-dist', 'copy-img', 'copy-loader', 'copy-styles', 'copy-root', 'copy-config'], 'deploy-gh-pages');
});

gulp.task('copy-aurelia', function() {
  return gulp.src('./lib/**/*')
    .pipe(gulp.dest('./gh-pages/dist'));
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

gulp.task('build-prod', function(callback) {
  return runSequence(
    'build',
    'bundle',
    'bundle-app',
    callback
  );
});

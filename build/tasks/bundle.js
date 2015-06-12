var gulp = require('gulp');
var jspm = require('jspm');
var fs = require('fs');
var exec = require('child_process').exec;

var filesize = require('filesize');
var gzipSize = require('gzip-size');

/**
 * Bundle aurelia-framework into one file
 */
gulp.task('bundle', function (done) {

  var distFile = 'aurelia.js';

  jspm.bundle(
    [
      'aurelia-bootstrapper',
      'aurelia-http-client',
      'aurelia-dependency-injection',
      'aurelia-framework',
      'aurelia-router',

      'github:aurelia/animator-css@0.3.2',
      'github:aurelia/event-aggregator@0.5.0',
      'github:aurelia/templating@0.12.1',
      'github:aurelia/history@0.5.0',
      'github:aurelia/history-browser@0.5.0',
      'github:aurelia/templating-router@0.13.0',
      'github:aurelia/templating-resources@0.12.1',
      'github:aurelia/templating-binding@0.12.0',
      'github:aurelia/binding@0.7.1',
      'github:aurelia/loader-default@0.8.0',
      'github:aurelia/logging-console@0.5.0'

    ].join(' + '),
    distFile,
    {inject:true,minify:false}
  ).then(function(){
      showStats(distFile);
      fs.rename(distFile, 'lib/aurelia.js', done);
  });

});

gulp.task('bundle-app', function (done) {

  var distFile = 'app-bundle.js';

  if(fs.existsSync('dist/' + distFile)){
    fs.unlinkSync('dist/'+ distFile);
  }

  var cmd =  "**/* - aurelia";// - core-js";
  jspm.bundle(cmd,distFile,
    {inject:true,minify:false}
  ).then(function(){
      showStats(distFile);
      fs.rename(distFile, 'dist/app-bundle.js', done);
    });

});

/**
 * unbundle the aurelia-framework and use separate files again
 */
gulp.task('unbundle', function (done) {
  exec('jspm unbundle', function() {
    done();
  });
});

function showStats(distFile) {
  if(!fs.existsSync(distFile)) return null;

  var stats = fs.statSync(distFile);
  var cssFile = distFile.substr(0,distFile.lastIndexOf("."))+".css";

  var cssExists = fs.existsSync(cssFile);
  var cssStats;
  if(cssExists) cssStats = fs.statSync(cssFile);
  console.log("=============== REPORT ================");
  if(cssExists) console.log("Javascript Bundle");
  console.log("minified and mangled : " + filesize(stats.size));
  console.log("gzip: " + filesize(gzipSize.sync(fs.readFileSync(distFile))));

  if(cssExists) {
    console.log("");
    console.log("CSS Bundle");
    console.log("minified and mangled : " + filesize(cssStats.size));
    console.log("gzip: " + filesize(gzipSize.sync(fs.readFileSync(cssFile))));
  }
  console.log("=======================================");
}
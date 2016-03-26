'use strict';

var browserSync = require('browser-sync').create(),
  gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;

gulp.task('serve',
  [
    'browser-sync'
  ],
  function () {
    gulp.watch('client/**/*.tpl.html', ['ng-template']);
    gulp.watch('client/**/*.less', ['less']);
    gulp.watch('client/app.css').on('change', reload);
    gulp.watch('client/**/*.js', ['eslint']).on('change', reload);
  }
);

gulp.task('browser-sync',
  [
    'nodemon'
  ],
  function() {
    browserSync.init(null, {
      proxy: 'http://localhost:20080',
      browser: 'google-chrome',
      port: 10080
    });
  }
);

gulp.task('nodemon',
  [
    'eslint',
    'less',
    'ng-template'
  ],
  function (done) {
    var running = false;

    return nodemon({
      script: 'server/app.js',
      watch: ['server/**/*.js']
    })
    .on('start', function () {
      if (!running) {
        done();
      }
      running = true;
    })
    .on('restart', function () {
      setTimeout(function () {
        reload();
      }, 500);
    });
  }
);

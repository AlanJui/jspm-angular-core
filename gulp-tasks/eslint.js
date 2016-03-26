'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([
    '**/*.js',
    '!client/modules/html-templates/html-templates.module.js',
    '!client/config.js',
    '!coverage{,/**}',
    '!client/jspm_packages{,/**}',
    '!node_modules{,/**}'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});


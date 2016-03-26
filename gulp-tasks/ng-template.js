'use strict';

var gulp = require('gulp'),
  htmlMin = require('gulp-htmlmin'),
  ngTemplate = require('gulp-ng-template'),
  htmlMinOptions = {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseInlineTagWhitespace: true
  };

gulp.task('ng-template', function () {
  return gulp.src(['client/**/*.tpl.html', '!client/jspm_packages{,/**}'])
    .pipe(htmlMin(htmlMinOptions))
    .pipe(ngTemplate({
      moduleName: 'HTMLTemplates',
      standalone: true,
      filePath: 'modules/html-templates/html-templates.module.js'
    }))
    .pipe(gulp.dest('client'));
});


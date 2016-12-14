'use strict';
 
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('index-compile', function () {
    gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'));
});

var sourceFiles = [
    "node_modules/zone.js/dist/zone.js",
    "node_modules/reflect-metadata/Reflect.js"
];

gulp.task('copy-vendors', function () {
    gulp.src(sourceFiles)
        .pipe(gulp.dest('build'));
});

gulp.task('build',['index-compile','copy-vendors']);
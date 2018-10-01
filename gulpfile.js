var gulp = require('gulp');
var rename = require("gulp-rename"); 
var stripJsonComments = require('gulp-strip-json-comments');
var prettify = require('gulp-jsbeautifier');

gulp.task('default', defaultTask);

function defaultTask() {
    return gulp.src('./src/package-with-comment.json')
        .pipe(stripJsonComments())
        .pipe(prettify())
        .pipe(rename("./package.json"))
        .pipe(gulp.dest('./'));
};

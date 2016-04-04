var gulp = require('gulp');
var rename = require("gulp-rename"); 
var stripJsonComments = require('gulp-strip-json-comments');
 
gulp.task('build', function () {
    return gulp.src('src/package-with-comment.json')
        .pipe(stripJsonComments())
        .pipe(rename("./package.json"))
        .pipe(gulp.dest('./'));
});

var gulp = require('gulp');
var rename = require("gulp-rename"); 
var stripJsonComments = require('gulp-strip-json-comments');
 
gulp.task('default', function () {
    return gulp.src('./src/package-with-comment.json')
        .pipe(stripJsonComments())
        .pipe(rename("./package.json"))
        .pipe(gulp.dest('./'));
});


gulp.task('watch', function(){
    gulp.watch('./src/package-with-comment.json', ['build']);
});

gulp.task('build', ['default', 'watch']);

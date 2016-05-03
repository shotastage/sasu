// Gulpfile for sasu

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./_sasu.scss')
    .pipe(sass())
    .pipe(gulp.dest('./test.css'));
});

gulp.task('default', ['sass']);

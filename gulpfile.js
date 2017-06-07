/**
 * Created by Julius Alvarado on 6/6/2017.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var path = 'app/**/*.scss';

gulp.task('default', function(){
    gulp.watch(path, ['styles']);
});

gulp.task('styles', function(){
    gulp.src(path)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('./app'));
});
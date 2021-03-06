var gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

// gulp.task('json', function () {
//   gulp.src('./config/locals/*.json')
//     .pipe(connect.reload());
// });

gulp.task('watch', function () {
  gulp.watch(['*.*'], ['html']);
  gulp.watch(['views/*.*'], ['html']);
  // gulp.watch(['./config/locals/*.*'], ['json']);
  // gulp.watch(['./js/michaelhsu.tw/*.js']);
});

gulp.task('scripts', function() {
  gulp.src([
    'js/*/ga.js', 
    'js/jquery-1.10.2.min.js', 
    'bower_components/angular/angular.min.js',
    'bower_components/angular-translate/angular-translate.min.js',
    'bower_components/*/*.min.js', 
    'bower_components/*/*/*.min.js', 
    'js/*.js', 'js/*/*.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/'))
});

gulp.task('minify-css', function() {
  gulp.src([
    'css/*.css', 
    'css/colors/red.css', 
    'bower_components/*/*.css', 
    'bower_components/*/*/*.css'])
    .pipe(concat('all.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('build/'))
});


gulp.task('default', ['scripts', 'minify-css', 'connect', 'watch']);

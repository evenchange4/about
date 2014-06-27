var gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

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
  gulp.src(['bower_components/*/*.js','js/*.js', 'js/*/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/'))
});

// gulp.task('scripts-bower', function() {
//   gulp.src('bower_components/*/*.js')
//     .pipe(concat('all2.js'))
//     .pipe(gulp.dest('build/'))
// });

gulp.task('compress', function() {
  gulp.src('build/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['scripts', 'connect', 'watch']);

var gulp = require('gulp'),
  connect = require('gulp-connect');

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

gulp.task('default', ['connect', 'watch']);

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('server', function() {

  browserSync.init({
		// proxy: 'http://parttime.local',
    // port: 5000
    server: {
      baseDir: './'
    }
  });

  gulp.watch('表单验证/*.less', ['less']);
  watch('表单验证/**/*.html').on('change', reload);
  watch('表单验证/js/**/*.js').on('change', reload);

});

gulp.task('less', function() {
  gulp.src('表单验证/*.less')
    .pipe(less())
    .pipe(gulp.dest('表单验证'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['server']);

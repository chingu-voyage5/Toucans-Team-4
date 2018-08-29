var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })
  
  watch('./app/index.html', function() {
    browserSync.reload();
  });
  
  watch('./app/main_bot/**/*.css', function() {
    gulp.start('cssInject');
  })
  
});

gulp.task('cssInject', ['main_bot'], function() {
  return gulp.src('./app/temp/styles/main_bot.css')
  .pipe(browserSync.stream());
})


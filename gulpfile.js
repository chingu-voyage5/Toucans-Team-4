var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('main_bot', function() {
  return gulp.src('./app/main_bot/main_bot.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
  
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  
  watch('./app/main_bot/**/*.css', function() {
    gulp.start('main_bot');
  })
  
});
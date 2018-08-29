var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
flexbox = require('postcss-flexbox'),
mixins = require('postcss-mixins');


gulp.task('main_bot', function() {
  return gulp.src('./app/main_bot/main_bot.css')
    .pipe(postcss([flexbox, cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
  })
    .pipe(gulp.dest('./app/temp/styles'));
  
});

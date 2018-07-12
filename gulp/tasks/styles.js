var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import"),
    mixins = require("postcss-mixins");


gulp.task("mainpage", function() {
    return gulp.src(".app/tickybot_css/mainpage.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on("error", function(errorInfo) {
        console.log(errorInfo.toString())
        this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});


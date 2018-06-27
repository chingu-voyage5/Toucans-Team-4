var gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested");

gulp.task("default", function() {
    console.log("Hooray - you created a Gulp task.");
});

gulp.task("html", function() {
    console.log("Imagine something useful being done to your HTML here.");
});

gulp.task("mainpage", function() {
    return gulp.src("./app/tickybot_css/mainpage.css")
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest("./app/temp/styles"));
});


gulp.task("watch", function() {
    
    watch("./app/index.html", function() {
        gulp.start("html");
    });
    
    watch("./app/tickybot_css/**/*.css", function() {
        gulp.start("mainpage");
    }); 
});
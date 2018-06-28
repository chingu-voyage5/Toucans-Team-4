var gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import"),
    browserSync = require("browser-sync").create();

gulp.task("default", function() {
    console.log("Hooray - you created a Gulp task.");
});

gulp.task("html", function() {
    console.log("Imagine something useful being done to your HTML here.");
});

gulp.task("mainpage", function() {
    return gulp.src("./app/tickybot_css/mainpage.css")
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest("./app/temp/styles"));
});


gulp.task("watch", function() {
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })
    
    watch("./app/index.html", function() {
        browserSync.reload();
    });
    
    watch("./app/tickybot_css/**/*.css", function() {
        gulp.start("cssInject");
    }); 
});

gulp.task("cssInject", ["mainpage"], function() {
    return gulp.src("./app/temp/styles/mainpage.css")
    .pipe(browserSync.stream());
})
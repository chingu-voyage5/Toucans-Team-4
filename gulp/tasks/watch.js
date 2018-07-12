var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create();

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
var gulp = require("gulp"),
    watch = require("gulp-watch");

gulp.task("default", function() {
    console.log("Hooray - you created a Gulp task.");
});

gulp.task("html", function() {
    console.log("Imagine something useful being done to your HTML here.");
});

gulp.task("main_page", function() {
   return gulp.src("./tickybot_css/main_page").pipe(gulp.dest("./app/temp/styles")); 
});

gulp.task("watch", function() {
    
    watch("./app/index.html", function() {
        gulp.start("html");
    });
    
    watch("./tickybot_css/main_page/**/*.css", function() {
        gulp.start("main_page");
    });
});
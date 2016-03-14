var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
//var browserSync = require('browser-sync');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return sass('scss/**/*.scss',{noCache: true})
        .on('error', sass.logError)
        .pipe(minifycss())
        .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('css')).on('error', sass.logError);

});
/*
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
        }
    });
});
*/


gulp.task('default', ['sass'], function() {
    gulp.watch("scss/**/*.scss", ['sass']);
    //gulp.watch(['**/*.html'], browserSync.reload);
    //gulp.watch(['**/*.php'], browserSync.reload);
    //gulp.watch(['css/**/*.css'], browserSync.reload);
});

/*
gulp.task('default', ['sass'], function() {
   
});

gulp.task('watch', function() {
    
})
*/

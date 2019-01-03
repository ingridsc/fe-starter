var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Variables for paths
var paths = {
    app: 'app',
    scss: 'app/scss',
    css: 'app/css'
};
gulp.task('browser-sync', function() {
    browserSync.init({
        injectChanges: true,
        server: "./app"
    });
});

gulp.task('sass', function(){
    return gulp.src(paths.scss + '/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['sass', 'browser-sync'], function () {
    gulp.watch(paths.scss + '/**/*.scss', ['sass']);
    browserSync.reload()
});


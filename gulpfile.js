var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');

// Variables for paths
var paths = {
    app : 'app',
    scss: 'app/assets/scss',
    jsFiles: 'app/assets/**/*.js',

    css   : 'app/dist/css',
    jsDest: 'app/dist/js'
};
gulp.task('browser-sync', function() {
    browserSync.init({
        injectChanges: true,
        server: "./app"
    });
});
gulp.task('js-scripts', function() {
    return gulp.src(paths.jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(paths.jsDest));

});
gulp.task('sass', function(){
    return gulp.src(paths.scss + '/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['sass', 'js-scripts', 'browser-sync'], function () {
    gulp.watch(paths.scss + '/**/*.scss', ['sass']);
    gulp.watch(paths.app + '/**/*.js', ['js-scripts']);
    browserSync.reload()
});


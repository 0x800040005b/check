var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssMin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var imgMin = require('gulp-imagemin');
var concat = require('gulp-concat');


gulp.task('sass', function(done) {
    gulp.src('src/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
    done();

});

gulp.task('server', function() {
    browserSync.init({
        server: 'src/',
        online: true,
    });
    gulp.watch('src/sass/**/*.sass').on('change', gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/**/*.js").on('change', browserSync.reload);

});
gulp.task('moveFiles', function(done) {


    /* HTML files*/
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))

    /* CSS files*/

    gulp.src('src/css/**/*.css')
        .pipe(cssMin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))

    /* Javascript files */

    gulp.src(['src/js/*.js'])
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist/js'))

    /* Image files */
    gulp.src(['src/img/**/*.*'])
    .pipe(gulp.dest('dist/img'))

    /* fonts */

    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
    done();
});

gulp.task('default', gulp.series('server'));
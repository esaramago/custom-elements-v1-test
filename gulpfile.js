const gulp = require('gulp');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');



gulp.task('scripts', () => {
    gulp.src('./src/js/main.js')
        .pipe(plumber()) // prevent to stop on error
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/'));
});



const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');

gulp.task('styles', function () {

    return gulp.src('src/sass/main.scss')

        .pipe(plumber())

        .pipe(sourcemaps.init())

        .pipe(sassGlob())
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))

        .pipe(sourcemaps.write())

        .pipe(gulp.dest('./dist/'))

});

gulp.task('components-styles', function () {

    return gulp.src('src/components/**/*.scss')

        .pipe(plumber())

        .pipe(sourcemaps.init())

        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))

        .pipe(sourcemaps.write())

        .pipe(gulp.dest('./dist/'))

});

gulp.task('default', function () {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/components/**/*.scss', ['components-styles']);
    gulp.watch(['src/js/**/*.js', 'src/components/**/*.js'], ['scripts']); // watch for webpack
});

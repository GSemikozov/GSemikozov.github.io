'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jpegoptim = require('imagemin-jpegoptim');
var optipng = require('imagemin-optipng');
var svgo = require('imagemin-svgo');

gulp.task('sass', function () {
    gulp.src('sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});

gulp.task('imgmin', function () {
    return gulp.src('./img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [jpegoptim({
                progressive: true
            }), optipng({
                optimizationLevel: 3
            }), svgo()]
        }))
        .pipe(gulp.dest('./img'));
});

gulp.task('images', ['imgmin']);
gulp.task('css', ['sass']);

var
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	del = require('del'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	px2rem = require('gulp-px2rem'),
	sass = require('gulp-sass'),
	reload = browserSync.reload
;

gulp.task('browser-sync', function() {
    browserSync.init(['./dist/stylesheets/*.css', './dist/javascript/**/*.js'], {
        server: {
            baseDir: './dist'
        }
    });
});

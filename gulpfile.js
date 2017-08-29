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

// Run server
gulp.task('browser-sync', function() {
    browserSync.init(['./dist/stylesheets/*.css', './dist/javascript/**/*.js'], {
        server: {
            baseDir: './dist'
        }
    });
});

// Move and minify HTML
gulp.task('html', function() {
    return gulp.src(['src/*.html', 'src/*/*/.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['browser-sync'], function() {
	console.log('test');
});

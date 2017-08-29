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
	uglify = require('gulp-uglify'),
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
    return gulp.src(['src/*.html', 'src/projects/*/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist'));
});


// Compile sass and minify
gulp.task('stylesheets', function() {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(px2rem())
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(browserSync.stream());
});

// Compile JS and minify
gulp.task('javascript', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

// Restart from scratch
gulp.task('restart', function(cb) {
    del(['dist'], cb)
});

gulp.task('default', ['browser-sync', 'html', 'stylesheets', 'javascript'], function() {
});

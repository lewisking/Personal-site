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


	imageResize = require('gulp-image-resize');
	tinypng = require('gulp-tinypng-compress');

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


// Move, compile sass and minify
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

// Move, compile JS and minify
gulp.task('javascript', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

// Move, resize and compress images
gulp.task('images', function () {
	gulp.src(['src/assets/*/*.{png,jpg,jpeg}', 'src/projects/*/assets/*/*.{png,jpg,jpeg}'])
	.pipe(gulp.dest('images'));
		.pipe(imageResize({
			width : 1400,
			upscale : false
		}))
		.pipe(tinypng({
			key: 'API_KEY',
			sigFile: 'images/.tinypng-sigs',
			log: true
		}))
		.pipe(gulp.dest('disttest'));
});

// Restart from scratch
gulp.task('restart', function(cb) {
    del(['dist'], cb)
});

// Run gulp
gulp.task('default', ['browser-sync', 'html', 'stylesheets', 'javascript'], function() {
});

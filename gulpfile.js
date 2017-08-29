var
	// General
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	del = require('del'),
	reload = browserSync.reload,
	gulpif = require('gulp-if'),
	argv = require('yargs').argv,

	// HTML
	htmlmin = require('gulp-htmlmin'),

	// CSS
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	uncss = require('gulp-uncss'),

	// JS
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),

	// Images
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	imageResize = require('gulp-image-resize');
;

// Run server
gulp.task('browser-sync', function() {

	// Only do the following if --production flag is off
	if (argv.production === false) {
		browserSync.init(['./dist/stylesheets/*.css', './dist/javascript/**/*.js'], {
			server: {
				baseDir: './dist'
			}
		});
	}

});

// Move and minify HTML
gulp.task('html', function() {
	return gulp.src(['src/*.html', 'src/*/*/*.html'])

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        })))

        .pipe(gulp.dest('dist'));
});

// Move, compile sass and minify
gulp.task('stylesheets', function() {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, uncss({
            html: ['src/*.html', 'src/projects/*/*.html']
        })))

        .pipe(gulp.dest('dist/assets/css/'))
});


// Move, compile JS and minify
gulp.task('javascript', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});


// Move, resize and compress images
gulp.task('images', function() {
    return gulp.src(['src/*/images/*.{png,jpg,jpeg}', 'src/*/*/assets/*/*.{png,jpg,jpeg}'])

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, imageResize({
			width : 1400,
			upscale : false
		})))

		// Only do the following if --production flag is on
        .pipe(gulpif(argv.production, imagemin([
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
        ])))

        .pipe(gulp.dest('dist'));
});

// Restart from scratch
gulp.task('restart', function(cb) {
    del(['dist'], cb)
});

// All of the things
gulp.task('default', ['html', 'stylesheets', 'images', 'javascript', 'browser-sync'], function() {

	// Only do the following if --production flag is off
	if (argv.production === false) {
		gulp.watch(['src/*.html', 'src/*/*/*.html'], ['html', reload]);
		gulp.watch(['src/assets/scss/*.scss', 'src/assets/scss/*/*.scss'], ['stylesheets']);
		gulp.watch(['src/*/images/*.{png,jpg,jpeg}', 'src/*/*/assets/*/*.{png,jpg,jpeg}'], ['images']);
		gulp.watch('src/assets/js/*.js', ['javascript']);
	}

});

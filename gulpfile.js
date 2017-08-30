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
	fileinclude = require('gulp-file-include'),


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

const depcheck = require('gulp-depcheck');


// Run server
gulp.task('browser-sync', function() {

	// Only do the following if --production flag is off
	if (argv.production != true) {
		browserSync.init({
			server: {
				baseDir: './dist'
			}
		});
	}

});

// Move and minify HTML
gulp.task('html', function() {
	return gulp.src('src/**/*.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        })))

        .pipe(gulp.dest('dist'))
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
            html: ['src/**/*.html']
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
    return gulp.src('src/**/*.{png,jpg,jpeg}')

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, imageResize({
			width : 1400,
			upscale : false
		})))

		// Only do the following if --production flag is on
        .pipe(gulpif(argv.production, imagemin([
            imageminJpegRecompress({
                progressive: true,
                max: 85,
                min: 75
            }),
        ])))

        .pipe(gulp.dest('dist'));
});




// Restart from scratch
gulp.task('restart', function() {
    del(['dist'])
});

// All of the things
gulp.task('default', ['html', 'stylesheets', 'images', 'javascript', 'browser-sync'], function() {

	// Only do the following if --production flag is off
	if (argv.production != true) {
		gulp.watch('src/**/*.html', ['html', reload]);
		gulp.watch('src/**/*.scss', ['stylesheets', reload]);
		gulp.watch('src/assets/js/*.js', ['javascript', reload]);
		gulp.watch('src/**/*.{png,jpg,jpeg}', ['images', reload]);
	}

});

// Remove _includes files, not needed for production
gulp.task('remove_includes', function() {
    del(['dist/**/_includes'])
});

// --- Dependencies

var
	// General
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	del = require('del'),
	reload = browserSync.reload,
	gulpif = require('gulp-if'),
	argv = require('yargs').argv,
	ghPages = require('gulp-gh-pages'),
	runSequence = require('run-sequence'),

	// HTML
	htmlmin = require('gulp-htmlmin'),
	fileinclude = require('gulp-file-include'),

	// CSS
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	uncss = require('gulp-uncss'),
	cssnano = require('gulp-cssnano'),

	// JS
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),

	// Images
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	imageResize = require('gulp-image-resize');
;


// --- Config

paths = {
	src: {
		html: 'src/**/*.html',
		sass: 'src/assets/scss/style.scss',
		sasswatch: 'src/**/*.scss',
		images: 'src/**/*.{png,jpg,jpeg}',
		favicon: 'src/favicon.ico',
		js: 'src/assets/js/*.js',
		partials: '',
		deploy: '',
		cname: 'src/CNAME',
	},
	dist: {
		html: 'dist',
		sass: 'dist/assets/css',
		sasswatch: '',
		images: 'dist',
		favicon: 'dist',
		js: 'dist/assets/js',
		partials: 'dist/**/_partials',
		deploy: './dist/**/*',
		cname: 'dist',
	}
}

// --- Production tasks

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
	return gulp.src(paths.src.html)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
			indent: true,
		}))

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, htmlmin({
			collapseWhitespace: true,
			minifyJS: true
		})))

		.pipe(gulp.dest(paths.dist.html));
});

// Move, compile sass and minify
gulp.task('stylesheets', function() {
	return gulp.src(paths.src.sass)

		.pipe(sass({
			outputStyle: 'compressed'
		}))

		.pipe(autoprefixer({
			// browsers: ['last 2 versions'],
			cascade: false
		}))

		.pipe(cssnano({
			autoprefixer: false
		}))

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, uncss({
			html: [paths.src.html]
		})))

		.pipe(gulp.dest(paths.dist.sass));
});

// Move, compile JS and minify
gulp.task('javascript', function() {
	return gulp.src(paths.src.js)
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dist.js));
});

// Move CNAME file
gulp.task('cname', function() {
	return gulp.src(paths.src.cname)
		.pipe(gulp.dest(paths.dist.cname));
});

// Move favicon
gulp.task('favicon', function() {
	return gulp.src(paths.src.favicon)
		.pipe(gulp.dest(paths.dist.favicon));
});


// Move, resize and compress images
gulp.task('images', function() {
	return gulp.src(paths.src.images)

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, imageResize({
			width: 1400,
			upscale: false
		})))

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, imagemin([
			imageminJpegRecompress({
				progressive: true,
				max: 85,
				min: 75
			}),
		])))

		.pipe(gulp.dest(paths.dist.images));
});

// Delete _partials folders, no need for these for production
gulp.task('remove_partials', function() {
	return del(paths.dist.partials).then(paths => {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});

// Restart from scratch
gulp.task('restart', function() {
	return del(paths.dist.html).then(paths => {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});

// Publish to github pages
gulp.task('deploy_gh', function() {
	return gulp.src(paths.dist.deploy)
		.pipe(ghPages());
});

// --- Deploy tasks

gulp.task('default', ['html', 'cname', 'stylesheets', 'images', 'favicon', 'javascript', 'browser-sync'], function() {

	// Only do the following if --production flag is off
	if (argv.production != true) {
		gulp.watch(paths.src.html, ['html', reload]);
		gulp.watch(paths.src.sasswatch, ['stylesheets', reload]);
		gulp.watch(paths.src.js, ['javascript', reload]);
		gulp.watch(paths.src.images, ['images', reload]);
	} else {
		runSequence('remove_partials', ['deploy_gh']);
	}
});

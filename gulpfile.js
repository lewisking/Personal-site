// --- Dependencies

var
	// General
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	del = require('del'),
	reload = browserSync.reload,
	gulpif = require('gulp-if'),
	argv = require('yargs').argv,
	ghPages = require('gulp-gh-pages');
	runSequence = require('run-sequence');

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


// --- Config

path = {
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
	return gulp.src(path.src.html)
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

		.pipe(gulp.dest(path.dist.html));
});

// Move, compile sass and minify
gulp.task('stylesheets', function() {
	return gulp.src(path.src.sass)
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))

		// Only do the following if --production flag is on
		.pipe(gulpif(argv.production, uncss({
			html: [path.src.html]
		})))

		.pipe(gulp.dest(path.dist.sass));
});

// Move, compile JS and minify
gulp.task('javascript', function() {
	return gulp.src(path.src.js)
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(path.dist.js));
});

// Move CNAME file
gulp.task('cname', function() {
	return gulp.src(path.src.cname)
		.pipe(gulp.dest(path.dist.cname));
});

// Move favicon
gulp.task('favicon', function() {
	return gulp.src(path.src.favicon)
		.pipe(gulp.dest(path.dist.favicon));
});


// Move, resize and compress images
gulp.task('images', function() {
	return gulp.src(path.src.images)

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

		.pipe(gulp.dest(path.dist.images));
});

// Delete _partials folders, no need for these for production
gulp.task('remove_partials', function() {
	return del(path.dist.partials).then(paths => {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});

// Restart from scratch
gulp.task('restart', function() {
	del(path.dist.html);
});

// Publish to github pages
gulp.task('deploy_gh', function() {
	return gulp.src(path.dist.deploy)
		.pipe(ghPages());
});

// --- Deploy tasks

// All of the things
gulp.task('default', ['html', 'cname', 'stylesheets', 'images', 'favicon', 'javascript', 'browser-sync'], function(callback) {

	// Only do the following if --production flag is off
	if (argv.production != true) {
		gulp.watch(path.src.html, ['html', reload]);
		gulp.watch(path.src.sasswatch, ['stylesheets', reload]);
		gulp.watch(path.src.js, ['javascript', reload]);
		gulp.watch(path.src.images, ['images', reload]);
	} else {
		runSequence('remove_partials', ['deploy_gh'], callback);
	}

});

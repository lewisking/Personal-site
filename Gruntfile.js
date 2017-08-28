/*!
 * NewStart Gruntfile
 * @author Lewis King
 */

'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
	port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		project: {
			src: 'src',
			app: 'app',
			assets: '<%= project.app %>/assets',
			css: [
		        '<%= project.src %>/scss/style.scss'
		      ],
			js: [
		        '<%= project.src %>/js/*.js'
		      ]
		},

		autoprefixer: {
			single_file: {
				src: '<%= project.assets %>/css/style.min.css',
				dest: '<%= project.assets %>/css/style.min.css'
			},
		},

		connect: {
			options: {
				port: 9000,
				hostname: '*'
			},
			livereload: {
				options: {
					middleware: function(connect) {
						return [lrSnippet, mountFolder(connect, 'app')];
					}
				}
			}
		},

		jshint: {
			files: ['src/js/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		concat: {
			dev: {
				files: {
					'<%= project.assets %>/js/scripts.min.js': '<%= project.js %>'
				}
			},
			options: {
				nonull: true,
			}
		},

		uglify: {
			dist: {
				files: {
					'<%= project.assets %>/js/scripts.min.js': '<%= project.js %>'
				}
			}
		},

		sass: {
			dev: {
				options: {
					style: 'expanded',
				},
				files: {
					'<%= project.assets %>/css/style.min.css': '<%= project.css %>'
				}
			},
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'<%= project.assets %>/css/style.min.css': '<%= project.css %>'
				}
			}
		},

		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},

		uncss: {
			dist: {
				options: {
					htmlroot: '<%= project.app %>/'
				},
				files: {
					'<%= project.assets %>/css/style.min.css': ['<%= project.app %>/{,*/}*.html', '<%= project.app %>/*/{,*/}*.html']
				}
			}
		},

		responsive_images: {
			myTask: {
				options: {
					rename: false,
					sizes: [{
						width: 1400,
					}]
				},
				files: [{
					expand: true,
			        src: ['projects/*/assets/images/*'],
			        cwd: 'app/',
			        dest: 'temp'
				}],
			},
		},
		//
		// imagemin: {
		// 	dynamic: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: '<%= project.app %>/',
		// 			src: ['**/*.{png,jpg,gif}'],
		// 			dest: '<%= project.app %>/'
        //     }]
		// 	}
		// },

		watch: {
			concat: {
				files: '<%= project.src %>/js/{,*/}*.js',
				tasks: ['concat:dev', 'jshint']
			},
			sass: {
				files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
		          '<%= project.app %>/{,*/}*.html',
		          '<%= project.assets %>/css/*.css',
		          '<%= project.assets %>/js/{,*/}*.js',
		          '<%= project.assets %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
		        ]
			}
		}

	});

	grunt.registerTask('default', [
	    'sass:dev',
	    'jshint',
	    'concat:dev',
	    'connect:livereload',
	    'open',
	    'watch',
	]);

	grunt.registerTask('images', [
		'responsive_images',
	]);

	grunt.registerTask('build', [
		'sass:dist',
		'jshint',
		'autoprefixer',
		'uncss',
		'imagemin',
	]);

};

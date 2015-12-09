module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-bower');
	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.registerTask('dist', ['clean:default', 'bower', 'concat', 'ngAnnotate', 'uglify', 'sass:dist', 'clean:tmp']);
	grunt.registerTask('default', ['clean:default', 'bower', 'concat', 'sass:dev']);

	grunt.initConfig({
		bower: {
			default: {
				dest: 'res',
				js_dest: 'res/js',
				css_dest: 'res/css',
				fonts_dest: 'res/font',
				images_dest: 'res/img',
				options: {
					keepExpandedHierarchy: false,
					packageSpecific: {
						'angular-material-data-table': {
							files: [
								'dist/md-data-table.js',
								'dist/md-data-table.css'
							]
						}
					}
				}
			}
		},
		clean: {
			default: ['res/css', 'res/font', 'res/js'],
			tmp: ['tmp']
		},
		concat: {
			default: {
				src: [
					'app/modules/navigator/*.module.js',
					'app/modules/navigator/**/*.module.js',
					'app/modules/*/*.module.js',
					'app/modules/**/*.module.js',
					'app/modules/**/*.js',
					'app/**/*.js',
					'!app/**/*.spec.js'
				],
				dest: 'res/js/rpicontrol.js'
			}
		},
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			dist: {
				files: {
					'tmp/rpicontrol.js': ['res/js/rpicontrol.js']
				}
			}
		},
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'res/css/rpicontrol.css': 'app/**/*.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'res/css/rpicontrol.min.css': 'app/**/*.scss'
				}
			}
		},
		uglify: {
			dist: {
				compress: true,
				files: {
					'res/js/dependencies.min.js': [
						'res/js/angular.js',
						'res/js/angular-animate.js',
						'res/js/angular-aria.js',
						'res/js/angular-material.js',
						'res/js/angular-ui-router.js',
						'res/js/angular-ui-router-title.js',
						'res/js/md-data-table.js'
					],
					'res/js/rpicontrol.min.js': ['tmp/rpicontrol.js']
				}
			}
		}
	});
};

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		autoprefixer: {
			global: {
				files: {
					".jekyll/css/global.css" : "css/global.css"
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					hostname: "localhost",
					base: ".jekyll",
					open: true
				}
			}
		},

		jekyll: {
			server: {
				options: {
					dest: ".jekyll",
					safe: true
				}
			}
		},

		jshint: {
			files: ["js/**/*.js"]
		},

		lineremover: {
			server: {
				options: {
					exclusionPattern: /(---)/g
				},
				files: [{
					expand: true,
					cwd: "_sass",
					src: "**/*.sass",
					dest: ".sass"
				}]
			}
		},

		sass: {
			server: {
				options: {
					style: "compressed"
				},
				files: {
					"css/global.css" : ".sass/global.sass"
				}
			}
		},

		uglify: {
			server: {
				src: ["js/**/*.js"],
				dest: ".jekyll/js/main.min.js"
			}
		},

		watch: {
			options: {
				livereload: true
			},
			site: {
				files: ["index.html", "_layouts/*.html", "_posts/*.md", "blog/index.md", "about/index.md",
								"contact/index.html", "portfolio/index.html", "hire/index.html"],
				tasks: ["jekyll", "uglify"]
			},
			js: {
				files: ["js/**/*.js"],
				tasks: ["jshint", "uglify"]
			},
			styles: {
				files: ["_sass/**/*.sass"],
				tasks: ["lineremover", "sass", "autoprefixer"]
			}
		}

	});

	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-jekyll");
	grunt.loadNpmTasks("grunt-line-remover");

	grunt.registerTask("default", ["jekyll", "lineremover", "sass", "autoprefixer", "jshint", "uglify", "connect", "watch"]);

};

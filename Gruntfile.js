module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		autoprefixer: {
			global: {
				files: {
					"css/global.css" : "css/global.unprefixed.css"
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

		copy: {
			style: {
				files: {
					".jekyll/css/global.css" : "css/global.css"
                }
            },
            js: {
                files: {
					".jekyll/js/main.min.js" : "js/main.min.js",
                    ".jekyll/js/wufoo.min.js" : "js/wufoo.min.js"
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
			files: ["js/**/*.js", "!js/*.min.js"]
		},

		sass: {
			server: {
				options: {
					style: "compressed"
				},
				files: {
					"css/global.unprefixed.css" : "_sass/global.sass"
				}
			}
		},

		uglify: {
			server: {
				src: ["js/**/*.js", "!js/*.min.js", "!js/wufoo.js"],
				dest: "js/main.min.js"
			},
            wufoo: {
                src: ["js/wufoo.js"],
                dest: "js/wufoo.min.js"
            }
		},

		watch: {
			options: {
				livereload: true
			},
			site: {
				files: ["index.html", "_layouts/*.html", "_includes/*.html", "_posts/*.md", "blog/index.html", "about/index.md",
								"contact/index.html", "portfolio/index.html", "hire/index.html"],
				tasks: ["jekyll", "copy"]
			},
			js: {
				files: ["js/**/*.js", "!js/*.min.js"],
				tasks: ["jshint", "uglify", "copy:js"]
			},
			styles: {
				files: ["_sass/**/*.sass"],
				tasks: ["sass", "autoprefixer", "copy:style"]
			}
		}

	});

	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-jekyll");

	grunt.registerTask("js", ["jshint", "uglify"]);
	grunt.registerTask("styles", ["sass", "autoprefixer"]);
	grunt.registerTask("default", ["jekyll", "styles", "js", "copy", "connect", "watch"]);

};

/*global module, require */
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    'use strict';

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        simpl_todo: {
            app: 'app',
            dist: 'dist'
        },
        watch: {
            src: {
                files: ['Gruntfile.js', '<%= simpl_todo.app %>/scripts/**/*.js', 'test/spec/**/*.js', 'test/unit/**/*.js', 'test/index.html' ],
                tasks: ['jshint', 'test', 'notify:watch']
            },
            styles: {
                files: ['<%= simpl_todo.app %>/styles/**/*.css'],
                tasks: ['copy:styles']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= simpl_todo.app %>/*.html',
                    '.tmp/styles/**/*.css',
                    '{.tmp,<%= simpl_todo.app %>}/scripts/**/*.js',
                    '<%= simpl_todo.app %>/images/**/*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= simpl_todo.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= simpl_todo.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= simpl_todo.dist %>',
                    livereload: false
                }
            }
        },
        clean: ['<%= simpl_todo.dist %>', '.tmp'],
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= simpl_todo.app %>/scripts/{,*/}*.js',
                '!<%= simpl_todo.app %>/scripts/vendor/*',
                'test/unit/**/*.js',
                '!test/unit/lib/**/*.js',
                'test/spec/**/*.js'
            ]
        },
        mocha: {
            all: {
                src:['test/unit/index.html'],
                options: {
                    run: true,
                    log: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true
            }
        },

        'bower-install': {
            app: {
                html: '<%= simpl_todo.app %>/index.html',
                ignorePath: '<%= simpl_todo.app %>/'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= simpl_todo.dist %>/scripts/{,*/}*.js',
                        '<%= simpl_todo.dist %>/styles/{,*/}*.css',
                        '<%= simpl_todo.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= simpl_todo.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= simpl_todo.dist %>'
            },
            html: '<%= simpl_todo.app %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: ['<%= simpl_todo.dist %>']
            },
            html: ['<%= simpl_todo.dist %>/{,*/}*.html'],
            css: ['<%= simpl_todo.dist %>/styles/{,*/}*.css']
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/simpl_todo/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= simpl_todo.app %>',
                    src: '*.html',
                    dest: '<%= simpl_todo.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= simpl_todo.app %>',
                    dest: '<%= simpl_todo.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= simpl_todo.app %>',
                dest: '.tmp/',
                src: [
                    'styles/{,*/}*.css',
                    'bower_components/**/*.css'
                ]
            }
        },

        notify: {
            karma: {
                options: {
                    message: 'Done' //required
                }
            },
            watch: {
                options: {
                    title: 'Task Complete',  // optional
                    message: 'Done' //required
                }
            },
            server: {
                options: {
                    message: 'Server is ready!'
                }
            }
        }

    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run(['clean', 'copy:styles', 'connect:livereload', 'watch']);
    });

    grunt.registerTask('test', ['clean', 'copy:styles', 'connect:test', 'mocha']);
    grunt.registerTask('build', ['clean', 'useminPrepare', 'copy:styles', 'htmlmin', 'concat', 'cssmin', 'uglify', 'copy:dist', 'rev', 'usemin']);
    grunt.registerTask('default', [ 'jshint', 'test', 'build']);
};

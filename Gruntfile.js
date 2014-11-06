// Generated on 2014-09-06 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   compass: _scss
//   javascript: js
//   coffeescript: _src
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist',
      pub: 'pub',
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      coffee: {
        files: ['<%= yeoman.app %>/_src/**/*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown,xml}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
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
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      pub: {
        options: {
          open: true,
          base: [
            '<%= yeoman.pub %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      pub: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.pub %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.pub %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        bundleExec: true,
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        // raw: 'add_import_path "<%= yeoman.app %>/_bower_components"\n',
        raw: 'add_import_path "<%= yeoman.app %>/_bower_components/foundation/scss"\n',
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: false,
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_src',
          src: '**/*.coffee',
          dest: '.tmp/js',
          ext: '.js'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_src',
          src: '**/*.coffee',
          dest: '<%= yeoman.dist %>/js',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>',
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/fastclick/lib/fastclick.js',
            '_bower_components/jquery/dist/jquery.js',
            '_bower_components/jquery.cookie/jquery.cookie.js',
            '_bower_components/jquery-placeholder/jquery.placeholder.js',
            '_bower_components/modernizr/modernizr.js',
            '_bower_components/foundation/js/foundation.js',
            'js/vendor/browser-detection.js',
            'favicon.png',
            'robots.txt',
            'humans.txt'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      },
      buildjs: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.tmp/js',
          src: '**/*.js',
          dest: '<%= yeoman.dist %>/js'
        }]
      },
      buildcss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      pubimg: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.dist %>/img',
          src: '**/*.jpg',
          dest: '<%= yeoman.pub %>/img'
        }]
      },
      pub: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.dist %>',
          src: [
              'feed.rss',
              'favicon.png'
          ],
          dest: '<%= yeoman.pub %>'
        }]
      },
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            // '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    coffeelint: {
      options: {
        'max_line_length': {
          'level': 'ignore'
        }
      },
      check: ['<%= yeoman.app %>/_src/*.coffee']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        //'<%= yeoman.app %>/js/**/*.js' // errors on browser check
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css', // nothing here
          '.tmp/**/*.css',
          //'<%= yeoman.app %>/_scss/**/*.scss',
          '!<%= yeoman.app %>/_scss/_browserdetection.scss' // errors 
        ]
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 5
      },
      server: [
        'compass:server',
        'coffee:dist',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        'coffee:dist',
        'copy:dist'
      ],
      build: [
        'copy:buildcss',
        'copy:buildjs'
      ],
      pub: [
        'copy:pubimg',
        'copy:pub'
      ],
    },
    compress: {
      html: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.html'],
        dest: '<%= yeoman.pub %>',
      },
      js: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.js'],
        dest: '<%= yeoman.pub %>',
      },
      css: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.css'],
        dest: '<%= yeoman.pub %>',
      },
      txt: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.txt'],
        dest: '<%= yeoman.pub %>',
      },
      xml: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.xml'],
        dest: '<%= yeoman.pub %>',
      },
      woff: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.woff'],
        dest: '<%= yeoman.pub %>',
      },
      ttf: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.ttf'],
        dest: '<%= yeoman.pub %>',
      },
      svg: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.svg'],
        dest: '<%= yeoman.pub %>',
      }
    },
    aws: grunt.file.readJSON('aws-keys.json'), // Read the file
    aws_s3: {
      options: {
        // debug: true, // debugging non upload
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'us-west-1',
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous download
      },
      static: {
        options: {
          bucket: 'static.dita.io',
          differential: true, // Only uploads the files that have changed
          params: {
            ContentEncoding: 'gzip', // applies to all the files!
            CacheControl: 'max-age=3153600',
          }
        },
        files: [
          {expand: true, cwd: '<%= yeoman.pub %>/css', src: ['**'], dest: 'travel/css/'},
          {expand: true, cwd: '<%= yeoman.pub %>/js', src: ['**'], dest: 'travel/js/'},
          {expand: true, cwd: '<%= yeoman.pub %>/fonts', src: ['**'], dest: 'travel/fonts/'},
          {expand: true, cwd: '<%= yeoman.pub %>/img', src: ['*.svg'], dest: 'travel/img/'}
        ]
      },
      img: {
        options: {
          bucket: 'static.dita.io',
          differential: true, // Only uploads the files that have changed
          params: {
            CacheControl: 'max-age=3153600',
          },
        },
        files: [
          {expand: true, cwd: '<%= yeoman.pub %>/', src: ['favicon.png'], dest: 'travel/'},
          {expand: true, cwd: '<%= yeoman.pub %>/img', src: ['**'], dest: 'travel/img/'}
        ]
      },
      site: {
        options: {
          bucket: 'travel.dita.io',
          differential: true, // Only uploads the files that have changed
          params: {
            ContentEncoding: 'gzip', // applies to all the files!
            CacheControl: 'max-age=3153600',
          }
        },
        files: [
          {expand: true, cwd: '<%= yeoman.pub %>/', src: ['**/*.html'], dest: '.'},
          {expand: true, cwd: '<%= yeoman.pub %>/', src: ['*.xml'], dest: '.'},
          {expand: true, cwd: '<%= yeoman.pub %>/', src: ['*.txt'], dest: '.'},
        ]
      }
    },
    replace: {
      js: {
        src: ['<%= yeoman.dist %>/**/*.html'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: 'src=/js/',
          to: 'src=http://static.dita.io/travel/js/'
        }]
      },
      css: {
        src: ['<%= yeoman.dist %>/**/*.html'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: 'href=/css/',
          to: 'href=http://static.dita.io/travel/css/'
        }]
      }
    },
    
  }); // End of actual Javascript circuit

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
    'clean',
    'build',
    'compress',
    'concurrent:pub',
    'connect:pub:keepalive'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'coffeelint:check',
    'coffee:dist',
    'jshint:all',
    //'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'concurrent:build',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('default', [
    'clean',
    'check',
    //'test',
    'build'
  ]);
  grunt.registerTask('deploy', [
    'clean',
    'check',
    // 'test',
    'build',
    'replace',
    'compress',
    'concurrent:pub',
    'aws_s3'
  ]);
};

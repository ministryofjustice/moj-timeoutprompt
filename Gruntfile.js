/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      javascripts: {
        src: ['src/**/*.js']
      }
    },

    jasmine: {
      javascripts: {
        src: [
          '<%= jshint.javascripts.src %>'
        ],
        options: {
          vendor: [
            'node_modules/jquery-browser/lib/jquery.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'bower_components/handlebars/handlebars.js'
          ],
          specs: 'spec/unit/*Spec.js'
        }
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      javascripts: {
        files: '<%= jshint.javascripts.src %>',
        tasks: ['jshint:javascript']
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine']);

};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig( {
      bake: {
          your_target: {
              options: {
                  // Task-specific options go here.
              },

              files: {
                  // files go here, like so:

                  //"test.html": "app/test.html"
                  "index.html": "app/index.html",
                  "about.html": "app/about.html"
                  //"dist/mobile.html": "app/mobile.html"

                  // etc ...
              }
          },
      },
  });




  

  // Load the plugin that provides the "bake" task.
  grunt.loadNpmTasks('grunt-bake');

  // Default task(s).
  grunt.registerTask('default', ['bake']);

};
module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
   
    browserify: {
        dist: {
            files: {
              'dist/bundle.js': ['src/app.js']
            },
            options: {
                 'transform': [ ['babelify', { 'presets': ['es2015'] }] ]
            }
        }
    }
});

grunt.registerTask('default', ['browserify']);

};
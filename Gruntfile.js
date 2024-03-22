const { platform } = require('node:process');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-shell');
	grunt.initConfig({
        shell: {
            serve: {
                command: platform === 'win32' ? '.\\bin\\packwiz.exe serve' : 'chmod +x .bin/packwiz.exe && .bin/packwiz.exe serve'
            },
            refresh: {
                command: platform === 'win32' ? '.\\bin\\packwiz.exe refresh' : 'chmod +x .bin/packwiz.exe && .bin/packwiz.exe refresh'
            },
            build: {
                command: platform === 'win32' ? '.\\bin\\packwiz.exe curseforge export -o Create-Tomorrow.zip' : 'chmod +x .bin/packwiz.exe && .bin/packwiz.exe curseforge export -o Create-Tomorrow.zip'
            }
        }
    });

	grunt.registerTask("serve", ["shell:serve"]);
	grunt.registerTask("refresh", ["shell:refresh"]);
	grunt.registerTask("build", ["shell:build"]);
};

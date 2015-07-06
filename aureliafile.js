var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
    js: {
        "dist/app-bundle": {
            modules: [
                '*',
                'aurelia-bootstrapper',
                'aurelia-http-client',
                'aurelia-router',
                'aurelia-animator-css',
                'github:aurelia/templating@0.13.1',
                'github:aurelia/history@0.6.0',
                'github:aurelia/history-browser@0.6.0',
                'github:aurelia/templating-router@0.14.0',
                'github:aurelia/templating-resources@0.13.0',
                'github:aurelia/templating-binding@0.13.0',
                'github:aurelia/binding@0.8.0',
                'github:aurelia/loader-default@0.9.0',
                'github:aurelia/logging-console@0.6.0',
                'github:charlespockert/**/*',
                'github:gooy/aurelia-compiler@0.0.5',
                //'github:webcomponents/webcomponentsjs@0.6.3/HTMLImports.min',
                //'github:aurelia/html-template-element@0.2.0'
            ],
            options: {
                inject: true,
                minify: false
            }
        }
    },
    template: {
        "dist/app-bundle": {
            pattern: ['dist/*.html'],
            options: {
                inject: true
            }
        }
    }
});

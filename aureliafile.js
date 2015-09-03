var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
    js: {
        "dist/app-bundle": {
            modules: [
                '*',
                'aurelia-bootstrapper',
                'aurelia-http-client',
                // 'aurelia-router',
                'aurelia-animator-css',
                'github:aurelia/templating@0.14.4',
                'github:aurelia/history@0.6.1',
                'github:aurelia/history-browser@0.7.0',
                'github:aurelia/templating-router@0.15.0',
                'github:aurelia/templating-resources@0.14.0',
                'github:aurelia/templating-binding@0.14.0',
                'github:aurelia/binding@0.8.6',
                'github:aurelia/loader-default@0.9.5',
                'github:aurelia/logging-console@0.6.2',
                'github:charlespockert/**/*',
                'github:aurelia/html-template-element@0.2.0/**/*',  
                'github:webcomponents/webcomponentsjs@0.6.3/**/*',
            ],
            options: {
                inject: true,
                minify: false
            }
        }
    },
    template: {
        "dist/app-bundle": {
            pattern: ['dist/*.html', 'jspm_packages/github/charlespockert/aurelia-bs-grid@master/**/*.html'],
            options: {
                inject: true
            }
        }
    }
});

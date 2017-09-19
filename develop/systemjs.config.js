// Module Loader

(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // our application files
        '@angular': 'js/@angular', // angular2 packages
        'rxjs': 'js/rxjs', // Rxjs package
        '@angular/material': 'js/@angular/material/bundles/material.umd.js',
        '@angular/animations': 'js/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'js/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'js/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        'hammerjs': 'js/hammer.js',
        '@angular/cdk/platform': 'js/@angular/cdk/bundles/cdk-platform.umd.js',
        '@angular/cdk/a11y': 'js/@angular/cdk/bundles/cdk-a11y.umd.js',
        '@angular/cdk/bidi': 'js/@angular/cdk/bundles/cdk-bidi.umd.js',
        '@angular/cdk/coercion': 'js/@angular/cdk/bundles/cdk-coercion.umd.js',
        '@angular/cdk/observers': 'js/@angular/cdk/bundles/cdk-observers.umd.js',

        '@angular/cdk/overlay': 'js/@angular/cdk/bundles/cdk-overlay.umd.js',
        '@angular/cdk/scrolling': 'js/@angular/cdk/bundles/cdk-scrolling.umd.js',
        '@angular/cdk/keycodes': 'js/@angular/cdk/bundles/cdk-keycodes.umd.js',
        '@angular/cdk/collections': 'js/@angular/cdk/bundles/cdk-collections.umd.js',
        '@angular/cdk/rxjs': 'js/@angular/cdk/bundles/cdk-rxjs.umd.js',
        '@angular/cdk/table': 'js/@angular/cdk/bundles/cdk-table.umd.js',
        '@angular/cdk/portal': 'js/@angular/cdk/bundles/cdk-portal.umd.js'




    };
    // packages tells the System loader which filename and/or extensions to
    //look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };
    // configure @angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'upgrade',
        'forms',
        'router',
        'AppRouting'


    ];
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName +
            '.umd.js', defaultExtension: 'js'
        };
    };
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);
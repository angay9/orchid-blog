let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .styles([
        'resources/assets/css/**/*'
    ], 'public/css/bundle.css')
    .scripts([
        'resources/assets/js/jquery.js',
        'resources/assets/js/imagesloaded.pkgd.js',
        'resources/assets/js/jquery.nicescroll.min.js',
        'resources/assets/js/jquery.carouFredSel-6.0.0-packed.js',
        'resources/assets/js/jquery.easing.1.3.js',
        'resources/assets/js/jquery.mousewheel.min.js',
        'resources/assets/js/jquery.smartmenus.min.js',
        'resources/assets/js/jquery.touchSwipe.min.js',
        'resources/assets/js/main.js',
    ], 'public/js/bundle.js')
    .copy('resources/assets/js/html5.js', 'public/js/html5.js')
    .copy('resources/assets/js/custom_google_map_style.js', 'public/js/custom_google_map_style.js')
    .copyDirectory('resources/assets/images', 'public/css/images')
    .copyDirectory('resources/assets/demo-images', 'public/demo-images')
    .copyDirectory('resources/assets/fonts', 'public/fonts')
;

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

mix.js('resources/assets/js/all.js', 'public/js')
  .js('resources/assets/js/index.js', 'public/js')
  .extract(['vue', 'gsap', 'axios', 'jquery'])
  .copy('semantic/dist/semantic.min.css', 'public/css/semantic.min.css')
  .copy('semantic/dist/components/sidebar.min.js', 'public/js')
  .version()
  .copyDirectory('semantic/dist/themes/default', 'public/css/themes/default');
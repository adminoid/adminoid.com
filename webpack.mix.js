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

mix.js('resources/assets/js/app.js', 'public/js')
  .extract(['vue', 'gsap', 'axios', 'jquery'])
  .copy('semantic/dist/semantic.min.css', 'public/css')
  .copy('semantic/dist/components/sidebar.min.js', 'public/js')
  .version()
  .copyDirectory('semantic/dist/themes/default', 'public/css/themes/default');

mix.webpackConfig({
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
  },
});
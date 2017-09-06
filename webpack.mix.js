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
  .copy('semantic/dist/components/reset.min.css', 'public/css/components')
  .copy('semantic/dist/components/site.min.css', 'public/css/components')
  .copy('semantic/dist/components/container.min.css', 'public/css/components')
  .copy('semantic/dist/components/grid.min.css', 'public/css/components')
  .copy('semantic/dist/components/menu.min.css', 'public/css/components')
  .copy('semantic/dist/components/button.min.css', 'public/css/components')
  .copy('semantic/dist/components/sidebar.min.css', 'public/css/components')
  .copy('semantic/dist/components/sidebar.min.js', 'public/js')
  .copy('semantic/dist/components/header.min.css', 'public/css/components')
  .copy('semantic/dist/components/segment.min.css', 'public/css/components')
  .copy('semantic/dist/components/index.min.css', 'public/css/components')
  .copy('semantic/dist/components/image.min.css', 'public/css/components')
  .copy('semantic/dist/components/price.min.css', 'public/css/components')
  .copy('semantic/dist/components/tools.min.css', 'public/css/components')
  .copy('semantic/dist/components/process.min.css', 'public/css/components')
  .copy('semantic/dist/components/portfolio.min.css', 'public/css/components')
  .copy('semantic/dist/components/icon.min.css', 'public/css/components')
  .copy('semantic/dist/components/card.min.css', 'public/css/components')
  .copy('semantic/dist/components/label.min.css', 'public/css/components')
  .copy('semantic/dist/components/reviews.min.css', 'public/css/components')
  .copy('semantic/dist/components/modal.min.css', 'public/css/components')
  .copy('semantic/dist/components/modal.min.js', 'public/js')
  .copy('semantic/dist/components/dimmer.min.css', 'public/css/components')
  .copy('semantic/dist/components/dimmer.min.js', 'public/js')
  .copy('semantic/dist/components/transition.min.css', 'public/css/components')
  .copy('semantic/dist/components/transition.min.js', 'public/js')
  .copy('semantic/dist/components/form.min.css', 'public/css/components')
  .copy('semantic/dist/components/form.min.js', 'public/js')
  .version()
  .copyDirectory('semantic/dist/themes/default', 'public/css/themes/default');

mix.webpackConfig({
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
  },
});
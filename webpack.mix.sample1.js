const mix = require('laravel-mix');
const path = require('path');

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

// mix.setPublicPath('public');

// mix.webpackConfig(webpack => {
//     return {
//         plugins: [
//             new webpack.ProvidePlugin({
//                 $: 'jquery',
//                 jQuery: 'jquery',
//                 'window.jQuery': 'jquery'
//             })
//         ]
//     };
// });

// mix.webpackConfig({
//     resolve: {
//         // extensions: ['*', '.js', '.jsx', '.vue'],

//         modules: [
//             'node_modules',
//             path.resolve(__dirname, 'vendor/laravel/spark/resources/js')
//         ],

//         alias: {
//             "@": path.resolve(__dirname, "resources/js/")
//         },

//         fallback: {
//             stream: require.resolve('stream-browserify'),
//         },
//     },
//     module: {
//         rules: []
//     },
//     plugins: []
// });

// extract libraries into a separate file
// mix.extract(vendorLibs = ['jquery', 'axios', 'lodash', 'vue']);

// set up global references to libraries – useful for situations where a legacy dependency doesn't use imports (e.g. most jQuery plugins)
// mix.autoload({ jquery: ['$', 'window.jQuery'] });

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

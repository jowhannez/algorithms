let mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.sass('resources/scss/index.scss', 'web/resources/css/index.min.css');

mix.js('resources/js/index.js', 'web/resources/js/index.min.js').polyfill({
   enabled: true,
   useBuiltIns: "usage",
   targets: "firefox 50, IE 11"
});

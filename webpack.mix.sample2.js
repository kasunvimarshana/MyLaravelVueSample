const path = require('path');
const mix = require('laravel-mix');
const { VueLoaderPlugin } = require('vue-loader');
const source = 'resources';
const public = 'public';

mix.options({
  processCssUrls: false,
  uglify: {
    uglifyOptions: {
      compress: {
        drop_console: true
      }
    }
  }
});

mix.setPublicPath(path.normalize(public));

mix.webpackConfig({
  externals: {
    'jquery': 'jQuery'
  },
  output: { chunkFilename: 'js/parts/[name].js' },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          fix: false,
          cache: false,
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: { overlay: true },
  devtool: 'source-map',
  resolve: {
    /* Path Shortcuts */
    alias:{
      /* root */
      '~': path.resolve(__dirname, `${ source }/js`),
      Components: path.resolve(__dirname, `${ source }/js/components`),
      Layouts: path.resolve(__dirname, `${ source }/js/layouts`),
      Pages: path.resolve(__dirname, `${ source }/js/pages`)
    }
  }
});

mix.js(`${ source }/js/myapp.js`, `${ public }/js`);
mix.sass(`${ source }/sass/myapp.scss`, `${ public }/css`, {
  outputStyle: mix.inProduction() ? 'compact' : 'expanded'
});
mix.sourceMaps();
mix.browserSync({
  proxy: 'yourproject.test',
  host: 'yourproject.test',
  files: [
    `${ source }/views/**/*.php`,
    `${ public }/js/**/*.js`,
    `${ public }/css/**/*.css`
  ],
  browser: 'firefox',
  ghostMode: false,
  open: 'external'
});

mix.extract([
  'autotrack',
  'axios',
  'axios-jsonp',
  'noty',
  'popper.js',
  'sweetalert2',
  'tinycolor2',
  'vee-validate',
  'vform',
  'vue',
  'vue-authenticate',
  'vue-axios',
  'vue-element-loading',
  'vue-i18n',
  'vue-router',
  'vue2-google-maps',
  'vuedraggable',
  'vuex',
  'vuex-persistedstate',
  'vuex-router-sync'
]);

if (mix.inProduction()) {
  mix.version();
  mix.disableNotifications();
}

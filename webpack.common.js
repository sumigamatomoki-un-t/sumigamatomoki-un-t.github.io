const path = require('path');
const glob = require('glob');
const { ProvidePlugin } = require('webpack');
const entries = {};
const srcDir = './src';

glob.sync('**/*.js', {
  ignore: 'js/_**/*.js',
  cwd: srcDir
}).map(file => {
  // const key = file.replace('.js', ''); // src/js直下にエントリーポイントがある場合
  const key = file.slice(3).replace('.js', ''); // src/js/**/にエントリーポイントがある場合
  entries[key] = path.resolve(srcDir, file);
});

module.exports =  {
  entry: entries,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/js/_utils'),
    },
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      extend: [path.resolve(__dirname, 'src/js/_utils/jquery.extend'), 'jqueryExtend']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: 'assets/js/vendors',
          test: /node_modules/,
          priority: -10
        },
        common: {
          name: 'assets/js/common',
          test: /src[\\/]js/,
          minChunks: 2
        },
        default: false
      }
    }
  }
};

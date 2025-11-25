const gulp = require('gulp');
const compiler = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfigDev = require('../webpack.dev');
const webpackConfigProd = require('../webpack.prod');
const { destDir } = require('./config');

const script = () => {
  const webpackConfig = (process.env.NODE_ENV || 'development') === 'development' ? webpackConfigDev : webpackConfigProd;
  return webpackStream(webpackConfig, compiler)
    .pipe(gulp.dest(destDir));
};

exports.script = script;
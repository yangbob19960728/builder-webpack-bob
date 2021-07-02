const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: '../dist',
        hot: true,
        stats: 'errors-only',
    },
    devtool: 'cheap-source-map',
    mode: 'development',
};

module.exports = merge(baseConfig, devConfig);

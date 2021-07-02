const merge = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const baseConfig = require('./webpack.base');

const prodConfig = {
    // plugins: [
    //     new OptimizeCssAssetsWebpackPlugin({
    //         assetNameRegExp: /\.css$/g,
    //         cssProcessor: cssnano,
    //     }),
    // ],
    mode: 'production',
    // optimization: {
    //     splitChunks: {
    //         minSize: 0,
    //         cacheGroups: {
    //             commons: {
    //                 // test: /(react|react-dom)/,
    //                 // name: "vender",
    //                 name: 'commons',
    //                 chunks: 'all',
    //                 minChunks: 2,
    //             },
    //         },
    //     },
    // },
};

module.exports = merge(baseConfig, prodConfig);

const merge = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base');

const prodConfig = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'ignore-loader',
            },
            {
                test: /\.less$/,
                use: 'ignore-loader',
            },
        ],
    },
    plugins: [
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: cssnano,
        }),
    ],
    mode: 'production',
};

module.exports = merge(baseConfig, prodConfig);

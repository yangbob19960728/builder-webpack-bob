const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        'large-number': './addFunc.js',
        'large-number.min': './addFunc.js',
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            }),
        ],
    },
};

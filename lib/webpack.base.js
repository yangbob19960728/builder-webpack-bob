
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const { entry, htmlWebpackPlugins } = require('../setMPA');

const projectRoot = process.cwd();
// console.log('entry', entry);

module.exports = {
    entry,
    output: {
        path: path.join(projectRoot, 'dist'),
        filename: '[name]_[chunkhash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader', // 與file-loader比較起來，可以設置較小資源自動轉base64
                        options: {
                            name: 'img/[name]_[hash:8].[ext]',
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        // function doneErrorPlugin() {
        //     this.hooks.done.tap('done', (stats) => {
        //         if (stats.compilation.errors && stats) {
        //             process.exit(1);
        //         }
        //     });
        // },
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',
        }),
    ].concat(htmlWebpackPlugins),
    stats: 'errors-only',
};

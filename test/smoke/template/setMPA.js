const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const path = require('path');

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
    entryFiles.forEach((file) => {
        const match = file.match(/\/src\/(.*)\/index\.js/);
        const pageName = match[1];
        if (match && pageName) {
            entry[pageName] = file;
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, `./src/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: ["vender", pageName],
                    inject: true,
                    minify: {
                        html5: true,
                        collapseWhitespace: true,
                        preserveLineBreaks: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: false
                    }
                })
            )
        }
    });
    return {
        entry,
        htmlWebpackPlugins
    }
}
module.exports = { entry, htmlWebpackPlugins } = setMPA();
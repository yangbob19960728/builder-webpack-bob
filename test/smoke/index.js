const path = require('path');

const webpack = require('webpack');
const rimraf = require('rimraf');

const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: 10000,
});

process.chdir(path.join(__dirname, './template'));


rimraf('./dist', () => {
    const prodConfig = require('../../lib/webpack.prod');

    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.log(err);
            process.exit(2);
        }
        console.log(stats);
        console.log(stats.toString({
            colors: true,
            module: false,
            children: false,
            chunks: false,
        }));

        console.log('build success , start test');
        mocha.addFile(path.join(__dirname, 'html-test.js'));
        mocha.addFile(path.join(__dirname, 'css-js-test.js'));
        mocha.run();
        console.log('END');
    });
});

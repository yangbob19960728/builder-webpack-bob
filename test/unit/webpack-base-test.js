const { describe } = require('mocha');
const assert = require('assert');
const baseConfig = require('../../lib/webpack.base');

describe('webpack.base.js test case', () => {
    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'D:/webpack/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.main, 'D:/webpack/builder-webpack/test/smoke/template/src/main/index.js');
    });
});

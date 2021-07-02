const { describe } = require('mocha');
const assert = require('assert');
const baseConfig = require('../../lib/webpack.base');

describe('webpack.base.js test case', () => {
    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('/test/smoke/template/src/index/index.js') > -1, true);
        assert.equal(baseConfig.entry.main.indexOf('/test/smoke/template/src/main/index.js') > -1, true);
    });
});

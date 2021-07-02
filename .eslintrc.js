module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
    },
    "rules": {
        "indent": ["error", 4],
        "avoidEscape": true
    },
    // "parserOptions": {
    //     "ecmaVersion": 6,
    //     "sourceType": "module",
    //     "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
    //         "jsx": true,
    //         "modules": true
    //     }
    // }
}
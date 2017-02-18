var path = require('path');
var proxy = require('./proxy');

var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: '/dist',
    sDest: './dist',
    entry: {
        index: sBase + 'pages/index/index.js'
    },
    dev: {
        proxy: proxy,
        env: '',
        port: 8083,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    pre: {
        
    },
    prod: {
        path: {
            script: '/static/scripts/',
            style: '/static/style/'
        }
    },
    designWidth:750,
    baseSize:16,
    enableRem:true,
    // postcss-plugin-px2rem 的配置，详细描述参考：https://github.com/ant-tool/postcss-plugin-px2rem
    px2remOptions: {
        rootValue: 750 / 32,
        unitPrecision: 5,
        propWhiteList: [],
        propBlackList: ['font-size'],
        selectorBlackList: ['ignore'],
        ignoreIdentifier: false,
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
    },
    px2rem:{
        remUnit:750 / 16,
        threeVersion:false,
        remVersion:true,
        baseDpr:1,
        remPrecision:6
    }
}
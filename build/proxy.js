module.exports = {
    '/v4': {
        target: 'http://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: { '^/v4': '/v4'}
    }
}
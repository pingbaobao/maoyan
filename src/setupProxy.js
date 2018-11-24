const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/my', {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
            '^/my': ''
        }
    }))
}
const { createProxyMiddleware } = require('http-proxy-middleware')

// https://blogs.zdldove.top/Home/Apis/listWithPage

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://api.nodeplus.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  )
}
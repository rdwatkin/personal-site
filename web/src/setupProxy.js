const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/api/server',
    createProxyMiddleware({
      target: `http://${process.env.SERVER_HOST}`,
      changeOrigin: true,
    })
  )

}

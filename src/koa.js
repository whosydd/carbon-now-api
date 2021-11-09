const Koa = require('koa')
const carbon = require('./carbon')
const transTheme = require('./transTheme')
const app = new Koa()

const getBody = ctx => {
  return new Promise((resolve, reject) => {
    try {
      let postBody = ''
      ctx.req.addListener('data', data => (postBody = data))
      ctx.req.on('end', () => resolve(JSON.parse(postBody)))
    } catch (error) {
      reject(error)
    }
  })
}

app.use(async ctx => {
  const { path, method } = ctx.request
  if (path === '/api' && method.toLowerCase() === 'post') {
    const { code, theme } = await getBody(ctx)
    const url = transTheme(code, theme)
    const img = await carbon(url.href)
    ctx.status = 200
    ctx.type = 'png'
    ctx.body = img
  } else {
    ctx.status = 204
  }
})

// app.listen(8000, () => console.log('server is running on http://localhost:8000'))
app.listen(443)

const express = require('express')
const app = express()
app.use(express.json())
const { loadNuxt, build } = require('nuxt')
const bodyParser = require('body-parser')

const pageRoutes = require('./routes/page')
app.use('/api/createOrder', pageRoutes)

app.use(bodyParser.urlencoded({
  extended: true
}))

const isDev = process.env.NODE_ENV !== 'production'
async function start () {
  try {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
    app.use(nuxt.render)
    if (isDev) {
      build(nuxt)
    }
    app.listen(5000)
  } catch (e) {
    console.log(e)
  }
}

// Запуск приложения.
start()

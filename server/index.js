const express = require('express')
const app = express()
app.use(express.json())
const { loadNuxt, build } = require('nuxt')

const pageRoutes = require('./routes/page')
app.use('/api/createOrder', pageRoutes)
// Подключаем Nuxt в режиме nuxt.render. В этом примере нет отдельного процесса с Nuxt.
const bodyParser = require('body-parser')
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

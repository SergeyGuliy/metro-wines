const express = require('express')
const app = express()
app.use(express.json())

const { loadNuxt, build } = require('nuxt')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }))

const pageRoutes = require('./routes/page')
const mailRoutes = require('./routes/mail')
app.use('/api/createOrder', pageRoutes)
app.use('/mail/send', mailRoutes)

const isDev = process.env.NODE_ENV !== 'production'

async function start () {
  try {
    const nuxt = await loadNuxt('dev')
    app.use(nuxt.render)
    if (isDev) {
      build(nuxt)
    }
    app.listen(5000)
  } catch (e) {
    console.log(e)
  }
}

start()

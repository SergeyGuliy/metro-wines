// const TYPE = 'dev'
const TYPE = 'prod'
const express = require('express')
const router = express.Router()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  port: 587,
  host: 'mail1.metro-cc.ru',
  auth: {
    user: 'support@winelist.metro-cc.ru',
    pass: 'pLSG3x5JtF'
  },
  secure: false,
  tls: {
    ciphers: 'SSLv3'
  }
})

router.post('/', async (req, res) => {
  // eslint-disable-next-line camelcase
  const mailData = {
    from: req.body.from,
    to: 'xsehywx@gmail.com, Irina.naumova01@metro-cc.ru, valeriya.morozova@metro-cc.ru',
    subject: req.body.subject,
    text: req.body.text
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) { console.log(err) } else { console.log(info) }
  })
  res.status(200).json('ok')
})

const multer = require('multer')
const upload = multer({ dest: __dirname + '/public/uploads/' })
const type = upload.single('pdf')

router.post('/pdf', type, async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const file = req.file
  const body = JSON.parse(JSON.stringify(req.body))
  // eslint-disable-next-line no-unused-vars
  const mailData = {
    from: body.from,
    subject: body.subject,
    to: body.to,
    attachments: [{
      filename: 'WineCard.pdf',
      contentType: 'application/pdf',
      path: file.path
    }]
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) { console.log(err) } else { console.log(info) }
  })
  res.status(200).json('ok')
})

module.exports = router

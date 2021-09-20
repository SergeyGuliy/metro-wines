// const TYPE = 'dev'
const TYPE = 'prod'
const express = require('express')
const router = express.Router()
const axios = require('axios')

const origins = {
  dev: 'https://api.staging.metro-cc.ru/api/v1/',
  prod: 'https://api.metro-cc.ru/api/v1/'
}

const origin = origins[TYPE]
const appKey = 'C98BB1B547ECCC17D8AEBEC7116D6/'

router.post('/', async (req, res) => {
  // eslint-disable-next-line camelcase
  let user_hash
  try {
    const data = await axios.get(`${origin}${appKey}${req.body.tradeCenter}/eshop/tradecenter`, {
      params: {
        pick_up: 1
      },
      withCredentials: true
    })
    // eslint-disable-next-line camelcase
    user_hash = data.data.data.basket.user_hash
  } catch (e) {
    res.status(500).send({
      step: 1,
      error: e
    })
  }

  console.log(user_hash)

  const busketToServer = req.body.busketToServer
  await axios.post(`${origin}${appKey}${req.body.tradeCenter}/eshop/basket`, {
    articles: busketToServer
  }, {
    headers: {
      // eslint-disable-next-line camelcase
      Cookie: `metro_user_id=${user_hash}`
    },
    withCredentials: true
  })
    .then(() => {
      res.status(200).json({ user_hash })
    }).catch((e) => {
      res.status(500).send({
        step: 2,
        error: e
      })
    })
})

module.exports = router

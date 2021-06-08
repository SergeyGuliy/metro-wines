const express = require('express')
const router = express.Router()
const axios = require('axios')

// eslint-disable-next-line no-unused-vars
const originDev = 'https://api.staging.metro-cc.ru/api/v1/'
// eslint-disable-next-line no-unused-vars
const originProd = 'https://api.metro-cc.ru/api/v1/'
const appKey = '5C63A1CB1E8954499E3BB93939B7B/'

router.post('/', async (req, res) => {
  // console.log(req.body)
  // console.log(req.body.busketToServer)
  // eslint-disable-next-line camelcase
  let eshop_basket_id
  // eslint-disable-next-line camelcase
  let user_hash
  try {
    const data = await axios.get(`${originDev}${appKey}${req.body.tradeCenter}/eshop/tradecenter`, {
      params: {
        pick_up: 1
      },
      withCredentials: true
    })
    // eslint-disable-next-line camelcase
    eshop_basket_id = data.data.data.basket.eshop_basket_id
    // // eslint-disable-next-line camelcase
    user_hash = data.data.data.basket.user_hash
  } catch (e) {
    console.log(e)
  }
  console.log(req.body.busketToServer)
  console.log(eshop_basket_id)
  console.log(user_hash)
  await axios.put(`${originDev}${appKey}${req.body.tradeCenter}/eshop/basket`, {
    articles: req.body.busketToServer
  }, {
    headers: {
      // eslint-disable-next-line camelcase
      Cookie: `metro_user_id=${user_hash}`
    },
    withCredentials: true
  })
    .then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e.response.config.data)
      console.log(e.response.data.errors)
    })
  res.status(200).json({ message: 'Страница создана' })
})

module.exports = router

import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const originDev = 'https://api.opv.familyagency.ru/api/v1/'
// eslint-disable-next-line no-unused-vars
const originProd = 'https://api.metro-cc.ru/api/v1/'
const appKey = '5C63A1CB1E8954499E3BB93939B7B/'

const config = {
  baseURL: `${originDev}${appKey}`
}

const _axios = axios.create(config)

export const api = {
  tradecenters: {
    getAll: async () => (await _axios.get('tradecenters')).data
  },
  bucket: {
    getMyBucket: async storeId => (await _axios.get(`${storeId}/eshop/basket/`)).data
  }
}

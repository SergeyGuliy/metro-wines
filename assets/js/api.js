import axios from 'axios'

const config = {
  baseURL: 'https://api.metro-cc.ru/api/v1/5C63A1CB1E8954499E3BB93939B7B/'
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

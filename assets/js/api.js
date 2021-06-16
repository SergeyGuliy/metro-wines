import axios from 'axios'
const TYPE = 'prod'
// const TYPE = 'dev'

const origins = {
  dev: 'https://api.staging.metro-cc.ru/api/v1/',
  prod: 'https://api.metro-cc.ru/api/v1/'
}
const origin = origins[TYPE]
const appKey = '5C63A1CB1E8954499E3BB93939B7B/'
const baseURL = `${origin}${appKey}`
const config = {
  baseURL,
  withCredentials: true
}

const _axios = axios.create(config)

axios.defaults.withCredentials = true
_axios.defaults.withCredentials = true

export const api = {
  tradecenters: {
    getAll: async () => (await _axios.get('tradecenters')).data
  },
  products: {
    getProduct: async (storeId, query) => {
      return (await _axios.get(`${storeId}/products`, {
        params: {
          category_id: [412338],
          paginate: 12,
          ...query
        }
      })).data
    },
    getOptProduct: async (storeId, query) => {
      return (await _axios.get(`${storeId}/products`, {
        params: {
          category_id: [412971],
          paginate: 12,
          disabled_categories: 1,
          ...query
        }
      })).data
    },
    search: async (storeId, name) => (await _axios.get(`${storeId}/search`, {
      params: {
        q: name,
        category_id: 412338,
        paginate: 12,
        limit: 30,
        content: 1,
        page: 1,
        in_stock: 0
      }
    })).data,
    wineProducts: async (storeId, categoryId) => (await _axios.get(`${storeId}/categories/${categoryId}`)).data
  },
  feedback: {
    send: async (storeId, feedbackData) => (await _axios.post(`${storeId}/feedbacks`, feedbackData)).data
  }
}

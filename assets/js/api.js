import axios from 'axios'
const TYPE = 'prod'
// const TYPE = 'dev'

const origins = {
  dev: 'https://api.staging.metro-cc.ru/api/v1/',
  prod: 'https://api.metro-cc.ru/api/v1/'
}
const origin = origins[TYPE]
const appKey = 'C98BB1B547ECCC17D8AEBEC7116D6/'
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
          category_id: [413103, 413104, 413106, 413109, 413111, 412338],
          paginate: 12,
          disabled_categories: 1,
          ...query
        }
      })).data
    },
    getOptProduct: async (storeId, query) => {
      return (await _axios.get(`${storeId}/products`, {
        params: {
          category_id: [413103, 413104, 413106, 413109, 413111, 412338],
          paginate: 12,
          disabled_categories: 1,
          ...query
        }
      })).data
    },
    search: async (storeId, name, query) => (await _axios.get(`${storeId}/search`, {
      params: {
        q: name,
        category_id: 413103,
        paginate: 12,
        limit: 12,
        content: 1,
        in_stock: 0,
        ...query
      }
    })).data,
    wineProducts: async (storeId, categoryId) => (await _axios.get(`${storeId}/categories/${categoryId}`)).data
  },
  feedback: {
    send: async (storeId, feedbackData) => (await _axios.post(`${storeId}/feedbacks`, feedbackData)).data
  }
}

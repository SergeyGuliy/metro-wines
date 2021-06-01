import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const originDev = 'https://api.opv.familyagency.ru/api/v1/'
// eslint-disable-next-line no-unused-vars
const originProd = 'https://api.metro-cc.ru/api/v1/'
const appKey = '5C63A1CB1E8954499E3BB93939B7B/'

const config = {
  baseURL: `${originProd}${appKey}`,
  withCredentials: true
}

axios.defaults.headers.get['Content-Type'] = 'application/json'

const _axios = axios.create(config)

_axios.defaults.headers.get['Content-Type'] = 'application/json'

export const api = {
  tradecenters: {
    getAll: async () => (await _axios.get('/tradecenters')).data
  },
  // bucket: {
  //   getMyBasket: async (storeId, userHash) => {
  //     return (await _axios.get(`${storeId}/eshop/basket`, {
  //       params: {
  //         user_hash: userHash
  //       }
  //     })).data
  //   },
  //   changeItemCount: async storeId => (await _axios.put(`${storeId}/eshop/basket`)).data,
  //   addItem: async (storeId, bucketData) => (await _axios.post(`${storeId}/eshop/basket`, bucketData)).data,
  //   deleteItem: async (storeId, bucketData) => (await _axios.delete(`${storeId}/eshop/basket`, bucketData)).data
  // },
  products: {
    getProduct: async (storeId, query) => {
      return (await _axios.get(`/${storeId}/products`, {
        params: {
          category_id: [412338],
          paginate: 12,
          ...query
        }
      })).data
    },
    getProductById: async (storeId, productId) => {
      return (await _axios.get(`/${storeId}/products/${productId}`, {
        params: {
          category_id: [412338],
          paginate: 12
        }
      })).data
    },
    search: async (storeId, name) => (await _axios.get(`/${storeId}/search`, {
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
    search2: async (storeId, name) => (await _axios.get(`/${storeId}/suggestions`, {
      params: {
        query: name,
        category_id: 412338,
        paginate: 12
      }
    })).data,
    categories: async storeId => (await _axios.get(`/${storeId}/categories/tree`)).data,
    wineProducts: async (storeId, categoryId) => (await _axios.get(`${storeId}/categories/${categoryId}`)).data
  },
  feedback: {
    send: async (storeId, feedbackData) => (await _axios.post(`/${storeId}/feedbacks`, feedbackData)).data
  }
}

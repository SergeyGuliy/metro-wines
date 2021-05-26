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
    getMyBasket: async (storeId, userHash) => {
      return (await _axios.get(`${storeId}/eshop/basket`, {
        params: {
          user_hash: userHash
        }
      })).data
    },
    changeItemCount: async storeId => (await _axios.put(`${storeId}/eshop/basket`)).data,
    addItem: async storeId => (await _axios.post(`${storeId}/eshop/basket`)).data,
    deleteItem: async storeId => (await _axios.delete(`${storeId}/eshop/basket`)).data
  },
  products: {
    getProduct1: async storeId => (await _axios.get(`${storeId}/shoppinglists`)).data,
    getProduct2: async storeId => (await _axios.get(`${storeId}/products`, {
      params: {
        category_id: [412338],
        paginate: 12
      }
    })).data,
    categories: async storeId => (await _axios.get(`${storeId}/categories/412338`)).data,
    wineProducts: async (storeId, categoryId) => (await _axios.get(`${storeId}/categories/${categoryId}`)).data
  },
  feedback: {
    send: async (storeId, feedbackData) => (await _axios.post(`${storeId}/feedbacks`, feedbackData)).data
  }
}

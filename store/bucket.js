import Vue from 'vue'
export const strict = false

export const state = () => ({
  bucket: {}
})

export const mutations = {
  SET_BUCKET (state, data) {
    Vue.set(state, 'bucket', data)
  },
  SET_TO_BUCKET (state, { wineData, count }) {
    if (state.bucket[wineData.article]) {
      if (count) {
        Vue.set(state.bucket[wineData.article], 'count', count)
      } else {
        Vue.delete(state.bucket, wineData.article)
      }
    } else {
      Vue.set(state.bucket, wineData.article, {
        wineData,
        count
      })
    }
    localStorage.setItem('bucket', JSON.stringify(state.bucket))
  },
  DELETE_FROM_BUCKET (state, articleId) {
    if (state.bucket[articleId]) {
      Vue.delete(state.bucket, articleId)
    }
    localStorage.setItem('bucket', JSON.stringify(state.bucket))
  }
}

import Vue from 'vue'
export const strict = false
export const state = () => ({
  bucket: {}
})

export const getters = {
  component: (state, getters, rootState) => rootState
}

export const mutations = {
  SET_BUCKET (state, data) {
    Vue.set(state, 'bucket', data)
  },
  SET_TO_BUCKET (state, { wineData, count, userType }) {
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
    if (userType === 'self') {
      localStorage.setItem('bucketSelf', JSON.stringify(state.bucket))
    } else {
      localStorage.setItem('bucketRest', JSON.stringify(state.bucket))
    }
  },
  DELETE_FROM_BUCKET (state, { articleId, userType }) {
    if (state.bucket[articleId]) {
      Vue.delete(state.bucket, articleId)
    }
    if (userType === 'self') {
      localStorage.setItem('bucketSelf', JSON.stringify(state.bucket))
    } else {
      localStorage.setItem('bucketRest', JSON.stringify(state.bucket))
    }
  }
}

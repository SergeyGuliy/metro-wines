import Vue from 'vue'
import { api } from '../assets/js/api'
export const strict = false

export const state = () => ({
  tradeCenters: {},
  userTradeCenter: null,
  userHash: null,
  userType: null
})

export const mutations = {
  SET_TRADE_CENTERS (state, tradeCenters) {
    Vue.set(state, 'tradeCenters', tradeCenters)
  },
  SET_USER_HASH (state, userHash) {
    Vue.set(state, 'userHash', userHash)
  },
  SET_USER_TYPE (state, userType) {
    Vue.set(state, 'userType', userType)
  },
  SET_USER_TRADE_CENTER (state, userTradeCenter) {
    Vue.set(state, 'userTradeCenter', userTradeCenter)
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }, { $cookies }) {
    if ($cookies.get('userHash')) {
      commit('SET_USER_HASH', $cookies.get('userHash'))
    }
    await api.tradecenters.getAll().then((res) => {
      commit('SET_TRADE_CENTERS', res.data)
    }).catch((e) => {
      console.log(e)
    })
    // eslint-disable-next-line no-empty
    if ($cookies.get('userTradeCenterId')) {
      commit('SET_USER_TRADE_CENTER', state.tradeCenters.find((center) => {
        return +center.store_id === +$cookies.get('userTradeCenterId')
      }))
    }
  }
}

export const getters = {
  component: state => state.component

}

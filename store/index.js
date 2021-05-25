import Vue from 'vue'
import { api } from '../assets/js/api'
export const strict = false

export const state = () => ({
  tradeCenters: {},
  userTradeCenter: null
})

export const mutations = {
  SET_TRADE_CENTERS (state, data) {
    Vue.set(state, 'tradeCenters', data)
  },
  SET_USER_TRADE_CENTER (state, data) {
    Vue.set(state, 'userTradeCenter', data)
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit }, { $cookies }) {
    await api.tradecenters.getAll().then((res) => {
      commit('SET_TRADE_CENTERS', res.data)
    }).catch((e) => {
      console.log(e)
    })
    await api.bucket.getMyBucket('10').then((res) => {
      console.log(res.data)
    }).catch((e) => {
      console.log(e)
    })
  }
}

export const getters = {
  component: state => state.component

}

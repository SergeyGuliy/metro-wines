import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import { api } from '../assets/js/api'
export const strict = false

export const state = () => ({
  tradeCenters: {},
  userTradeCenter: null,
  userType: null,
  scrollTo: false,
  cities: []
})

export const mutations = {
  SET_TRADE_CENTERS (state, tradeCenters) {
    Vue.set(state, 'tradeCenters', tradeCenters)
  },
  SET_USER_TYPE (state, userType) {
    Vue.set(state, 'userType', userType)
  },
  SET_USER_TRADE_CENTER (state, userTradeCenter) {
    Vue.set(state, 'userTradeCenter', userTradeCenter)
  },
  SET_SCROLL_TO (state, scrollTo) {
    Vue.set(state, 'scrollTo', scrollTo)
  },
  SET_CITIES (state, cities) {
    Vue.set(state, 'cities', cities)
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }, { $cookies }) {
    await api.tradecenters.getAll().then((res) => {
      commit('SET_TRADE_CENTERS', res.data)
      console.log(res.data)
    }).catch((e) => {
      console.log(e)
    })
    const userType = $cookies.get('userType')
    const userTradeCenterId = $cookies.get('userTradeCenterId')
    if (userType) {
      commit('SET_USER_TYPE', userType)
    }
    if (userTradeCenterId) {
      try {
        commit('SET_USER_TRADE_CENTER', state.tradeCenters.find(i => +i.store_id === +userTradeCenterId))
      } catch (e) {}
    }
    const cities = []
    state.tradeCenters.forEach((tradecenter) => {
      if (!cities.includes(tradecenter.city)) {
        cities.push(tradecenter.city)
      }
    })
    commit('SET_CITIES', cities)
  }
}

export const getters = {
  component: state => state.component

}

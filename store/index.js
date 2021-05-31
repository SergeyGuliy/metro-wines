import Vue from 'vue'
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
}

export const getters = {
  component: state => state.component

}

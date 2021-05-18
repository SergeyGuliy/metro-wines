export const strict = false

export const state = () => ({
  data: {},
  component: null
})

export const mutations = {
  SET_MODAL (state, { data, component }) {
    state.data = data
    state.component = component
  },
  CLOSE_MODAL (state) {
    state.data = {}
    state.component = null
  }
}

export const actions = {
  setModal ({ commit }, data) {
    commit('SET_MODAL', data)
  },
  closeModal ({ commit }) {
    commit('CLOSE_MODAL')
  }
}

export const getters = {
  component: state => state.component

}

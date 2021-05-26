import Vue from 'vue'
export const strict = false

export const state = () => ({
  bucket: {}
})

export const mutations = {
  SET_BUCKET (state, data) {
    Vue.set(state, 'bucket', data)
  }
}

export const actions = {

}

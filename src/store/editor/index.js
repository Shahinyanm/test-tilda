import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isEditorOpened: false,
}

const getters = {
  IS_EDITOR_OPENED: (state) => {
    return state.isEditorOpened
  },
}

const mutations = {
  TOGGLE_EDITOR_OPENED: (state, payload) => {
    state.isEditorOpened = payload
  },
}

const actions = {
  TOGGLE_EDITOR_OPENED ({ commit }, payload) {
    commit('TOGGLE_EDITOR_OPENED', payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
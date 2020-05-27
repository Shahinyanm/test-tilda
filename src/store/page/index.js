import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

const state = {
  pages: [],
  currentPage: {},
}

const getters = {
  /**
   * Get Pages
   * @param state
   * @returns pages Array
   * @constructor
   */
  PAGES: (state) => {
    return state.pages
  },
  /**
   * Get Current Page
   * @param state
   * @return currentPage object
   * @constructor
   */
  CURRENT_PAGE: (state) => {
    return state.currentPage
  },
}

const mutations = {
  /**
   * Add New Page
   * @param state
   * @param payload
   * @constructor
   */
  ADD_NEW_PAGE: (state, payload) => {
    payload = JSON.parse(JSON.stringify(payload))
    payload.uuid = uuidv4()
    payload.components = []
    payload.created_at = new Date()
    state.pages = [
      payload,
      ...state.pages,
    ]
  },
  /**
   * Remove Page
   * @param state
   * @param payload
   * @constructor
   */
  REMOVE_PAGE: (state, payload) => {
    let index = state.pages.findIndex(p => p.uuid === payload.uuid)
    state.pages.splice(index, 1)
  },
  /**
   * Set Current Page
   * @param state
   * @param payload
   * @constructor
   */
  SET_CURRENT_PAGE: (state, payload) => {
    state.currentPage = state.pages.find(p => p.uuid === payload)
  },
  /**
   * Set Current Page Components
   * @param state
   * @param payload
   * @constructor
   */
  SET_CURRENT_PAGE_COMPONENTS: (state, payload) => {
    let index = state.pages.findIndex(p => p.uuid === payload.uuid)
    state.currentPage.components = state.pages[index].components = payload.components
  },
}

const actions = {
  /**
   * Add New Page
   * @param commit
   * @param payload
   */
  addNewPage ({ commit }, payload) {
    commit('ADD_NEW_PAGE', payload)
  },
  /**
   * Remove Page
   * @param commit
   * @param payload
   */
  removePage ({ commit }, payload) {
    commit('REMOVE_PAGE', payload)
  },
  /**
   * Set Current Page
   * @param commit
   * @param payload
   */
  setCurrentPage ({ commit }, payload) {
    commit('SET_CURRENT_PAGE', payload)
  },
  /**
   * Set Current Page Components
   * @param commit
   * @param payload
   */
  setCurrentPageComponents ({ commit }, payload) {
    commit('SET_CURRENT_PAGE_COMPONENTS', payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
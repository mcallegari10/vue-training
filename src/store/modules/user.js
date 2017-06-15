import login from './login'
import sessionService from '../../services/sessionService'
import auth from '../../auth'

const state = {
  user: null,
  isLoggedIn: false
}

const getters = {
  user() { return state.user },
  isLoggedIn() { return state.isLoggedIn }
}

const actions = {
  loggedIn({ commit }) {
    commit('setUserLog', true)
    sessionService.getUserData().then((response) => {
      commit('setUserData', response)
    })
  },
  loggedOut({ commit }) {
    commit('setUserLog', false)
  },
  checkLoggedIn({ commit }) {
    commit('setUserLog', auth.isLoggedIn())
  },
  getUserData({ commit }) {
    sessionService.getUserData().then((response) => {
      commit('setUserData', response)
    })
  }
}

const mutations = {
  setUserLog(state, logStatus) {
    state.isLoggedIn = logStatus
  },
  setUserData(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    login
  }
}

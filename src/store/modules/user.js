import sessionService from '../../services/sessionService'
import auth from '../../auth'

const state = {
  user: null,
  isLoggedIn: false,
  showError: false
}

const getters = {
  user() { return state.user },
  isLoggedIn() { return state.isLoggedIn },
  loginError() { return state.showError }
}

const actions = {
  async login({ commit }, user) {
    return sessionService.login(user.email, user.password).then((response) => {
      commit('hideError')
      auth.login(response)
    }).catch(() => {
      commit('showError')
    })
  },
  async signUp({ commit }, user) {
    return sessionService.signUp(user)
  },
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
  showError(state) {
    state.showError = true
  },
  hideError(state) {
    state.showError = false
  },
  setUserLog(state, userStatus) {
    state.isLoggedIn = userStatus
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
  mutations
}

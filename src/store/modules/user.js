import sessionService from '../../services/sessionService'
import auth from '../../auth'

const state = {
  loginData: {
    email: '',
    password: ''
  },
  user: null,
  isLoggedIn: false,
  showError: false
}

const getters = {
  loginData() { return state.loginData },
  user() { return state.user },
  isLoggedIn() { return state.isLoggedIn },
  loginError() { return state.showError }
}

const actions = {
  changeLoginEmail({ commit }, newEmail) {
    commit('setLoginEmail', newEmail)
  },
  changeLoginPassword({ commit }, newPassword) {
    commit('setLoginPassword', newPassword)
  },
  async login({ state, commit }) {
    return sessionService.login(state.loginData).then((response) => {
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
  setLoginEmail(state, email) {
    state.loginData.email = email
  },
  setLoginPassword(state, password) {
    state.loginData.password = password
  },
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
  state,
  getters,
  actions,
  mutations
}

import sessionService from '../../services/sessionService'
import auth from '../../auth'

const state = {
  showError: false
}

const getters = {
  user() {
    return {
      email: state.email,
      password: state.password
    }
  },
  loginError() { return state.showError }
}

const actions = {
  async login({ commit }, user) {
    return sessionService.login(user.email, user.password).then((response) => {
      commit('hideError')
      auth.login(response)
      return response
    }).catch(() => {
      commit('showError')
    })
  }
}

const mutations = {
  showError(state) {
    state.showError = true
  },
  hideError(state) {
    state.showError = false
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

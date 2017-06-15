import booksService from '../../services/booksService'

const state = {
  book: null,
  summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  bookNotFound: false
}

const getters = {
  book() { return state.book },
  summary() { return state.summary },
  bookNotFound() { return state.bookNotFound }
}

const actions = {
  getBookDetail({ commit }, bookId) {
    booksService.getBookDetail(bookId).then((response) => {
      const book = response
      commit('setBook', book)
    }).catch(() => {
      commit('notFound')
    })
  },
  clearState({ commit }) {
    commit('setBook', null)
  }
}

const mutations = {
  setBook(state, book) {
    state.book = book
  },
  notFound(state) {
    state.bookNotFound = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

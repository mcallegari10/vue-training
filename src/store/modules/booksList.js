import booksService from '../../services/booksService'

const state = {
  books: null,
  filteredBooks: null,
  filterValue: '',
  filterAtt: ''
}

const getters = {
  books() { return state.filteredBooks },
  filterValue() { return state.filterValue },
  filterAtt() { return state.filterAtt }
}

const actions = {
  getAllBooks({ commit }) {
    booksService.getBooks().then((response) => {
      const booksToList = response
      commit('listBooks', booksToList)
    })
  },
  changeFilterAtt({ commit }, newAtt) {
    commit('changeAtt', newAtt)
  },
  changeFilterValue({ commit }, newValue) {
    commit('changeValue', newValue)
  },
  filterBooks({ commit }) {
    commit('filterBooks')
  }
}

const mutations = {
  listBooks(state, booksToList) {
    state.books = booksToList
    state.filteredBooks = booksToList
  },
  changeAtt(state, newAtt) {
    state.filterAtt = newAtt
  },
  changeValue(state, newValue) {
    state.filterValue = newValue
  },
  filterBooks(state) {
    state.filteredBooks = state.books.filter((book) => {
      return book[state.filterAtt].toLowerCase().includes(state.filterValue.toLowerCase())
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

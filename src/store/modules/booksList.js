import booksService from '../../services/booksService'

const state = {
  books: null,
  filteredBooks: null,
  filterOptions: [
    { label: 'Seleccionar filtro', value: '' },
    { label: 'Autor', value: 'author' },
    { label: 'Nombre', value: 'title' }
  ],
  filterValue: '',
  filterAtt: ''
}

const getters = {
  books() { return state.filteredBooks },
  filterOptions() { return state.filterOptions },
  filterValue() { return state.filterValue },
  filterAtt() { return state.filterAtt }
}

const actions = {
  getAllBooks({ commit }) {
    booksService.getBooks().then((response) => {
      const booksToList = response
      commit('listBooks', { booksToList })
    })
  },
  filterBooks({ commit }, filters) {
    commit('changeFilters', filters)
    commit('filterBooks')
  }
}

const mutations = {
  listBooks(state, { booksToList }) {
    state.books = booksToList
    state.filteredBooks = booksToList
  },
  changeFilters(state, { filters }) {
    state.filterValue = filters.filterValue
    state.filterAtt = filters.filterAtt
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

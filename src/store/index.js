import Vue from 'vue'
import Vuex from 'vuex'
import booksList from './modules/booksList'
import bookDetail from './modules/bookDetails'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    booksList,
    bookDetail,
    user
  }
})

export default store

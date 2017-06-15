import Vue from 'vue'
import Vuex from 'vuex'
import booksList from './modules/booksList'
import bookDetail from './modules/bookDetails'
import login from './modules/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    booksList,
    bookDetail,
    login
  }
})

export default store

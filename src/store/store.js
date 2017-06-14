import Vue from 'vue'
import Vuex from 'vuex'
import booksList from './modules/booksList'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    booksList
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import router from '../../../src/router'
import sinon from 'sinon'
import module from '../../../src/store/modules/user'
import Login from '@/components/Login'

Vue.use(Vuex)
Vue.use(VeeValidate)

describe('App.vue', () => {
  let store
  let actions
  let state

  beforeEach(() => {
    state = {
      module: {
        loginData: {
          email: '',
          password: ''  
        },
        user: null,
        isLoggedIn: false,
        showError: false
      }
    }

    actions = {
      changeLoginEmail: sinon.stub(),
      changeLoginPassword: sinon.stub()
    }

    store = new Vuex.Store({
      state,
      actions,
      getters: module.getters
    })
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        test: Login
      },
      store,
      router
    }).$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal('Login')
  })

  it('should dispatch an action when changed value', () => {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        test: Login
      },
      store,
      router
    }).$mount()
    const emailInput = vm.$el.querySelector('.data-input')
    const changeEvent = new window.Event('change')
    emailInput.dispatchEvent(changeEvent)
    expect(actions.changeLoginEmail.calledOnce).to.equal(true)
  })
})

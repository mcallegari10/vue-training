import Vue from 'vue'
import App from '@/components/Login'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title h2').textContent)
      .to.equal('Login')
  })
})

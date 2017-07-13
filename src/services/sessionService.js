import api from './api'

const sessionService = { }

sessionService.login = (loginData) => {
  return api.post('/users/sessions', { email: loginData.email, password: loginData.password }).then((response) => {
    return response.data
  })
}

sessionService.signUp = (user) => {
  return api.post('/users', { user }).then((response) => {
    return response.data
  })
}

sessionService.getUserData = () => {
  return api.get('/users/me').then((response) => {
    return response.data
  })
}

export default sessionService

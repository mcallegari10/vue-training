import axios from 'axios'

const auth = localStorage.getItem('access_token')

const api = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  headers: {
    Authorization: auth
  }
})

export default api

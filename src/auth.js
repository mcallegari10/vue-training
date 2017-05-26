const auth = {}

auth.login = function (data) {
  localStorage.setItem('renew_id', data.renew_id)
  localStorage.setItem('access_token', data.access_token)
}

auth.logout = function () {
  localStorage.removeItem('renew_id')
  localStorage.removeItem('access_token')
}

auth.isLoggedIn = function () {
  return localStorage.getItem('access_token')
}

auth.getAuthHeader = function () {
  return {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
}

export default auth

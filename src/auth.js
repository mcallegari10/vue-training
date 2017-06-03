const auth = { }

auth.login = (data) => {
  localStorage.setItem('renew_id', data.renew_id)
  localStorage.setItem('access_token', data.access_token)
}

auth.logout = () => {
  localStorage.removeItem('renew_id')
  localStorage.removeItem('access_token')
}

auth.isLoggedIn = () => {
  return localStorage.getItem('access_token')
}

export default auth

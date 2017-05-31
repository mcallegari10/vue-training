import api from './api'

const booksService = { }

booksService.getBooks = () => {
  return api.get('/books').then((response) => {
    return response.data
  })
}

booksService.getBookDetail = (bookId) => {
  return api.get(`/books/${bookId}`).then((response) => {
    return response.data
  })
}

export default booksService

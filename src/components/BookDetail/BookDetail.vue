<template lang="pug">
  .book-detail-container
    router-link.go-back(:to='{ name: "dashboard" }')
      | < Volver
    .book-detail(v-if='bookNotFound')
      | 404 Book not found!
    .book-detail
      BookInfo
      Suggestions
      Comment
</template>

<script>
import { mapGetters } from 'vuex'
import BookInfo from './components/BookInfo'
import Suggestions from './components/Suggestions'
import Comment from './components/Comments/Comment'

const bookDetail = {
  name: 'BookDetail',
  props: ['id'],
  components: { BookInfo, Suggestions, Comment },
  computed: {
    ...mapGetters({
      bookNotFound: 'bookNotFound'
    })
  },
  created() {
    this.searchBook()
  },
  destroyed() {
    this.clearBook()
  },
  methods: {
    searchBook() {
      this.$store.dispatch('getBookDetail', this.id)
    },
    clearBook() {
      this.$store.dispatch('clearState')
    }
  }
}

export default bookDetail
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.go-back {
  text-decoration: none;
  color: $black;
}

.book-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
  max-width: 800px;
  padding-bottom: 35px;
}
</style>

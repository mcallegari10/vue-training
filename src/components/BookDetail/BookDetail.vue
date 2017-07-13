<template lang="pug">
  .book-detail-container
    router-link.go-back(:to='{ name: "dashboard" }')
      | < Volver
    BookInfo
    .book-detail(v-if='bookNotFound')
      | 404 Book not found!
</template>

<script>
import { mapGetters } from 'vuex'
import BookInfo from './components/BookInfo'

const bookDetail = {
  name: 'BookDetail',
  props: ['id'],
  components: { BookInfo },
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

</style>

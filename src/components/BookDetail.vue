<template lang="pug">
  .book-detail-container
    router-link.go-back(:to='{ name: "dashboard" }')
      | < Volver
    .book-detail(v-if='book && !bookNotFound')
      img.book-cover(:src='book.image_url'  :class='{ "no-cover": !book.image_url }')
      .book-info
        h4.title
          | {{ book.title }}
        span.author
          | {{ book.author }}
        span.year
          | {{ book.year }}
        span.genre
          | {{ book.genre }}
        p.summary
          | {{ summary }}
        button.rent-button
          | Alquilar
    .book-detail(v-if='bookNotFound')
      | 404 Book not found!
</template>

<script>
import { mapGetters } from 'vuex'

const bookDetail = {
  name: 'bookDetail',
  props: ['id'],
  computed: {
    ...mapGetters({
      book: 'book',
      summary: 'summary',
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
      const bookId = this.id
      this.$store.dispatch('getBookDetail', bookId)
    },
    clearBook() {
      this.$store.dispatch('clearState')
    }
  }
}

export default bookDetail
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.go-back {
  text-decoration: none;
  color: $black;
}

.book-detail {
  border-bottom: 2px solid $blue-1;
  display: flex;
  justify-content: center;
  margin: 40px auto;
  max-width: 800px;
  padding-bottom: 35px;

  .book-cover {
    width: 190px;
    height: 270px;
    margin-right: 20px;
  }

  .no-cover {
    background: url('../assets/default_book.svg') no-repeat center $grey-2;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 100%;

    .title {
      margin-top: 0;
    }

    .author {
      margin-bottom: 20px;
    }

    .year {
      margin-bottom: 10px;
    }

    .summary {
      font-size: 14px;
      color: $grey-3;
      line-height: 19px;
    }

    .rent-button {
      border: 0;
      background-color: $blue-1;
      color: $white;
      font-weight: bold;
      font-size: 20px;
      margin-top: 20px;
      max-width: 190px;
      height: 40px;
    }
  }
}

</style>

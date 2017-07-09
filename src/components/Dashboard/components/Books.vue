<template lang="pug">
  .books-container
    router-link.book(v-for='book of books' :key='book.id' :to='{ name: "book", params: { id: book.id }}')
      img.book-cover(:src='book.image_url' :class='{ "no-cover": !book.image_url }')
      h5.book-title
        | {{ book.title }}
      span.book-author
        | {{ book.author }}  
</template>

<script>
import { mapGetters } from 'vuex'

const Books = {
  name: 'Books',
  computed: {
    ...mapGetters({
      books: 'books'
    })
  }
}

export default Books
</script>

<style lang="scss">
@import "../../../scss/variables";

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 725px;
  width: 100%;

  .book {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 50px 65px 0;
    max-width: 130px;
    text-decoration: none;
    color: $black;
    width: 100%;

    .book-cover {
      height: 180px;
      width: 130px;
    }

    .no-cover {
      background: url('../../../assets/default_book.svg') no-repeat center $grey-2;
    }

    .book-title {
      font-size: 14px;
    }

    .book-author {
      font-size: 12px;
    }
  }
}
</style>
